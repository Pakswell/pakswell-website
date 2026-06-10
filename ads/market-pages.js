(function () {
  var COMMON_PRODUCTS = [
    {
      kicker: "EPAL pallets",
      title: "New EPAL Euro pallets",
      text: "New EPAL Euro pallets manufactured for export buyers. Core models include EPAL 1 1200 x 800 mm and EPAL 3 1200 x 1000 mm, with ISPM 15 heat treatment."
    },
    {
      kicker: "Pallet collars",
      title: "Foldable wooden pallet collars",
      text: "Standard 1200 x 800 mm, 1200 x 1000 mm, 600 x 800 mm, and custom sizes for reusable export packaging and modular box systems."
    },
    {
      kicker: "Hinges",
      title: "Galvanized pallet collar hinges",
      text: "In-house galvanized hinge production for pallet collars, repeat orders, custom drawings, hole patterns, and finishes."
    },
    {
      kicker: "Accessories",
      title: "Plywood lids and plastic corners",
      text: "Matched plywood lids and plastic corner protectors for pallet collar sets, mixed loading, and export-ready packaging kits."
    },
    {
      kicker: "Custom packaging",
      title: "Custom wooden packaging",
      text: "Custom packaging support for fasteners, castings, auto parts, machinery components, and industrial goods shipped from Asia to Europe."
    }
  ];

  var COMMON_DOCS = [
    {
      kicker: "Wood packaging",
      title: "ISPM 15 and treatment documents",
      text: "ISPM 15 marking, heat treatment, fumigation, and phytosanitary document requirements are confirmed by email for each shipment."
    },
    {
      kicker: "Trade documents",
      title: "Commercial shipping documents",
      text: "Invoice, packing list, bill of lading, insurance, and related shipping documents are prepared according to the confirmed order."
    },
    {
      kicker: "Origin documents",
      title: "COO on request",
      text: "Certificate of Origin and requested COO types can be discussed after the buyer confirms destination, HS code, and import requirements."
    },
    {
      kicker: "EPAL",
      title: "EPAL license confirmation",
      text: "EPAL production license information is available for formal new EPAL pallet inquiries and can be shared through the sales follow-up."
    }
  ];

  var MARKETS = {
    japan: {
      country: "Japan",
      product: "market-japan",
      canonical: "https://www.pakswell.com/ads/japan",
      eyebrow: "Japan export packaging | EPAL & ISPM 15",
      heroTitle: "EPAL pallets and pallet collars for Japan exporters shipping to Europe",
      heroCopy: "PAKSWELL supplies new EPAL Euro pallets, pallet collars, hinges, plywood lids, plastic corners, and custom wooden packaging from China for Japanese factories and export companies shipping industrial goods to Europe.",
      facts: ["New EPAL pallets only", "Fast production planning", "1 x 40'HQ mixed loading", "Quote details by email"],
      keywords: "Local keyword fit: EPALパレット, ユーロパレット, パレットカラー 輸入, 木製梱包 輸出.",
      buyerFocus: "Japanese fastener, casting, auto parts, machinery component, and industrial goods exporters shipping to Europe.",
      destination: "Delivery can be planned for major ports in Japan.",
      marketNote: "Japanese B2B buyers usually care about document clarity, EPAL authenticity, ISPM 15 marking, and stable repeat supply more than broad marketing claims.",
      quoteTitle: "Get a Japan export packaging quote",
      quoteLead: "Send your product mix, destination market, target timeline, and document requirements. Pricing, freight, trade terms, and document details are confirmed by email.",
      subject: "Japan Export Packaging RFQ from Google Ads Landing Page",
      destinationPlaceholder: "Japan / destination port if known...",
      quantityPlaceholder: "1 x 40'HQ mixed load, 2 containers..."
    },
    korea: {
      country: "Korea",
      product: "market-korea",
      canonical: "https://www.pakswell.com/ads/korea",
      eyebrow: "Korea export packaging | EPAL & ISPM 15",
      heroTitle: "EPAL pallets and pallet collars for Korean exporters shipping to Europe",
      heroCopy: "PAKSWELL supports Korean factories and export companies with new EPAL Euro pallets, pallet collars, galvanized hinges, plywood lids, plastic corners, and custom export packaging from China.",
      facts: ["New EPAL pallets only", "Fast production planning", "1 x 40'HQ mixed loading", "Quote details by email"],
      keywords: "Local keyword fit: EPAL 팔레트, 목재 파렛트 수입, 유럽 수출 파렛트, 팔레트 칼라.",
      buyerFocus: "Korean fastener, casting, automotive parts, machinery, and industrial goods exporters shipping to Europe.",
      destination: "Delivery can be planned for major ports in Korea.",
      marketNote: "Korean import buyers often check quarantine documents, ISPM 15 treatment, origin paperwork, and reliable container loading before placing repeat orders.",
      quoteTitle: "Get a Korea export packaging quote",
      quoteLead: "Share your product mix, destination market, target timeline, and document requirements. Pricing, freight, trade terms, and document details are confirmed by email.",
      subject: "Korea Export Packaging RFQ from Google Ads Landing Page",
      destinationPlaceholder: "Korea / destination port if known...",
      quantityPlaceholder: "1 x 40'HQ, mixed EPAL pallets and collars..."
    },
    vietnam: {
      country: "Vietnam",
      product: "market-vietnam",
      canonical: "https://www.pakswell.com/ads/vietnam",
      eyebrow: "Vietnam export packaging | EPAL & ISPM 15",
      heroTitle: "EPAL pallets and pallet collars for Vietnam exporters shipping to Europe",
      heroCopy: "PAKSWELL supplies export-ready EPAL pallets, pallet collars, pallet collar hinges, plywood lids, plastic corners, and custom wooden packaging for Vietnam-based factories shipping industrial goods to Europe.",
      facts: ["Fast production planning", "1 x 40'HQ MOQ", "Mixed loading supported", "Quote details by email"],
      keywords: "Local keyword fit: pallet EPAL, pallet gỗ xuất khẩu, pallet collar, bao bì gỗ xuất khẩu châu Âu.",
      buyerFocus: "Vietnamese fastener, casting, auto parts, machinery component, and industrial exporters shipping to Europe.",
      destination: "Delivery can be planned for major ports in Vietnam.",
      marketNote: "Vietnam buyers often need one container to combine pallets, collars, lids, hinges, and accessories into one practical export packaging shipment.",
      quoteTitle: "Get a Vietnam export packaging quote",
      quoteLead: "Tell us the product mix, destination market, target timeline, and documents needed for customs or buyer approval. Commercial details are confirmed by email.",
      subject: "Vietnam Export Packaging RFQ from Google Ads Landing Page",
      destinationPlaceholder: "Vietnam / destination port if known...",
      quantityPlaceholder: "1 x 40'HQ mixed load..."
    },
    taiwan: {
      country: "Taiwan",
      product: "market-taiwan",
      canonical: "https://www.pakswell.com/ads/taiwan",
      eyebrow: "Taiwan export packaging | EPAL & ISPM 15",
      heroTitle: "EPAL pallets and pallet collars for Taiwan exporters shipping to Europe",
      heroCopy: "PAKSWELL supplies new EPAL Euro pallets and European-standard wooden packaging from China for Taiwan factories and exporters that need reliable packaging for Europe-bound cargo.",
      facts: ["New EPAL pallets only", "COO support by request", "1 x 40'HQ mixed loading", "Quote details by email"],
      keywords: "Local keyword fit: EPAL 棧板, 歐標棧板, 木質圍板, 出口木箱包裝.",
      buyerFocus: "Taiwan fastener, casting, auto parts, electronics component, machinery, and industrial goods exporters shipping to Europe.",
      destination: "Delivery can be planned for major ports in Taiwan.",
      marketNote: "Taiwan buyers usually compare documentation, stable specifications, and mixed-container efficiency before selecting an export packaging supplier.",
      quoteTitle: "Get a Taiwan export packaging quote",
      quoteLead: "Send the product mix, destination market, target timeline, and any COO or import document requirements. Commercial details are confirmed by email.",
      subject: "Taiwan Export Packaging RFQ from Google Ads Landing Page",
      destinationPlaceholder: "Taiwan / destination port if known...",
      quantityPlaceholder: "1 x 40'HQ, EPAL pallets + collars..."
    },
    malaysia: {
      country: "Malaysia",
      product: "market-malaysia",
      canonical: "https://www.pakswell.com/ads/malaysia",
      eyebrow: "Malaysia export packaging | EPAL & ISPM 15",
      heroTitle: "EPAL pallets and pallet collars for Malaysia exporters shipping to Europe",
      heroCopy: "PAKSWELL supplies new EPAL Euro pallets, pallet collars, hinges, plywood lids, plastic corners, and custom packaging from China for Malaysian exporters that need Europe-ready wooden packaging.",
      facts: ["Fast production planning", "Document support", "1 x 40'HQ mixed loading", "Quote details by email"],
      keywords: "Keyword fit: EPAL pallet Malaysia import, pallet collar supplier, wood packaging for Europe export.",
      buyerFocus: "Malaysia fastener, casting, automotive parts, machinery, industrial goods, and export trading companies shipping to Europe.",
      destination: "Delivery can be planned for major ports in Malaysia.",
      marketNote: "Malaysia buyers often value mixed loading, clear shipping terms, full document support, and practical landed-cost quotation options.",
      quoteTitle: "Get a Malaysia export packaging quote",
      quoteLead: "Send destination, product mix, required documents, and target delivery expectation. Pricing and shipping terms are confirmed by email.",
      subject: "Malaysia Export Packaging RFQ from Google Ads Landing Page",
      destinationPlaceholder: "Malaysia / destination port if known...",
      quantityPlaceholder: "1 x 40'HQ mixed packaging..."
    },
    thailand: {
      country: "Thailand",
      product: "market-thailand",
      canonical: "https://www.pakswell.com/ads/thailand",
      eyebrow: "Thailand export packaging | EPAL & ISPM 15",
      heroTitle: "EPAL pallets and pallet collars for Thailand exporters shipping to Europe",
      heroCopy: "PAKSWELL supplies export-ready EPAL pallets, foldable pallet collars, galvanized hinges, plywood lids, plastic corners, and custom wooden packaging for Thailand-based exporters.",
      facts: ["Fast production planning", "1 x 40'HQ MOQ", "Mixed loading supported", "Document support"],
      keywords: "Local keyword fit: พาเลท EPAL, พาเลทไม้ส่งออก, pallet collar, บรรจุภัณฑ์ไม้ส่งออกยุโรป.",
      buyerFocus: "Thai automotive parts, fastener, casting, machinery, and industrial goods exporters shipping to Europe.",
      destination: "Delivery can be planned for major ports in Thailand.",
      marketNote: "Thailand exporters often need fast mixed shipments and clear document handling for Europe-bound packaging programs.",
      quoteTitle: "Get a Thailand export packaging quote",
      quoteLead: "Share cargo type, product mix, quantity, destination, and document requirements. The final 40'HQ plan is confirmed by email.",
      subject: "Thailand Export Packaging RFQ from Google Ads Landing Page",
      destinationPlaceholder: "Thailand / destination port if known...",
      quantityPlaceholder: "1 x 40'HQ, mixed EPAL pallets and collars..."
    },
    philippines: {
      country: "Philippines",
      product: "market-philippines",
      canonical: "https://www.pakswell.com/ads/philippines",
      eyebrow: "Philippines export packaging | EPAL & ISPM 15",
      heroTitle: "EPAL pallets and pallet collars for Philippines exporters shipping to Europe",
      heroCopy: "PAKSWELL supplies new EPAL Euro pallets, pallet collars, galvanized hinges, plywood lids, plastic corners, and custom wooden packaging from China for Philippine exporters.",
      facts: ["New EPAL pallets only", "Fast production planning", "1 x 40'HQ mixed loading", "Quote details by email"],
      keywords: "Keyword fit: EPAL pallet Philippines import, pallet collar supplier, export wooden packaging to Europe.",
      buyerFocus: "Philippines industrial goods, automotive parts, machinery, casting, and export trading companies shipping to Europe.",
      destination: "Delivery can be planned for major ports in the Philippines.",
      marketNote: "Philippines buyers often need clear FCL pricing, flexible shipping terms, and complete documentation for customs and end-customer approval.",
      quoteTitle: "Get a Philippines export packaging quote",
      quoteLead: "Send product mix, destination, documents, quantity, and delivery expectation. The final FCL or mixed 40'HQ quotation is confirmed by email.",
      subject: "Philippines Export Packaging RFQ from Google Ads Landing Page",
      destinationPlaceholder: "Philippines / destination port if known...",
      quantityPlaceholder: "1 x 40'HQ mixed load..."
    }
  };

  function getMarket() {
    var key = document.body.dataset.market || "japan";
    return MARKETS[key] || MARKETS.japan;
  }

  function renderCards(items) {
    return items.map(function (item) {
      return [
        '<div class="card">',
        '<div class="card-kicker">' + item.kicker + '</div>',
        '<h3>' + item.title + '</h3>',
        '<p>' + item.text + '</p>',
        '</div>'
      ].join("");
    }).join("");
  }

  function renderSpecRows(rows) {
    return rows.map(function (row) {
      return [
        '<div class="spec-row">',
        '<div class="spec-key">' + row[0] + '</div>',
        '<div class="spec-value">' + row[1] + '</div>',
        '</div>'
      ].join("");
    }).join("");
  }

  function renderFacts(facts) {
    return facts.map(function (fact) {
      return "<span>" + fact + "</span>";
    }).join("");
  }

  function renderPage(market) {
    var root = document.getElementById("market-root");
    if (!root) return;

    var specRows = [
      ["Target buyers", market.buyerFocus],
      ["Main products", "New EPAL Euro pallets, pallet collars, galvanized hinges, plastic corners, plywood lids, and custom wooden packaging."],
      ["Production planning", "Standard export packaging orders can move quickly after order details are confirmed. Exact schedule is confirmed by email."],
      ["MOQ", "1 x 40'HQ. Mixed loading is supported when the product mix and loading plan are confirmed."],
      ["China loading ports", "Shanghai, Tianjin, and Ningbo are the main loading ports for quotation discussions."],
      ["Freight and terms", "EXW, FOB, CIF, DAP, and DDP can be discussed by email after destination and delivery requirements are clear."],
      ["Confidentiality", "Customer names, logos, and partnership details are not published on the website."]
    ];

    root.innerHTML = [
      '<div class="top-bar">',
      '<div class="container">',
      '<div class="top-bar-left">',
      '<a href="mailto:mark.lee@pakswell.com" data-track="click_topbar_email" data-product="' + market.product + '">mark.lee@pakswell.com</a>',
      '<span aria-hidden="true">|</span>',
      '<a href="tel:+8617317788456" data-track="click_topbar_phone" data-product="' + market.product + '">+86 173 1778 8456</a>',
      '</div>',
      '<div class="top-bar-right"><a href="#quote" data-track="click_topbar_quote" data-product="' + market.product + '">Request a Quote</a></div>',
      '</div>',
      '</div>',
      '<header class="site-header">',
      '<div class="container nav">',
      '<a class="logo" href="https://www.pakswell.com/">',
      '<svg class="logo-icon" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="200" height="200" rx="16" fill="#F4F4F4"/><text x="100" y="108" text-anchor="middle" font-family="IBM Plex Sans, Arial, sans-serif" font-size="88" font-weight="900" fill="#253E65">PW</text><rect x="48" y="124" width="104" height="5" rx="2" fill="#DAA848"/><rect x="56" y="136" width="20" height="14" rx="3" fill="#DAA848"/><rect x="90" y="136" width="20" height="14" rx="3" fill="#DAA848"/><rect x="124" y="136" width="20" height="14" rx="3" fill="#DAA848"/></svg>',
      '<div><div class="logo-text">PAKSWELL</div><div class="logo-tagline">Packaging Solutions</div></div>',
      '</a>',
      '<nav class="nav-links" aria-label="Site navigation">',
      '<a href="#products">Products</a>',
      '<a href="#export-plan">Export Plan</a>',
      '<a href="#documents">Documents</a>',
      '<a class="btn btn-primary nav-cta" href="#quote" data-track="click_header_quote" data-product="' + market.product + '">Get a Quote</a>',
      '</nav>',
      '</div>',
      '</header>',
      '<main>',
      '<section class="hero market-hero" style="background-image:url(\'../images/hero-warehouse.jpg\');">',
      '<div class="container"><div class="hero-content">',
      '<div class="eyebrow">' + market.eyebrow + '</div>',
      '<h1>' + market.heroTitle + '</h1>',
      '<p class="hero-copy">' + market.heroCopy + '</p>',
      '<div class="hero-actions">',
      '<a class="btn btn-primary" href="#quote" data-track="click_hero_quote" data-product="' + market.product + '">Request Export Packaging Quote</a>',
      '<a class="btn btn-ghost" href="https://wa.me/447925178073?text=Hi%20PAKSWELL%2C%20I%20need%20a%20quote%20for%20export%20packaging%20to%20' + encodeURIComponent(market.country) + '.%0AProduct%20mix%3A%0AQuantity%3A%0ATrade%20term%3A" target="_blank" rel="noopener" data-track="click_whatsapp" data-product="' + market.product + '">WhatsApp Sales</a>',
      '</div>',
      '<div class="hero-facts" aria-label="Key buying facts">' + renderFacts(market.facts) + '</div>',
      '</div></div>',
      '</section>',
      '<div class="section-jump" aria-label="Page sections"><div class="container"><nav class="section-jump-links"><a href="#products">Products</a><a href="#export-plan">Export Plan</a><a href="#documents">Documents</a><a href="#faq">FAQ</a></nav></div></div>',
      '<section class="section" id="products">',
      '<div class="container">',
      '<div class="section-head"><div class="label">' + market.country + ' buyer fit</div><h2>One 40\'HQ mixed shipment for Europe-bound export packaging</h2><p class="section-lead">' + market.keywords + '</p></div>',
      '<div class="cards">' + renderCards(COMMON_PRODUCTS) + '</div>',
      '</div>',
      '</section>',
      '<section class="section section-soft" id="export-plan">',
      '<div class="container two-col">',
      '<div>',
      '<div class="section-head"><div class="label">Export plan</div><h2>What to share before we quote</h2><p class="section-lead">' + market.marketNote + ' The page gives the buying direction; commercial details are confirmed through sales email.</p></div>',
      '<div class="spec-table">' + renderSpecRows(specRows) + '</div>',
      '</div>',
      '<div class="media-stack"><div class="photo"><img src="../images/structure-bulk.jpg" alt="Bulk pallet collars ready for container loading"></div><div class="photo-row"><div class="photo"><img src="../images/epal-pallet-detail.jpg" alt="EPAL pallet detail"></div><div class="photo"><img src="../images/collar-hinges-on-epal.jpg" alt="Pallet collar hinges on EPAL pallet collar"></div></div></div>',
      '</div>',
      '</section>',
      '<section class="section" id="documents">',
      '<div class="container">',
      '<div class="section-head"><div class="label">Compliance documents</div><h2>Document support confirmed by email</h2><p class="section-lead">' + market.destination + ' Exact certificate, COO, and shipping document requirements are confirmed against the actual order, HS code, destination, and buyer requirements.</p></div>',
      '<div class="cards">' + renderCards(COMMON_DOCS) + '</div>',
      '</div>',
      '</section>',
      '<section class="section section-soft" id="faq">',
      '<div class="container two-col">',
      '<div class="section-head"><div class="label">Buyer FAQ</div><h2>Common questions from ' + market.country + ' buyers</h2><p class="section-lead">Short answers for export packaging buyers comparing EPAL pallet, pallet collar, and wooden packaging suppliers.</p></div>',
      '<div class="faq-list">',
      '<details class="faq-item" open><summary>Can one 40\'HQ include several products?</summary><p>Yes. Mixed loading is supported for EPAL pallets, pallet collars, hinges, plastic corners, plywood lids, and custom packaging when the loading plan is practical.</p></details>',
      '<details class="faq-item"><summary>Are the EPAL pallets new?</summary><p>Yes. Website and Google Ads promotion focus on new EPAL Euro pallets manufactured for export buyers.</p></details>',
      '<details class="faq-item"><summary>How fast can standard orders be produced?</summary><p>Production can move quickly after key order details are confirmed. Final timing is confirmed by email because product mix, stock status, and documents all matter.</p></details>',
      '<details class="faq-item"><summary>Can you discuss delivered terms?</summary><p>Yes. Delivered terms can be discussed by email after destination details, delivery address, and local import requirements are clear.</p></details>',
      '</div>',
      '</div>',
      '</section>',
      '<section class="section section-dark" id="quote">',
      '<div class="container quote-panel">',
      '<div class="quote-copy"><div class="label">Request a quote</div><h2>' + market.quoteTitle + '</h2><p class="section-lead">' + market.quoteLead + '</p><ul class="quote-list"><li>Sales contact: Mark Lee</li><li>Email: mark.lee@pakswell.com</li><li>Phone: +86 173 1778 8456</li></ul><div class="cta-actions"><a class="btn btn-ghost" href="mailto:mark.lee@pakswell.com?subject=' + encodeURIComponent(market.subject) + '" data-track="click_email" data-product="' + market.product + '">Email Directly</a></div></div>',
      '<form class="lead-form" action="https://api.web3forms.com/submit" method="POST" data-lead-form data-product="' + market.product + '">',
      '<input type="hidden" name="access_key" value="23d40f45-5e7f-47ba-9912-4901646be26a">',
      '<input type="hidden" name="subject" value="' + market.subject + '">',
      '<input type="hidden" name="market" value="' + market.country + '">',
      '<input type="hidden" name="product_interest" value="' + market.country + ' export packaging landing page">',
      '<input type="hidden" name="redirect" value="https://www.pakswell.com/thank-you">',
      '<input type="checkbox" name="botcheck" style="display:none;">',
      '<div class="form-grid">',
      '<div class="form-field"><label for="name">Full name *</label><input id="name" name="name" autocomplete="name" required></div>',
      '<div class="form-field"><label for="company">Company</label><input id="company" name="company" autocomplete="organization"></div>',
      '<div class="form-field"><label for="email">Email *</label><input id="email" type="email" name="email" autocomplete="email" required></div>',
      '<div class="form-field"><label for="phone">Phone / WhatsApp</label><input id="phone" name="phone" autocomplete="tel"></div>',
      '<div class="form-field"><label for="destination">Destination market *</label><input id="destination" name="destination_port" placeholder="' + market.destinationPlaceholder + '" required></div>',
      '<div class="form-field"><label for="quantity">Quantity *</label><input id="quantity" name="quantity" placeholder="' + market.quantityPlaceholder + '" required></div>',
      '<div class="form-field full"><label for="message">Product mix and documents</label><textarea id="message" name="message" placeholder="EPAL pallets, pallet collars, hinges, lids, plastic corners, custom packaging, required documents, target timeline..."></textarea></div>',
      '</div>',
      '<button class="btn btn-primary" type="submit">Send Export Packaging RFQ</button>',
      '<p class="form-note">By submitting this form, you agree to be contacted about your quote. See <a href="https://www.pakswell.com/privacy">Privacy Policy</a>.</p>',
      '</form>',
      '</div>',
      '</section>',
      '</main>',
      '<footer class="site-footer"><div class="container footer-inner"><span>&copy; 2026 PAKSWELL. EPAL pallet and pallet collar manufacturer.</span><div class="footer-links"><a href="epal-euro-pallets">EPAL Euro Pallets</a><a href="pallet-collars">Pallet Collars</a><a href="pallet-collar-hinges">Pallet Collar Hinges</a><a href="https://www.pakswell.com/">Main site</a></div></div></footer>',
      '<div class="sticky-mobile-cta"><a href="tel:+8617317788456" data-track="click_phone" data-product="' + market.product + '">Call</a><a href="https://wa.me/447925178073?text=Hi%20PAKSWELL%2C%20I%20need%20export%20packaging%20for%20' + encodeURIComponent(market.country) + '." target="_blank" rel="noopener" data-track="click_whatsapp_mobile" data-product="' + market.product + '">WhatsApp</a><a href="#quote" data-track="click_mobile_quote" data-product="' + market.product + '">Quote</a></div>'
    ].join("");
  }

  renderPage(getMarket());
})();
