(function () {
  "use strict";

  var CONSENT_KEY = "pakswell_consent_v2";
  var LEGACY_KEY = "cookieConsent";
  var EEA_REGIONS = [
    "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE",
    "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "NL",
    "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE"
  ];
  var CONSENT_COPY = {
    en: { label: "Cookie preferences", text: "We use optional cookies for advertising measurement. You may accept or reject them.", privacy: "Privacy Policy", reject: "Reject optional", accept: "Accept" },
    "zh-CN": { label: "Cookie偏好设置", text: "我们使用可选Cookie进行广告效果衡量，你可以接受或拒绝。", privacy: "隐私政策", reject: "拒绝可选Cookie", accept: "接受" },
    "zh-TW": { label: "Cookie偏好設定", text: "我們使用選用Cookie衡量廣告成效，你可以接受或拒絕。", privacy: "隱私政策", reject: "拒絕選用Cookie", accept: "接受" },
    th: { label: "การตั้งค่าคุกกี้", text: "เราใช้คุกกี้เสริมเพื่อวัดผลโฆษณา คุณสามารถยอมรับหรือปฏิเสธได้", privacy: "นโยบายความเป็นส่วนตัว", reject: "ปฏิเสธคุกกี้เสริม", accept: "ยอมรับ" },
    vi: { label: "Tùy chọn cookie", text: "Chúng tôi dùng cookie tùy chọn để đo lường quảng cáo. Bạn có thể chấp nhận hoặc từ chối.", privacy: "Chính sách bảo mật", reject: "Từ chối cookie tùy chọn", accept: "Chấp nhận" },
    ko: { label: "쿠키 설정", text: "광고 측정을 위해 선택적 쿠키를 사용합니다. 허용하거나 거부할 수 있습니다.", privacy: "개인정보 처리방침", reject: "선택 쿠키 거부", accept: "허용" },
    ja: { label: "Cookie設定", text: "広告効果測定のため任意Cookieを使用します。許可または拒否できます。", privacy: "プライバシーポリシー", reject: "任意Cookieを拒否", accept: "許可" }
  };

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

  function pageLanguage() {
    var lang = null;
    try { lang = new URLSearchParams(window.location.search).get("lang"); } catch (e) {}
    if (CONSENT_COPY[lang]) return lang;
    try { lang = window.localStorage.getItem("pw_lang"); } catch (e) {}
    if (CONSENT_COPY[lang]) return lang;
    lang = String(document.documentElement.lang || navigator.language || "en");
    if (/^zh-(TW|HK|MO)/i.test(lang)) return "zh-TW";
    if (/^zh/i.test(lang)) return "zh-CN";
    if (/^th/i.test(lang)) return "th";
    if (/^vi/i.test(lang)) return "vi";
    if (/^ko/i.test(lang)) return "ko";
    if (/^ja/i.test(lang)) return "ja";
    return "en";
  }

  function mountBanner() {
    var legacyBanner = document.getElementById("cookie-banner");
    if (legacyBanner) legacyBanner.remove();
    if (choice || document.getElementById("pw-consent-banner")) return;

    var lang = pageLanguage();
    var strings = CONSENT_COPY[lang] || CONSENT_COPY.en;
    var banner = document.createElement("div");
    banner.id = "pw-consent-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", strings.label);
    banner.style.cssText = "position:fixed;left:16px;right:16px;bottom:16px;z-index:10000;max-width:960px;margin:0 auto;padding:16px 18px;background:#0f1923;color:#fff;border:1px solid rgba(255,255,255,.16);border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.25);font:14px/1.5 'IBM Plex Sans',Arial,sans-serif;display:flex;gap:16px;align-items:center;justify-content:space-between;flex-wrap:wrap";

    var copy = document.createElement("div");
    copy.style.cssText = "flex:1 1 480px";
    copy.appendChild(document.createTextNode(strings.text + " "));
    var privacyLink = document.createElement("a");
    privacyLink.href = lang === "en" ? "/privacy" : "/privacy?lang=" + encodeURIComponent(lang);
    privacyLink.style.color = "#e8a838";
    privacyLink.textContent = strings.privacy;
    copy.appendChild(privacyLink);
    copy.appendChild(document.createTextNode("."));

    var actions = document.createElement("div");
    actions.style.cssText = "display:flex;gap:10px;flex-wrap:wrap";

    var reject = document.createElement("button");
    reject.type = "button";
    reject.textContent = strings.reject;
    reject.style.cssText = "padding:9px 14px;border:1px solid rgba(255,255,255,.45);border-radius:4px;background:transparent;color:#fff;cursor:pointer;font:600 13px inherit";
    reject.addEventListener("click", function () { updateChoice("rejected"); });

    var accept = document.createElement("button");
    accept.type = "button";
    accept.textContent = strings.accept;
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
    allowsUserData: function () { return choice === "accepted"; },
    refreshLanguage: function () {
      var banner = document.getElementById("pw-consent-banner");
      if (!banner || choice) return;
      banner.remove();
      mountBanner();
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountBanner);
  } else {
    mountBanner();
  }
})();
