(function () {
  var WHATSAPP_CONVERSION = "AW-18091479514/YtFFCPfIq6scENqj2LJD";

  function track(name, params) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, params || {});
  }

  document.querySelectorAll("[data-track]").forEach(function (el) {
    el.addEventListener("click", function () {
      var eventName = el.getAttribute("data-track");
      track(el.getAttribute("data-track"), {
        product: el.getAttribute("data-product") || document.body.dataset.product || "unknown",
        page_path: window.location.pathname
      });
      if (eventName && eventName.indexOf("click_whatsapp") === 0 && typeof window.gtag === "function") {
        window.gtag("event", "conversion", { send_to: WHATSAPP_CONVERSION });
      }
    });
  });

  document.querySelectorAll("form[data-lead-form]").forEach(function (form) {
    form.addEventListener("submit", function () {
      track("lead_form_submit", {
        product: form.getAttribute("data-product") || document.body.dataset.product || "unknown",
        page_path: window.location.pathname
      });
    });
  });
})();
