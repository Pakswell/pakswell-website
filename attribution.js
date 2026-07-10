(function () {
  "use strict";

  var ATTRIBUTION_KEY = "pakswell_attribution_v1";
  var LEAD_KEY = "pakswell_current_lead_id";
  var USER_DATA_KEY = "pakswell_ec_user_data";
  var TRACKED_PARAMS = [
    "gclid", "gbraid", "wbraid", "utm_source", "utm_medium",
    "utm_campaign", "utm_term", "utm_content"
  ];

  function safeJsonParse(value) {
    try { return JSON.parse(value || "null"); } catch (e) { return null; }
  }

  function readAttribution() {
    var saved = null;
    try { saved = safeJsonParse(window.sessionStorage.getItem(ATTRIBUTION_KEY)); } catch (e) {}
    var data = saved && typeof saved === "object" ? saved : {};
    var params = new URLSearchParams(window.location.search);

    TRACKED_PARAMS.forEach(function (name) {
      var value = params.get(name);
      if (value) data[name] = value.slice(0, 500);
    });

    if (!data.landing_page) data.landing_page = window.location.href.slice(0, 1000);
    if (!data.referrer && document.referrer) data.referrer = document.referrer.slice(0, 1000);
    if (!data.first_seen_at) data.first_seen_at = new Date().toISOString();

    try { window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data)); } catch (e) {}
    return data;
  }

  function createLeadId() {
    var id = "";
    try {
      if (window.crypto && typeof window.crypto.randomUUID === "function") {
        id = window.crypto.randomUUID();
      }
    } catch (e) {}
    if (!id) {
      id = Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 14);
    }
    return "pw-" + id;
  }

  function setHidden(form, name, value) {
    if (!value) return;
    var input = form.querySelector('input[name="' + name + '"]');
    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      form.appendChild(input);
    }
    input.value = String(value).slice(0, 1000);
  }

  function storeEnhancedUserData(form) {
    if (!window.PakswellConsent || !window.PakswellConsent.allowsUserData()) return;
    try {
      var formData = new FormData(form);
      var email = String(formData.get("email") || "").trim().toLowerCase();
      var phone = String(formData.get("phone") || "").trim();
      var fullName = String(formData.get("name") || "").trim();
      var nameParts = fullName.split(/\s+/).filter(Boolean);
      var userData = {};
      if (email) userData.email = email;
      if (phone) userData.phone_number = phone;
      if (nameParts.length) userData.first_name = nameParts[0];
      if (nameParts.length > 1) userData.last_name = nameParts.slice(1).join(" ");
      if (Object.keys(userData).length) {
        window.sessionStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
      }
    } catch (e) {}
  }

  function prepareLead(form, product) {
    var attribution = readAttribution();
    var leadId = createLeadId();
    try { window.sessionStorage.setItem(LEAD_KEY, leadId); } catch (e) {}

    setHidden(form, "lead_id", leadId);
    setHidden(form, "landing_page", attribution.landing_page || window.location.href);
    setHidden(form, "page_path", window.location.pathname);
    setHidden(form, "referrer", attribution.referrer || "direct");
    setHidden(form, "first_seen_at", attribution.first_seen_at);
    setHidden(form, "language", document.documentElement.lang || "en");
    setHidden(form, "product", product || form.getAttribute("data-product") || "unknown");
    TRACKED_PARAMS.forEach(function (name) { setHidden(form, name, attribution[name]); });

    var redirect = form.querySelector('input[name="redirect"]');
    if (redirect) {
      var redirectUrl = new URL(redirect.value || "https://www.pakswell.com/thank-you", window.location.origin);
      redirectUrl.searchParams.set("lead_id", leadId);
      redirectUrl.searchParams.set("product", product || form.getAttribute("data-product") || "unknown");
      redirectUrl.searchParams.set("lang", document.documentElement.lang || "en");
      redirect.value = redirectUrl.toString();
    }

    storeEnhancedUserData(form);
    return { leadId: leadId, attribution: attribution };
  }

  window.PakswellAttribution = {
    read: readAttribution,
    prepareLead: prepareLead
  };

  readAttribution();
})();
