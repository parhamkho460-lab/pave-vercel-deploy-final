const PRODUCTS = [
    {
      id: 'curl-cream',
      name: 'Leave-In Curl Cream',
      tagline: 'Define · Nourish · Anti-Frizz',
      seoTitle: 'Leave-In Curl Cream | Define Curls & Reduce Frizz | PAVE',
      seoDescription: 'Define, hydrate and smooth your curls with PAVE Leave-In Curl Cream. Lightweight moisture and frizz control for soft, bouncy curls with no crunch.',
      permalink: 'leave-in-curl-cream-for-men',
      highlights: [
        'Defines curls without stiffness',
        'Boosts bounce and softness',
        'Smooths frizz while keeping hair touchable',
      ],
      description: 'A lightweight leave-in curl cream that enhances your natural curl pattern, smooths frizz and keeps curls looking healthy and defined all day. The kind of curls that look perfect and actually feel soft.',
      tags: [],
      price: 34.99,
      size: '250ml',
      rating: '★★★★★',
      ratingValue: '4.9',
      reviewCount: '116',
      images: ['creamfruit.png', 'curlcream.png', 'curlcreamai.png', 'creamrank.png'],
    },
    {
      id: 'curl-spray',
      name: 'Curl Spray',
      tagline: 'Enhances Curls · Anti-Frizz',
      seoTitle: 'Curl Refresher Spray | Define & Refresh Curls | PAVE',
      seoDescription: 'Revive, define and refresh your curls between washes with PAVE Curl Spray. Lightweight moisture and movement that never weighs curls down.',
      permalink: 'curl-refresher-spray-for-men',
      highlights: [
        'Refreshes curls between washes',
        'Locks in shape without stickiness',
        'Fights frizz and humidity',
      ],
      description: 'A lightweight refresh spray that brings your curls back to life between washes. Adds moisture, shape and movement without weighing curls down or leaving any sticky residue.',
      tags: [],
      price: 24.99,
      size: '125ml',
      rating: '★★★★☆',
      ratingValue: '4.8',
      reviewCount: '108',
      images: ['curlsprayfruit.png', 'curlspray.png', 'curlsprayai.png', 'curlsprayrank.png'],
    },
    {
      id: 'matte-clay',
      name: 'Matte Clay',
      tagline: 'Matte Finish · High Hold',
      seoTitle: 'Matte Clay for Men | Strong Hold Matte Hair Clay | PAVE',
      seoDescription: 'Get total control without the shine. PAVE Matte Clay delivers a strong, flexible hold with a natural matte finish - easy to style, easy to wash out.',
      permalink: 'matte-clay-for-men',
      highlights: [
        'Heavy texture without the crunch',
        'Keeps styles structured all day',
        'Reworks cleanly and washes out easily',
      ],
      description: 'A flexible matte clay built for clean, textured looks with a natural matte finish. Holds all day without going stiff, crunchy or greasy — and washes out clean first time.',
      tags: [],
      price: 29.99,
      size: '100g',
      rating: '★★★★★',
      ratingValue: '4.9',
      reviewCount: '120',
      images: ['clayfruit.png', 'clay.png', 'clayai.png', 'clayrank.png'],
    },
    {
      id: 'texture-powder',
      name: 'Texture Powder',
      tagline: 'Matte Finish · Volume Boost',
      seoTitle: 'Hair Texture Powder for Men | Instant Volume & Matte Finish | PAVE',
      seoDescription: 'Add instant texture, volume and that fresh barber look with PAVE Texture Powder. Lightweight, matte finish and easy to restyle all day long.',
      permalink: 'hair-texture-powder-for-men',
      highlights: [
        'Instant volume with zero weight',
        'Adds grip and root lift',
        'Leaves hair clean and gritty',
      ],
      description: 'An ultra-fine styling powder that adds instant volume, grip and gritty texture with zero weight and zero shine. Absorbs excess oil at the roots so your hair looks fresh whether it\'s a wash day or not.',
      tags: [],
      price: 29.99,
      size: '2g',
      rating: '★★★★★',
      ratingValue: '4.9',
      reviewCount: '126',
      images: ['texturefruit.png', 'texture.png', 'textureai.png', 'texturerank.png'],
    },
    {
      id: 'sea-salt-spray',
      name: 'Sea Salt Spray',
      tagline: 'Beachy Volume · Natural Waves',
      seoTitle: 'Sea Salt Spray for Men | Beach Texture & Volume | PAVE',
      seoDescription: 'Get effortless beach-textured hair with PAVE Sea Salt Spray. Adds natural movement, volume and grip — use alone or as a pre-styler with PAVE Matte Clay for a stronger hold.',
      permalink: 'sea-salt-spray-for-men',
      highlights: [
        'Natural beach texture with light hold',
        'Adds wave and everyday grit',
        'Pairs flawlessly with PAVE Matte Clay',
      ],
      description: 'A lightweight sea salt formula that creates natural movement and effortless texture. Use it solo for a relaxed finish, or spray throughout your hair before your clay or powder to seriously level up your hold.',
      tags: [],
      price: 29.99,
      size: '200ml',
      rating: '★★★★★',
      ratingValue: '5.0',
      reviewCount: '112',
      images: ['seasaltfruit.png', 'seasaltspray.png', 'seasaltsprayai.png', 'seasaltrank.png'],
    },
  ];
 
  const INGREDIENTS = [
    { id: 'matte-clay', name: 'Matte Clay', image: 'matteclay4logos.png' },
    { id: 'texture-powder', name: 'Texture Powder', image: 'texturepowder4logos.png' },
    { id: 'sea-salt-spray', name: 'Sea Salt Spray', image: 'seasalt4logos.png' },
    { id: 'curl-cream', name: 'Leave-In Curl Cream', image: 'curlcream4logos.png' },
    { id: 'curl-spray', name: 'Curl Spray', image: 'curlspray4logos.png' },
  ];
 
  // Bundle suggestions — pairs of product ids from PRODUCTS above.
  const ROUTINES = [
    { tag: 'The Texture Routine', title: 'Matte Clay + Texture Powder', ids: ['matte-clay', 'texture-powder'] },
    { tag: 'The Modern Routine', title: 'Sea Salt Spray + Matte Clay', ids: ['sea-salt-spray', 'matte-clay'] },
    { tag: 'The Wavy Routine', title: 'Sea Salt Spray + Curl Spray', ids: ['sea-salt-spray', 'curl-spray'] },
    { tag: 'The Curly Routine', title: 'Curl Cream + Curl Spray', ids: ['curl-cream', 'curl-spray'] },
    { tag: 'The Ultimate Texture Routine', title: 'Matte Clay + Texture Powder + Sea Salt Spray', ids: ['matte-clay', 'texture-powder', 'sea-salt-spray'], discountPrice: 79.99, buttonLabel: 'Add Routine To Bag' },
  ];
 
  // Before/after transformations shown in the "Real Results" section.
  // Annotation callouts are baked directly into these images (not rendered via CSS).
  const TRANSFORMATIONS = [
    {
      tag: 'The Texture Routine',
      title: 'Matte Clay + Texture Powder',
      image: 'texture-annotated.jpg',
      routineTag: 'The Texture Routine',
    },
    {
      tag: 'The Modern Routine',
      title: 'Sea Salt Spray + Matte Clay',
      image: 'modern-annotated.jpg',
      routineTag: 'The Modern Routine',
    },
    {
      tag: 'The Wavy Routine',
      title: 'Sea Salt Spray + Curl Spray',
      image: 'wavy-annotated.jpg',
      routineTag: 'The Wavy Routine',
    },
    {
      tag: 'The Curly Routine',
      title: 'Curl Cream + Curl Spray',
      image: 'curly-annotated.jpg',
      routineTag: 'The Curly Routine',
    },
    {
      tag: 'The Ultimate Texture Routine',
      title: 'Matte Clay + Texture Powder + Sea Salt Spray',
      image: 'ultimate-annotated.jpg',
      routineTag: 'The Ultimate Texture Routine',
    },
  ];
  /* ============================================================
     End of editable content.
     ============================================================ */
 
  const PRODUCT_MAP = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
  const INGREDIENT_MAP = Object.fromEntries(INGREDIENTS.map(i => [i.id, i]));
 
  const QUIZ_QUESTIONS = [
    {
      question: 'What is your hair type?',
      options: [
        { label: 'Straight or flat', scores: { 'texture-powder': 3, 'matte-clay': 2 } },
        { label: 'Thick and coarse', scores: { 'matte-clay': 3, 'sea-salt-spray': 1 } },
        { label: 'Wavy or loose curls', scores: { 'sea-salt-spray': 3, 'matte-clay': 1 } },
        { label: 'Curly and frizz-prone', scores: { 'curl-cream': 3, 'curl-spray': 2 } },
      ]
    },
    {
      question: 'What do you want most from your styling routine?',
      options: [
        { label: 'Texture and grit', scores: { 'matte-clay': 2, 'texture-powder': 2 } },
        { label: 'Volume and lift', scores: { 'texture-powder': 3, 'sea-salt-spray': 1 } },
        { label: 'Curl definition', scores: { 'curl-cream': 2, 'curl-spray': 1 } },
        { label: 'Frizz control', scores: { 'curl-cream': 3, 'curl-spray': 1 } },
      ]
    },
    {
      question: 'What finish do you prefer?',
      options: [
        { label: 'Matte — natural, no shine', scores: { 'matte-clay': 2, 'texture-powder': 2 } },
        { label: 'Natural — relaxed, effortless look', scores: { 'sea-salt-spray': 2, 'curl-spray': 1 } },
        { label: 'Soft — touchable, not stiff or crunchy', scores: { 'curl-cream': 2, 'curl-spray': 2 } },
        { label: "I don't mind — just want great hair", scores: { 'sea-salt-spray': 1, 'texture-powder': 1 } },
      ]
    },
    {
      question: 'How much time do you spend styling each morning?',
      options: [
        { label: 'Under 2 minutes — quick and easy', scores: { 'texture-powder': 2, 'curl-spray': 2 } },
        { label: '5–10 minutes — I like to style properly', scores: { 'matte-clay': 1, 'sea-salt-spray': 1 } },
        { label: 'I take my time — I want the best result', scores: { 'matte-clay': 1, 'curl-cream': 1 } },
      ]
    },
    {
      question: 'What style are you going for?',
      options: [
        { label: 'Textured and structured — sharp, grippy hold', scores: { 'matte-clay': 3, 'texture-powder': 3 } },
        { label: 'Modern and beachy — natural movement, held in place', scores: { 'sea-salt-spray': 3, 'matte-clay': 2 } },
        { label: 'Wavy and undone — effortless beach texture', scores: { 'sea-salt-spray': 2, 'curl-spray': 3 } },
        { label: 'Defined curls — enhanced natural shape', scores: { 'curl-cream': 3, 'curl-spray': 2 } },
        { label: 'Full commitment — maximum texture, hold and volume', scores: { 'matte-clay': 2, 'texture-powder': 2, 'sea-salt-spray': 2 } },
      ]
    },
  ];
 
  /* Curated copy for each result pair */
  const PAIR_COPY = {
    'matte-clay|texture-powder': {
      title: 'The Texture Routine',
      copy: 'Built for clean, structured texture that lasts all day. Powder builds grip from the roots; clay locks the shape with a natural matte finish.',
      ids: ['matte-clay', 'texture-powder'],
    },
    'texture-powder|matte-clay': {
      title: 'The Texture Routine',
      copy: 'Built for clean, structured texture that lasts all day. Powder builds grip from the roots; clay locks the shape with a natural matte finish.',
      ids: ['matte-clay', 'texture-powder'],
    },
    'sea-salt-spray|matte-clay': {
      title: 'The Modern Routine',
      copy: 'Sea Salt Spray creates the base movement and texture; Matte Clay locks it in for a style that holds all day without looking overdone.',
      ids: ['sea-salt-spray', 'matte-clay'],
    },
    'matte-clay|sea-salt-spray': {
      title: 'The Modern Routine',
      copy: 'Sea Salt Spray creates the base movement and texture; Matte Clay locks it in for a style that holds all day without looking overdone.',
      ids: ['sea-salt-spray', 'matte-clay'],
    },
    'sea-salt-spray|curl-spray': {
      title: 'The Wavy Routine',
      copy: 'Sea Salt Spray builds natural wave and everyday texture; Curl Spray keeps things defined and frizz-free between washes. Effortless, beachy movement that actually lasts.',
      ids: ['sea-salt-spray', 'curl-spray'],
    },
    'curl-spray|sea-salt-spray': {
      title: 'The Wavy Routine',
      copy: 'Sea Salt Spray builds natural wave and everyday texture; Curl Spray keeps things defined and frizz-free between washes. Effortless, beachy movement that actually lasts.',
      ids: ['sea-salt-spray', 'curl-spray'],
    },
    'curl-cream|curl-spray': {
      title: 'The Curly Routine',
      copy: 'Leave-In Curl Cream defines and nourishes on wash day. Curl Spray keeps your curls refreshed and shaped every day after — no re-washing needed.',
      ids: ['curl-cream', 'curl-spray'],
    },
    'curl-spray|curl-cream': {
      title: 'The Curly Routine',
      copy: 'Leave-In Curl Cream defines and nourishes on wash day. Curl Spray keeps your curls refreshed and shaped every day after — no re-washing needed.',
      ids: ['curl-cream', 'curl-spray'],
    },
  };
 
  const FALLBACK_PAIRS = {
    'matte-clay':     ['matte-clay', 'texture-powder'],
    'texture-powder': ['texture-powder', 'matte-clay'],
    'sea-salt-spray': ['sea-salt-spray', 'matte-clay'],
    'curl-cream':     ['curl-cream', 'curl-spray'],
    'curl-spray':     ['curl-spray', 'curl-cream'],
  };
 
  let quizStep = 0;
  const quizAnswers = Array(QUIZ_QUESTIONS.length).fill(null);
 
  function initQuiz(){
    if(!document.getElementById('quizCard')) return;
    renderQuizStep();
    document.getElementById('quizBack').addEventListener('click', previousQuizStep);
    document.getElementById('quizNext').addEventListener('click', nextQuizStep);
    document.getElementById('quizResultShop').addEventListener('click', ()=> {
      const el = document.getElementById('lineup');
      if(lenis){ lenis.scrollTo(el); } else { el.scrollIntoView({ behavior: 'smooth' }); }
    });
    document.getElementById('quizResultAdd').addEventListener('click', ()=> {
      const resultEl = document.getElementById('quizResult');
      const ids = JSON.parse(resultEl.dataset.ids || '[]');
      if(!ids.length) return;
      if(resultEl.dataset.bundle === 'true'){ addBundle(ids); }
      else { ids.forEach(id => addToCart(id)); openCart(); }
    });
  }
 
  function renderQuizStep(){
    document.getElementById('quizResult').classList.add('hidden');
    const question = QUIZ_QUESTIONS[quizStep];
    document.getElementById('quizProgress').textContent = `Question ${quizStep + 1} of ${QUIZ_QUESTIONS.length}`;
    document.getElementById('quizQuestion').textContent = question.question;
    const optionsEl = document.getElementById('quizOptions');
    optionsEl.innerHTML = question.options.map((opt, idx) => `
      <button class="quiz-option" type="button" data-index="${idx}">
        <span>${opt.label}</span>
      </button>
    `).join('');
    optionsEl.querySelectorAll('.quiz-option').forEach(btn => btn.addEventListener('click', () => selectQuizOption(Number(btn.dataset.index))));
    const selected = quizAnswers[quizStep];
    if(selected !== null){
      const btn = optionsEl.querySelector(`[data-index="${selected}"]`);
      if(btn) btn.classList.add('active');
      document.getElementById('quizNext').disabled = false;
    } else {
      document.getElementById('quizNext').disabled = true;
    }
    document.getElementById('quizBack').disabled = quizStep === 0;
    document.getElementById('quizNext').textContent = quizStep === QUIZ_QUESTIONS.length - 1 ? 'See My Routine' : 'Next';
  }
 
  function selectQuizOption(index){
    quizAnswers[quizStep] = index;
    document.getElementById('quizOptions').querySelectorAll('.quiz-option').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });
    document.getElementById('quizNext').disabled = false;
  }
 
  function nextQuizStep(){
    if(quizAnswers[quizStep] === null) return;
    if(quizStep < QUIZ_QUESTIONS.length - 1){
      quizStep += 1;
      renderQuizStep();
    } else {
      showQuizResult();
    }
  }
 
  function previousQuizStep(){
    if(quizStep === 0) return;
    quizStep -= 1;
    renderQuizStep();
  }
 
  function showQuizResult(){
    const scores = {};
    QUIZ_QUESTIONS.forEach((q, qi) => {
      const answer = quizAnswers[qi];
      if(answer === null) return;
      const option = q.options[answer];
      Object.entries(option.scores).forEach(([id, value]) => {
        scores[id] = (scores[id] || 0) + value;
      });
    });
    const ranked = Object.entries(scores).sort((a,b) => b[1] - a[1]).map(([id]) => id);
 
    // Only recommend the 3-product Ultimate Texture Routine when its three
    // products are genuinely close in score to each other (a real "I want it all"
    // signal) — not just whichever 3 ids happen to rank highest by elimination.
    const ultimateRoutine = ROUTINES.find(r => r.tag === 'The Ultimate Texture Routine');
    let isUltimateMatch = false;
    if(ultimateRoutine){
      const uScores = ultimateRoutine.ids.map(id => scores[id] || 0);
      const minU = Math.min(...uScores);
      const maxU = Math.max(...uScores);
      const otherScores = Object.entries(scores)
        .filter(([id]) => !ultimateRoutine.ids.includes(id))
        .map(([, v]) => v);
      const maxOther = otherScores.length ? Math.max(...otherScores) : 0;
      isUltimateMatch = minU > 0 && minU >= maxU * 0.55 && minU > maxOther;
    }
 
    let pair;
    if(isUltimateMatch){
      pair = {
        title: ultimateRoutine.tag,
        copy: 'You want it all — maximum texture, hold and volume. This bundles the full texture lineup together at a discount.',
        ids: ultimateRoutine.ids,
        discountPrice: ultimateRoutine.discountPrice,
      };
    } else {
      let primary = ranked[0] || 'matte-clay';
      let secondary = ranked[1] || FALLBACK_PAIRS[primary][1];
      if(secondary === primary){ secondary = FALLBACK_PAIRS[primary][1]; }
 
      const pairKey = primary + '|' + secondary;
      const altKey  = secondary + '|' + primary;
      pair = PAIR_COPY[pairKey] || PAIR_COPY[altKey];
      if(!pair){
        const fb = FALLBACK_PAIRS[primary];
        pair = PAIR_COPY[fb[0] + '|' + fb[1]] || PAIR_COPY[fb[1] + '|' + fb[0]];
        pair = pair || { title: 'Your Routine', copy: 'These two products work best together for your hair type and goals.', ids: [primary, secondary] };
      }
    }
 
    const products = pair.ids.map(id => PRODUCT_MAP[id]);
    const fullTotal = products.reduce((s,p) => s + p.price, 0);
    const combined = (pair.discountPrice || fullTotal).toFixed(2);
 
    const resultEl = document.getElementById('quizResult');
    document.getElementById('quizResultTitle').textContent = pair.title;
    document.getElementById('quizResultCopy').textContent = pair.copy;
    document.getElementById('quizResultProducts').innerHTML = pair.ids.map(id => {
      const p = PRODUCT_MAP[id];
      return `
        <div class="quiz-result-product">
          <img src="${p.images[0]}" alt="${p.name}">
          <div>
            <div class="qrp-name">${p.name}</div>
            <div class="qrp-price">$${p.price.toFixed(2)}</div>
          </div>
        </div>
      `;
    }).join('');
    resultEl.dataset.ids = JSON.stringify(pair.ids);
    resultEl.dataset.bundle = pair.discountPrice ? 'true' : 'false';
    document.getElementById('quizResultAdd').textContent = pair.ids.length > 2 ?
      `Add Routine To Bag — $${combined}` : `Add Both To Bag — $${combined}`;
    resultEl.classList.remove('hidden');
    document.getElementById('quizNext').textContent = 'Retake Quiz';
    document.getElementById('quizNext').disabled = false;
    document.getElementById('quizNext').removeEventListener('click', nextQuizStep);
    document.getElementById('quizNext').addEventListener('click', resetQuiz);
  }
 
  function resetQuiz(){
    quizStep = 0;
    quizAnswers.fill(null);
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizNext').textContent = 'Next';
    document.getElementById('quizNext').removeEventListener('click', resetQuiz);
    document.getElementById('quizNext').addEventListener('click', nextQuizStep);
    renderQuizStep();
  }
 
  // Compact "shop" grid on the homepage — each card links out to its own product page.
  function renderShopGrid(){
    const el = document.getElementById('shopGrid');
    if(!el) return;
    el.innerHTML = PRODUCTS.map(p => {
      const saleOld = p.price === 24.99 ? 34.99 : p.price === 34.99 ? 44.99 : 39.99;
      return `
        <a class="shop-card reveal" href="${p.id}.html">
          <div class="shop-card-img">
            ${p.id === 'curl-cream' ? '<span class="shop-card-badge">Best Seller</span>' : ''}
            <img src="${p.images[0]}" alt="PAVE ${p.name}" loading="lazy">
          </div>
          <div class="shop-card-body">
            <div class="shop-card-rating"><span class="stars">${p.rating}</span>(${p.reviewCount})</div>
            <h3>${p.name}</h3>
            <div class="shop-card-price"><span class="old-price">$${saleOld.toFixed(2)}</span> $${p.price.toFixed(2)}</div>
          </div>
        </a>
      `;
    }).join('');
  }
 
  // Full product detail — runs on individual product pages (e.g. matte-clay.html).
  // Reads which product to render from <body data-product-id="...">.
  function renderProductDetail(){
    const container = document.getElementById('productDetail');
    if(!container) return;
    const id = document.body.dataset.productId;
    const p = PRODUCT_MAP[id];
    if(!p) return;
    const saleOld = p.price === 24.99 ? 34.99 : p.price === 34.99 ? 44.99 : 39.99;
    const ingredient = INGREDIENT_MAP[id];
    container.innerHTML = `
      <div class="p-media">
        <div class="p-media-main">
          <img id="img-${p.id}" src="${p.images[0]}" alt="PAVE ${p.name} product image" onclick="openProductModal('${p.id}', currentImageIndex('${p.id}'))" style="cursor:pointer;">
          ${p.images.length > 1 ? `
            <button type="button" class="p-arrow prev" aria-label="Previous image" onclick="event.stopPropagation(); rotateImage('${p.id}', -1)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button type="button" class="p-arrow next" aria-label="Next image" onclick="event.stopPropagation(); rotateImage('${p.id}', 1)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          ` : ''}
        </div>
        <div class="p-thumbs">
          ${p.images.map((src, i) => `
            <div class="p-thumb ${i === 0 ? 'active' : ''}" onclick="swapImage('${p.id}','${src}',this)">
              <img src="${src}" alt="${p.name} view ${i+1}" loading="lazy">
            </div>
          `).join('')}
        </div>
        ${ingredient ? `
          <div class="key-ingredient-wrap reveal" onclick="openIngredientModal('${ingredient.image}','${ingredient.name} — Key Ingredients')">
            <img class="key-ingredient-full" src="${ingredient.image}" alt="${ingredient.name} key ingredient">
            <span class="key-ingredient-zoom" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>
            </span>
          </div>
        ` : ''}
      </div>
      <div class="p-info">
        <div class="tagline">${p.tagline}</div>
        <h3>${p.name}</h3>
        ${p.highlights && p.highlights.length ? `<ul class="p-benefits">${p.highlights.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
        ${p.tags.length ? `<div class="p-tags">${p.tags.map(t => `<span class="p-tag">${t}</span>`).join('')}</div>` : ''}
        <div class="p-rating"><span class="stars">${p.rating}</span> ${p.ratingValue} (${p.reviewCount} reviews)</div>
        <div class="p-buy" style="margin-top:18px;">
          <div class="price"><span class="old-price">$${saleOld.toFixed(2)}</span> $${p.price.toFixed(2)}<span class="size">${p.size}</span></div>
          <button class="add-btn" onclick="addToCart('${p.id}')">Add To Bag
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
        <p class="product-desc">${p.description}</p>
      </div>
    `;
    if(p.seoTitle) document.title = p.seoTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc && p.seoDescription) metaDesc.setAttribute('content', p.seoDescription);
  }
 
  // "Bundle Up" — on a product page, shows every routine that product belongs to.
  function renderBundleUp(){
    const el = document.getElementById('bundleList');
    if(!el) return;
    const id = document.body.dataset.productId;
    const matches = ROUTINES.filter(r => r.ids.includes(id));
    const section = document.getElementById('bundleUpSection');
    if(!matches.length){ if(section) section.style.display = 'none'; return; }
    el.innerHTML = matches.map(r => {
      const items = r.ids.map(pid => PRODUCT_MAP[pid]);
      const total = items.reduce((s, pr) => s + pr.price, 0);
      const priceDisplay = r.discountPrice ?
        `<span class="now">$${r.discountPrice.toFixed(2)}</span><span class="unit"><span class="old-price">$${total.toFixed(2)}</span> ${items.map(pr => '$' + pr.price.toFixed(2)).join(' + ')}</span>` :
        `<span class="now">$${total.toFixed(2)}</span><span class="unit">${items.map(pr => '$' + pr.price.toFixed(2)).join(' + ')}</span>`;
      return `
        <div class="routine-card reveal">
          <span class="routine-tag">${r.tag}</span>
          <h3>${r.title}</h3>
          <div class="routine-items">${items.map(pr => `<span>→</span> ${pr.name}<br>`).join('')}</div>
          <div class="routine-price">${priceDisplay}</div>
          <button class="add-btn" onclick='addBundle(${JSON.stringify(r.ids)})' style="align-self:flex-start;">${r.buttonLabel || 'Add Routine To Bag'}</button>
        </div>
      `;
    }).join('');
  }
 
  function renderRoutines(){
    const el = document.getElementById('routineList');
    if(!el) return;
    el.innerHTML = ROUTINES.map(r => {
      const items = r.ids.map(id => PRODUCT_MAP[id]);
      const total = items.reduce((s, p) => s + p.price, 0);
      const priceDisplay = r.discountPrice ?
        `<span class="now">$${r.discountPrice.toFixed(2)}</span><span class="unit"><span class="old-price">$${total.toFixed(2)}</span> ${items.map(p => '$' + p.price.toFixed(2)).join(' + ')}</span>` :
        `<span class="now">$${total.toFixed(2)}</span><span class="unit">${items.map(p => '$' + p.price.toFixed(2)).join(' + ')}</span>`;
      return `
        <div class="routine-card reveal" id="routine-${slugifyTag(r.tag)}">
          <span class="routine-tag">${r.tag}</span>
          <h3>${r.title}</h3>
          <div class="routine-items">${items.map(p => `<span>→</span> ${p.name}<br>`).join('')}</div>
          <div class="routine-price">${priceDisplay}</div>
          <button class="add-btn" onclick='addBundle(${JSON.stringify(r.ids)})' style="align-self:flex-start;">${r.buttonLabel || 'Add Routine To Bag'}</button>
        </div>
      `;
    }).join('');
  }
 
  // ---------- Real Results (annotated after-shot) ----------
  let currentResultIndex = 0;
 
  function renderResultsTabs(){
    const tabsEl = document.getElementById('resultsTabs');
    tabsEl.innerHTML = TRANSFORMATIONS.map((t, i) => `
      <button type="button" class="results-tab ${i === currentResultIndex ? 'active' : ''}" onclick="showResult(${i})">${t.tag}</button>
    `).join('');
  }
 
  function showResult(index){
    currentResultIndex = index;
    const t = TRANSFORMATIONS[index];
    document.getElementById('resultsTag').textContent = t.tag;
    document.getElementById('resultsTitle').textContent = t.title;
 
    const img = document.getElementById('afterShotImg');
    img.src = t.image;
    img.alt = `${t.tag} result`;
 
    const routineMatch = ROUTINES.find(r => r.tag === t.routineTag);
    const productsEl = document.getElementById('resultsProducts');
    if(routineMatch){
      productsEl.innerHTML = routineMatch.ids.map((id, i) => {
        const p = PRODUCT_MAP[id];
        const plus = i > 0 ? '<span class="plus">+</span>' : '';
        return `${plus}<img src="${p.images[0]}" alt="${p.name}">`;
      }).join('');
    } else {
      productsEl.innerHTML = '';
    }
 
    document.getElementById('resultsShopBtn').onclick = () => {
      const targetId = routineMatch ? `routine-${slugifyTag(routineMatch.tag)}` : 'lineup';
      const el = document.getElementById(targetId) || document.getElementById('lineup');
      if(lenis){ lenis.scrollTo(el); } else { el.scrollIntoView({ behavior: 'smooth' }); }
    };
    renderResultsTabs();
  }
 
  function initResultsSlider(){
    if(!document.getElementById('afterShot')) return;
    showResult(0);
  }
 
  function renderIngredients(){
    const el = document.getElementById('ingredientList');
    if(!el) return;
    el.innerHTML = INGREDIENTS.map(i => `
      <div class="ing-card" onclick="openIngredientModal('${i.image}','${i.name}')">
        <img src="${i.image}" alt="${i.name} image">
        <h4>${i.name}</h4>
      </div>
    `).join('');
  }
 
  let currentModalProductId = null;
  let currentModalImageIndex = 0;
 
  function openIngredientModal(src, title){
    currentModalProductId = null;
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    if(!modal || !modalImg) return;
    modalImg.src = src;
    modalImg.alt = title;
    modal.classList.add('open');
  }
 
  function openProductModal(productId, index){
    currentModalProductId = productId;
    currentModalImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const product = PRODUCT_MAP[productId];
    if(!modal || !modalImg || !product) return;
    modalImg.src = product.images[index];
    modalImg.alt = product.name;
    modal.classList.add('open');
  }
 
  function rotateModalImage(delta){
    // no longer used because the modal does not show arrows
  }
 
  function closeImageModal(){
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    if(!modal || !modalImg) return;
    modal.classList.remove('open');
    modalImg.src = '';
    currentModalProductId = null;
    currentModalImageIndex = 0;
  }
 
  const productImageIndex = {};
 
  function currentImageIndex(productId){
    return productImageIndex[productId] || 0;
  }
 
  function setActiveThumb(productId, index){
    const mainImg = document.getElementById('img-' + productId);
    if(!mainImg) return;
    const thumbs = mainImg.closest('.p-media').querySelectorAll('.p-thumb');
    thumbs.forEach((t, i)=> t.classList.toggle('active', i === index));
  }
 
  function swapImage(productId, src, thumbEl){
    const mainImg = document.getElementById('img-' + productId);
    if(mainImg){ mainImg.style.opacity = 0; setTimeout(()=>{ mainImg.src = src; mainImg.style.opacity = 1; }, 120); }
    const thumbs = thumbEl.parentElement.querySelectorAll('.p-thumb');
    thumbs.forEach((t, i)=>{
      t.classList.remove('active');
      if(t === thumbEl) productImageIndex[productId] = i;
    });
    thumbEl.classList.add('active');
  }
 
  function rotateImage(productId, delta){
    const product = PRODUCT_MAP[productId];
    if(!product) return;
    const total = product.images.length;
    const current = currentImageIndex(productId);
    const next = (current + delta + total) % total;
    productImageIndex[productId] = next;
    const mainImg = document.getElementById('img-' + productId);
    if(mainImg){ mainImg.style.opacity = 0; setTimeout(()=>{ mainImg.src = product.images[next]; mainImg.style.opacity = 1; }, 120); }
    setActiveThumb(productId, next);
  }
 
  // ---------- Cart (persisted in localStorage) ----------
  const CART_KEY = 'pave_cart_v1';
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer;
 
  // Some mobile browsers restore a page from cache (e.g. swiping back) with
  // whatever DOM state it was left in — if the toast happened to be mid-animation
  // when the person navigated away, it can come back looking permanently stuck.
  // Force it hidden on every page show so it never appears without a fresh action.
  window.addEventListener('pageshow', () => {
    clearTimeout(toastTimer);
    toast.classList.remove('pave-toast--visible');
  });
  // In-app browsers (TikTok, Instagram) and general app-switching can background
  // a tab mid-timer without firing pageshow the way Safari/Chrome do. Catch that
  // case too: whenever the tab becomes visible again, clear any stale toast.
  document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
      clearTimeout(toastTimer);
      toast.classList.remove('pave-toast--visible');
    }
  });
 
  function showToast(msg){
    toastMsg.textContent = msg;
    toast.classList.add('pave-toast--visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=> toast.classList.remove('pave-toast--visible'), 2400);
  }
  function getCart(){
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch(e){ return []; }
  }
  function saveCart(cart){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
    updateBagCount();
  }
  function addToCart(id){
    const p = PRODUCT_MAP[id];
    if(!p) return;
    const cart = getCart();
    const existing = cart.find(i=>i.id===id);
    if(existing){ existing.qty++; } else { cart.push({ id, name:p.name, price:p.price, image:p.images[0], qty:1 }); }
    saveCart(cart);
    showToast(`Added "${p.name}" to cart`);
  }
  function slugifyTag(tag){
    return tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  function addBundle(ids){
    const routine = ROUTINES.find(r => r.discountPrice && r.ids.length === ids.length && ids.every(id => r.ids.includes(id)));
    if(routine){
      const bundleId = `bundle-${slugifyTag(routine.tag)}`;
      const cart = getCart();
      const existing = cart.find(i => i.id === bundleId);
      if(existing){
        existing.qty += 1;
      } else {
        cart.push({
          id: bundleId,
          name: `${routine.title} (Bundle)`,
          price: routine.discountPrice,
          image: PRODUCT_MAP[ids[0]].images[0],
          qty: 1,
          bundle: true,
        });
      }
      saveCart(cart);
      showToast(`Added "${routine.title}" for $${routine.discountPrice.toFixed(2)}`);
      openCart();
      return;
    }
    ids.forEach(id=>addToCart(id));
    openCart();
  }
  function updateQty(id, delta){
    const cart = getCart();
    const item = cart.find(i=>i.id===id);
    if(!item) return;
    item.qty += delta;
    if(item.qty <= 0){ removeFromCart(id); return; }
    saveCart(cart);
  }
  function removeFromCart(id){
    saveCart(getCart().filter(i=>i.id!==id));
  }
  function updateBagCount(){
    const count = getCart().reduce((s,i)=>s+i.qty,0);
    document.getElementById('bagCount').textContent = count;
  }
  function renderCart(){
    const cart = getCart();
    const itemsEl = document.getElementById('cartItems');
    const emptyEl = document.getElementById('cartEmpty');
    const subtotalEl = document.getElementById('cartSubtotal');
    const checkoutBtn = document.getElementById('cartCheckoutBtn');
    if(cart.length === 0){
      itemsEl.innerHTML = '';
      emptyEl.style.display = 'block';
      checkoutBtn.disabled = true;
    } else {
      emptyEl.style.display = 'none';
      checkoutBtn.disabled = false;
      itemsEl.innerHTML = cart.map(i => `
        <div class="cart-item">
          <img src="${i.image}" alt="${i.name}">
          <div>
            <div class="cart-item-name">${i.name}</div>
            <div class="cart-item-price">$${i.price.toFixed(2)}</div>
            <div class="cart-qty">
              <button onclick="updateQty('${i.id}', -1)" aria-label="Decrease quantity">−</button>
              <span>${i.qty}</span>
              <button onclick="updateQty('${i.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="cart-remove" onclick="removeFromCart('${i.id}')" aria-label="Remove item">&times;</button>
        </div>
      `).join('');
    }
    const subtotal = cart.reduce((s,i)=> s + i.price*i.qty, 0);
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  }
  function openCart(){
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('cartOverlay').classList.add('show');
  }
  function closeCart(){
    document.getElementById('cartDrawer').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('show');
  }
  document.getElementById('bagBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
 
  document.getElementById('cartCheckoutBtn').addEventListener('click', async ()=>{
    const cart = getCart();
    if(cart.length === 0) return;
    const btn = document.getElementById('cartCheckoutBtn');
    const errorEl = document.getElementById('cartError');
    errorEl.textContent = '';
    btn.disabled = true;
    btn.textContent = 'Redirecting…';
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart: cart.map(i => ({ id: i.id, qty: i.qty })) })
      });
      const data = await res.json();
      if(!res.ok || !data.url){ throw new Error(data.error || 'Checkout failed'); }
      window.location.href = data.url;
    } catch(err){
      errorEl.textContent = err.message || 'Something went wrong. Please try again.';
      btn.disabled = false;
      btn.textContent = 'Checkout with Square';
    }
  });
 
  // ---------- FAQ accordion ----------
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if(item.classList.contains('open')){ a.style.maxHeight = a.scrollHeight + 'px'; }
    q.addEventListener('click', ()=>{
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o=>{
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
 
  // ---------- Newsletter (front-end only) ----------
  const nlForm = document.getElementById('nlForm');
  if(nlForm){
    nlForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      showToast("You're on the list — check your inbox");
      e.target.reset();
    });
  }
 
  // ---------- Scroll reveal ----------
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.15});
  function observeReveals(){ document.querySelectorAll('.reveal').forEach(el=> io.observe(el)); }
 
  // ---------- Smooth scroll (Lenis) ----------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lenis = null;
  if(!prefersReducedMotion && window.Lenis){
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
 
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      const href = a.getAttribute('href');
      if(href.length > 1){
        a.addEventListener('click', (e)=>{
          const el = document.querySelector(href);
          if(el){ e.preventDefault(); lenis.scrollTo(el); }
        });
      }
    });
  }
 
  // ---------- Sticky Shop Now bar ----------
  function initStickyCta(){
    const bar = document.getElementById('stickyCta');
    const footer = document.querySelector('footer');
    if(!bar || !footer) return;
 
    const hero = document.querySelector('.hero');
    const lineup = document.getElementById('lineup');
 
    function update(state, shouldShow){
      bar.classList.toggle('pave-sticky-cta--visible', shouldShow);
      document.body.classList.toggle('pave-cta-visible', shouldShow);
    }
 
    if(hero && lineup){
      // Homepage: hide while the hero or shop grid is on screen, show elsewhere.
      const state = { hero: true, lineup: false, footer: false };
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.target === hero) state.hero = entry.isIntersecting;
          if(entry.target === lineup) state.lineup = entry.isIntersecting;
          if(entry.target === footer) state.footer = entry.isIntersecting;
        });
        update(state, !state.hero && !state.lineup && !state.footer);
      }, { threshold: 0.08 });
      io.observe(hero);
      io.observe(lineup);
      io.observe(footer);
    } else {
      // Product pages: show once scrolled a bit down, hide near the footer.
      const state = { footer: false };
      const check = () => update(state, window.scrollY > 500 && !state.footer);
      window.addEventListener('scroll', check, { passive: true });
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if(entry.target === footer) state.footer = entry.isIntersecting; });
        check();
      }, { threshold: 0.08 });
      io.observe(footer);
      check();
    }
  }
 
  // ---------- Init ----------
  renderShopGrid();
  renderProductDetail();
  renderBundleUp();
  renderRoutines();
  renderIngredients();
  initQuiz();
  initResultsSlider();
  observeReveals();
  updateBagCount();
  renderCart();
  initStickyCta();
 