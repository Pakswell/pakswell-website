(function () {
  "use strict";

  var CONSENT_KEY = "pakswell_consent_v2";
  var LEGACY_KEY = "cookieConsent";
  var EEA_REGIONS = [
    "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE",
    "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "NL",
    "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE"
  ];

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  function consentPayload(value) {
    return {
      ad_storage: value,
      analytics_storage: value,
      ad_user_data: value,
      ad_personalization: value
    };
  }

  function readChoice() {
    try {
      var saved = window.localStorage.getItem(CONSENT_KEY);
      if (saved === "accepted" || saved === "rejected") return saved;
      if (window.localStorage.getItem(LEGACY_KEY) === "accepted") {
        window.localStorage.setItem(CONSENT_KEY, "accepted");
        return "accepted";
      }
    } catch (e) {}
    return null;
  }

  function saveChoice(choice) {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
      window.localStorage.removeItem(LEGACY_KEY);
    } catch (e) {}
  }

  var choice = readChoice();

  // Consent Mode v2: keep measurement available outside the EEA while
  // requiring an explicit choice for EEA visitors.
  window.gtag("consent", "default", consentPayload("granted"));
  window.gtag("consent", "default", Object.assign(consentPayload("denied"), {
    region: EEA_REGIONS,
    wait_for_update: 500
  }));
  if (choice) {
    window.gtag("consent", "update", consentPayload(choice === "accepted" ? "granted" : "denied"));
  }

  function removeBanner() {
    var banner = document.getElementById("pw-consent-banner");
    if (banner) banner.remove();
  }

  function updateChoice(nextChoice) {
    choice = nextChoice;
    saveChoice(nextChoice);
    window.gtag("consent", "update", consentPayload(nextChoice === "accepted" ? "granted" : "denied"));
    removeBanner();
  }

  function mountBanner() {
    var legacyBanner = document.getElementById("cookie-banner");
    if (legacyBanner) legacyBanner.remove();
    if (choice || document.getElementById("pw-consent-banner")) return;

    var banner = document.createElement("div");
    banner.id = "pw-consent-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Cookie preferences");
    banner.style.cssText = "position:fixed;left:16px;right:16px;bottom:16px;z-index:10000;max-width:960px;margin:0 auto;padding:16px 18px;background:#0f1923;color:#fff;border:1px solid rgba(255,255,255,.16);border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.25);font:14px/1.5 'IBM Plex Sans',Arial,sans-serif;display:flex;gap:16px;align-items:center;justify-content:space-between;flex-wrap:wrap";

    var copy = document.createElement("div");
    copy.style.cssText = "flex:1 1 480px";
    copy.innerHTML = 'We use cookies for advertising measurement. You can accept or reject optional cookies. <a href="/privacy" style="color:#e8a838">Privacy Policy</a>.';

    var actions = document.createElement("div");
    actions.style.cssText = "display:flex;gap:10px;flex-wrap:wrap";

    var reject = document.createElement("button");
    reject.type = "button";
    reject.textContent = "Reject optional";
    reject.style.cssText = "padding:9px 14px;border:1px solid rgba(255,255,255,.45);border-radius:4px;background:transparent;color:#fff;cursor:pointer;font:600 13px inherit";
    reject.addEventListener("click", function () { updateChoice("rejected"); });

    var accept = document.createElement("button");
    accept.type = "button";
    accept.textContent = "Accept";
    accept.style.cssText = "padding:9px 18px;border:1px solid #e8a838;border-radius:4px;background:#e8a838;color:#0f1923;cursor:pointer;font:700 13px inherit";
    accept.addEventListener("click", function () { updateChoice("accepted"); });

    actions.appendChild(reject);
    actions.appendChild(accept);
    banner.appendChild(copy);
    banner.appendChild(actions);
    document.body.appendChild(banner);
  }

  window.PakswellConsent = {
    accept: function () { updateChoice("accepted"); },
    reject: function () { updateChoice("rejected"); },
    status: function () { return choice; },
    allowsUserData: function () { return choice === "accepted"; }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountBanner);
  } else {
    mountBanner();
  }
})();
