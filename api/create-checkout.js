// api/create-checkout.js
//
// Vercel Serverless Function.
// Receives the buyer's cart ({ cart: [{ id, qty }, ...] }) from the browser,
// looks up authoritative prices from the CATALOG below (never trusts prices
// sent by the client), and asks Square to create a hosted Payment Link.
// Shipping method and cost are chosen by the buyer on Square's checkout page.

const crypto = require("crypto");

// ---- Authoritative product catalog (must match assets/PRODUCTS in index.html) ----
const CATALOG = {
  "matte-clay": { name: "PAVE Matte Clay (100g)", priceCents: 2999 },
  "curl-cream": { name: "PAVE Leave-In Curl Cream (250ml)", priceCents: 3499 },
  "sea-salt-spray": { name: "PAVE Sea Salt Spray (200ml)", priceCents: 2999 },
  "curl-spray": { name: "PAVE Curl Spray (125ml)", priceCents: 2499 },
  "texture-powder": { name: "PAVE Texture Powder (2g)", priceCents: 2999 },
  "bundle-the-ultimate-texture-routine": {
    name: "PAVE Ultimate Texture Routine Bundle",
    priceCents: 7999,
  },
};

const SHIPPING_OPTIONS = [
  {
    name: "Standard Shipping (2-5 Business Days)",
    amount: 1299,
  },
  {
    name: "Express Shipping (1-3 Business Days)",
    amount: 1899,
  },
];

function parseRequestBody(req) {
  try {
    const raw = req.body;
    if (raw == null || raw === "") return {};
    if (typeof raw === "object" && !Buffer.isBuffer(raw)) return raw;
    if (typeof raw === "string") return raw.trim() ? JSON.parse(raw) : {};
    return {};
  } catch (_err) {
    const error = new Error("Invalid JSON");
    error.statusCode = 400;
    throw error;
  }
}

function resolveSquareEnvironment() {
  if (process.env.SQUARE_ENVIRONMENT) {
    return String(process.env.SQUARE_ENVIRONMENT).toLowerCase();
  }
  if (process.env.VERCEL_ENV === "production") return "production";
  return "sandbox";
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;
  const LOCATION_ID = process.env.SQUARE_LOCATION_ID;
  const CURRENCY = process.env.SQUARE_CURRENCY || "AUD";
  const SQUARE_ENVIRONMENT = resolveSquareEnvironment();
  const IS_SANDBOX = SQUARE_ENVIRONMENT === "sandbox";

  if (!ACCESS_TOKEN || !LOCATION_ID) {
    console.error("Missing SQUARE_ACCESS_TOKEN or SQUARE_LOCATION_ID env vars.");
    res.status(500).json({
      error:
        "Checkout isn't configured yet. Missing Square credentials on the server.",
    });
    return;
  }

  try {
    const body = parseRequestBody(req);
    const cart = Array.isArray(body.cart) ? body.cart : [];

    if (cart.length === 0) {
      res.status(400).json({ error: "Your bag is empty." });
      return;
    }

    const line_items = [];
    for (const entry of cart) {
      const product = CATALOG[entry && entry.id];
      if (!product) continue;
      const qty = Math.max(1, Math.min(20, parseInt(entry.qty, 10) || 1));
      line_items.push({
        name: product.name,
        quantity: String(qty),
        base_price_money: {
          amount: product.priceCents,
          currency: CURRENCY,
        },
      });
    }

    if (line_items.length === 0) {
      res.status(400).json({ error: "No valid items found in your bag." });
      return;
    }

    const baseUrl = IS_SANDBOX
      ? "https://connect.squareupsandbox.com"
      : "https://connect.squareup.com";

    const origin = req.headers["x-forwarded-host"]
      ? `https://${req.headers["x-forwarded-host"]}`
      : req.headers.host
        ? `https://${req.headers.host}`
        : "https://localhost";

    const shipping_fee_options = SHIPPING_OPTIONS.map((option) => ({
      name: option.name,
      charge: {
        amount: option.amount,
        currency: CURRENCY,
      },
    }));

    const payload = {
      idempotency_key: crypto.randomUUID(),
      order: {
        location_id: LOCATION_ID,
        line_items,
      },
      checkout_options: {
        ask_for_shipping_address: true,
        redirect_url: `${origin}/thank-you.html`,
        shipping_fee_options,
      },
    };

    const squareRes = await fetch(
      `${baseUrl}/v2/online-checkout/payment-links`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Square-Version": "2026-05-20",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await squareRes.json();

    if (!squareRes.ok) {
      console.error("Square API error:", JSON.stringify(data));
      res.status(502).json({
        error: "Square couldn't create the checkout. Please try again.",
        details: data,
      });
      return;
    }

    res.status(200).json({ url: data.payment_link.url });
  } catch (err) {
    if (err.statusCode === 400) {
      res.status(400).json({ error: "Invalid request body. Please refresh and try again." });
      return;
    }

    console.error("create-checkout error:", err);
    res.status(500).json({ error: "Server error creating checkout." });
  }
};
