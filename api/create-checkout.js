// api/create-checkout.js
//
// Vercel Serverless Function.
// Receives the buyer's cart ({ cart: [{ id, qty }, ...] }) from the browser,
// looks up authoritative prices from the CATALOG below (never trusts prices
// sent by the client), and asks Square to create a hosted Payment Link.
// The browser is then redirected to that link to complete payment on Square.

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

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // ---- Required environment variables (set these in Vercel Project Settings) ----
  const ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;
  const LOCATION_ID = process.env.SQUARE_LOCATION_ID;
  const CURRENCY = process.env.SQUARE_CURRENCY || "AUD";
  const SQUARE_ENVIRONMENT = String(
    process.env.SQUARE_ENVIRONMENT || "sandbox"
  ).toLowerCase();
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
    const body = req.body || {};
    const cart = Array.isArray(body.cart) ? body.cart : [];

    if (cart.length === 0) {
      res.status(400).json({ error: "Your bag is empty." });
      return;
    }

    // Build line items server-side from the trusted catalog above.
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

    const origin = `https://${req.headers.host}`;

    const payload = {
      idempotency_key: crypto.randomUUID(),
      order: {
        location_id: LOCATION_ID,
        line_items,
      },
      checkout_options: {
        ask_for_shipping_address: true,
        redirect_url: `${origin}/thank-you.html`,
        shipping_fee: {
          name: "Standard Shipping",
          charge: {
            amount: 1000,
            currency: CURRENCY,
          },
        },
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
    console.error("create-checkout error:", err);
    res.status(500).json({ error: "Server error creating checkout." });
  }
};
