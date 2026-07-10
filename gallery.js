(function () {
  "use strict";

  var COPY = {
    en: {
      topbar: "FCL export packaging from China", nav_home: "Home", nav_products: "Products", nav_gallery: "Gallery", nav_contact: "Contact",
      eyebrow: "Production & Shipping Gallery", hero_title: "Export Loading & Domestic Delivery", hero_desc: "A curated record of pallet, pallet collar, mixed-load, export container, and domestic delivery work. Client names and commercial details remain confidential.", hero_cta: "View recent shipments",
      stat_selected: "selected references", stat_period: "January–June", stat_fcl: "export & domestic delivery", stat_privacy: "client details protected",
      section_label: "Selected operational references", section_title: "From preparation to secured loading", section_desc: "Use the filters to review relevant products. Photos are selected for clarity, orderly handling, and confidentiality.",
      filter_all: "All", filter_pallets: "Pallets", filter_collars: "Pallet Collars", filter_mixed: "Mixed Loads", filter_domestic: "Domestic Delivery",
      caption_pallets: "Pallet shipment secured for transport", caption_collars: "Pallet collars prepared for loading", caption_mixed: "Mixed products planned for one shipment", caption_domestic: "Domestic truck delivery prepared",
      privacy_title: "Client confidentiality by design", privacy_desc: "This gallery documents operational capability without publishing client names, shipment documents, destinations, pricing, or partnership details.",
      cta_label: "Planning an FCL shipment?", cta_title: "Share your product mix and destination", cta_desc: "We will confirm specifications, loading options, trade terms, and lead time by email.", cta_button: "Request a quote"
    },
    "zh-CN": {
      topbar: "中国出运的整柜出口包装", nav_home: "首页", nav_products: "产品", nav_gallery: "图库", nav_contact: "联系我们",
      eyebrow: "生产与发货图库", hero_title: "出口装柜与国内发货", hero_desc: "精选展示托盘、围板、混装、出口装柜及国内发货作业。客户名称与商业信息始终保密。", hero_cta: "查看近期发货",
      stat_selected: "精选实景", stat_period: "1月至6月", stat_fcl: "出口与国内发货", stat_privacy: "客户信息受保护",
      section_label: "精选作业实景", section_title: "从备货到安全装柜", section_desc: "可按产品筛选查看。所有照片均兼顾清晰度、现场整洁和客户隐私。",
      filter_all: "全部", filter_pallets: "托盘", filter_collars: "托盘围板", filter_mixed: "混装", filter_domestic: "国内发货",
      caption_pallets: "托盘货物加固待运", caption_collars: "托盘围板备货装柜", caption_mixed: "多种产品同柜装载", caption_domestic: "国内卡车发货备运",
      privacy_title: "客户隐私优先", privacy_desc: "本图库仅展示作业能力，不公开客户名称、运输单据、目的地、价格或合作信息。",
      cta_label: "计划整柜采购？", cta_title: "告诉我们产品组合与目的地", cta_desc: "我们将通过邮件确认规格、装载方式、贸易条款和交期。", cta_button: "获取报价"
    },
    "zh-TW": {
      topbar: "中國出運的整櫃出口包裝", nav_home: "首頁", nav_products: "產品", nav_gallery: "圖庫", nav_contact: "聯絡我們",
      eyebrow: "生產與出貨圖庫", hero_title: "出口裝櫃與國內出貨", hero_desc: "精選展示棧板、圍板、混裝、出口裝櫃及國內出貨作業。客戶名稱與商業資訊始終保密。", hero_cta: "查看近期出貨",
      stat_selected: "精選實景", stat_period: "1月至6月", stat_fcl: "出口與國內出貨", stat_privacy: "客戶資訊受保護",
      section_label: "精選作業實景", section_title: "從備貨到安全裝櫃", section_desc: "可依產品篩選查看。所有照片均兼顧清晰度、現場整潔與客戶隱私。",
      filter_all: "全部", filter_pallets: "棧板", filter_collars: "棧板圍板", filter_mixed: "混裝", filter_domestic: "國內出貨",
      caption_pallets: "棧板貨物加固待運", caption_collars: "棧板圍板備貨裝櫃", caption_mixed: "多種產品同櫃裝載", caption_domestic: "國內卡車出貨備運",
      privacy_title: "客戶隱私優先", privacy_desc: "本圖庫僅展示作業能力，不公開客戶名稱、運輸文件、目的地、價格或合作資訊。",
      cta_label: "規劃整櫃採購？", cta_title: "告訴我們產品組合與目的地", cta_desc: "我們將透過郵件確認規格、裝載方式、貿易條款與交期。", cta_button: "取得報價"
    },
    th: {
      topbar: "บรรจุภัณฑ์ส่งออกแบบเต็มตู้จากจีน", nav_home: "หน้าแรก", nav_products: "สินค้า", nav_gallery: "แกลเลอรี", nav_contact: "ติดต่อ",
      eyebrow: "แกลเลอรีการผลิตและจัดส่ง", hero_title: "การบรรจุตู้ส่งออกและจัดส่งในประเทศ", hero_desc: "ภาพคัดสรรของพาเลท ขอบพาเลท สินค้ารวม การบรรจุตู้ส่งออก และการจัดส่งในประเทศ โดยปกปิดข้อมูลลูกค้าและการค้า", hero_cta: "ดูการจัดส่งล่าสุด",
      stat_selected: "ภาพคัดสรร", stat_period: "มกราคม–มิถุนายน", stat_fcl: "ส่งออกและจัดส่งในประเทศ", stat_privacy: "ปกป้องข้อมูลลูกค้า",
      section_label: "ภาพการปฏิบัติงานที่คัดสรร", section_title: "จากการเตรียมสินค้าถึงการยึดตู้", section_desc: "กรองตามสินค้าได้ ภาพถูกเลือกจากความชัดเจน ความเป็นระเบียบ และการรักษาความลับ",
      filter_all: "ทั้งหมด", filter_pallets: "พาเลท", filter_collars: "ขอบพาเลท", filter_mixed: "สินค้ารวม", filter_domestic: "จัดส่งในประเทศ",
      caption_pallets: "พาเลทยึดแน่นพร้อมขนส่ง", caption_collars: "ขอบพาเลทพร้อมบรรจุตู้", caption_mixed: "วางแผนสินค้าหลายชนิดในตู้เดียว", caption_domestic: "เตรียมส่งด้วยรถบรรทุกในประเทศ",
      privacy_title: "รักษาความลับของลูกค้า", privacy_desc: "แกลเลอรีนี้แสดงความสามารถในการดำเนินงานโดยไม่เปิดเผยชื่อลูกค้า เอกสาร ปลายทาง ราคา หรือรายละเอียดความร่วมมือ",
      cta_label: "กำลังวางแผนสินค้าเต็มตู้?", cta_title: "แจ้งรายการสินค้าและปลายทาง", cta_desc: "เราจะยืนยันสเปก แผนการบรรจุ เงื่อนไขการค้า และระยะเวลาทางอีเมล", cta_button: "ขอใบเสนอราคา"
    },
    vi: {
      topbar: "Bao bì xuất khẩu nguyên container từ Trung Quốc", nav_home: "Trang chủ", nav_products: "Sản phẩm", nav_gallery: "Thư viện", nav_contact: "Liên hệ",
      eyebrow: "Thư viện sản xuất & vận chuyển", hero_title: "Đóng container xuất khẩu & giao nội địa", hero_desc: "Hình ảnh tuyển chọn về pallet, khung pallet, hàng ghép, đóng container xuất khẩu và giao hàng nội địa. Thông tin khách hàng luôn được bảo mật.", hero_cta: "Xem các lô hàng gần đây",
      stat_selected: "hình ảnh tuyển chọn", stat_period: "Tháng 1–Tháng 6", stat_fcl: "xuất khẩu & giao nội địa", stat_privacy: "bảo vệ thông tin khách hàng",
      section_label: "Hình ảnh vận hành tuyển chọn", section_title: "Từ chuẩn bị đến chằng buộc an toàn", section_desc: "Lọc theo sản phẩm. Hình ảnh được chọn vì độ rõ nét, thao tác gọn gàng và tính bảo mật.",
      filter_all: "Tất cả", filter_pallets: "Pallet", filter_collars: "Khung pallet", filter_mixed: "Hàng ghép", filter_domestic: "Giao nội địa",
      caption_pallets: "Pallet được chằng buộc sẵn sàng vận chuyển", caption_collars: "Khung pallet chuẩn bị đóng container", caption_mixed: "Nhiều sản phẩm trong một lô hàng", caption_domestic: "Chuẩn bị giao bằng xe tải nội địa",
      privacy_title: "Bảo mật thông tin khách hàng", privacy_desc: "Thư viện thể hiện năng lực vận hành mà không công bố tên khách hàng, chứng từ, điểm đến, giá hoặc chi tiết hợp tác.",
      cta_label: "Đang lên kế hoạch hàng FCL?", cta_title: "Gửi danh mục sản phẩm và điểm đến", cta_desc: "Chúng tôi sẽ xác nhận quy cách, phương án đóng hàng, điều kiện thương mại và thời gian qua email.", cta_button: "Yêu cầu báo giá"
    },
    ko: {
      topbar: "중국발 FCL 수출 포장", nav_home: "홈", nav_products: "제품", nav_gallery: "갤러리", nav_contact: "문의",
      eyebrow: "생산 및 출하 갤러리", hero_title: "수출 컨테이너 적재 및 국내 배송", hero_desc: "팔레트, 팔레트 칼라, 혼합 적재, 수출 컨테이너 및 국내 배송 작업을 선별해 소개합니다. 고객 및 상업 정보는 비공개로 유지됩니다.", hero_cta: "최근 출하 보기",
      stat_selected: "선별된 현장 사진", stat_period: "1월–6월", stat_fcl: "수출 및 국내 배송", stat_privacy: "고객 정보 보호",
      section_label: "선별된 운영 현장", section_title: "준비부터 안전한 적재까지", section_desc: "제품별로 필터링할 수 있습니다. 선명도, 정돈된 작업, 기밀성을 기준으로 사진을 선정했습니다.",
      filter_all: "전체", filter_pallets: "팔레트", filter_collars: "팔레트 칼라", filter_mixed: "혼합 적재", filter_domestic: "국내 배송",
      caption_pallets: "운송을 위해 고정된 팔레트", caption_collars: "컨테이너 적재 준비된 팔레트 칼라", caption_mixed: "한 번의 출하로 구성된 혼합 제품", caption_domestic: "국내 트럭 배송 준비",
      privacy_title: "고객 기밀 보호", privacy_desc: "고객명, 운송 서류, 목적지, 가격 또는 협력 세부 정보를 공개하지 않고 운영 역량만 보여드립니다.",
      cta_label: "FCL 출하를 계획 중이신가요?", cta_title: "제품 구성과 목적지를 알려주세요", cta_desc: "사양, 적재 옵션, 거래 조건 및 납기를 이메일로 확인해 드립니다.", cta_button: "견적 요청"
    },
    ja: {
      topbar: "中国発FCL輸出梱包", nav_home: "ホーム", nav_products: "製品", nav_gallery: "ギャラリー", nav_contact: "お問い合わせ",
      eyebrow: "生産・出荷ギャラリー", hero_title: "輸出コンテナ積載・国内配送", hero_desc: "パレット、パレットカラー、混載、輸出コンテナ、国内配送作業の厳選記録です。顧客名と商取引情報は非公開です。", hero_cta: "最近の出荷を見る",
      stat_selected: "厳選事例", stat_period: "1月–6月", stat_fcl: "輸出・国内配送", stat_privacy: "顧客情報を保護",
      section_label: "厳選した作業事例", section_title: "準備から安全な積載まで", section_desc: "製品別に絞り込めます。鮮明さ、整然とした作業、機密性を基準に選定しています。",
      filter_all: "すべて", filter_pallets: "パレット", filter_collars: "パレットカラー", filter_mixed: "混載", filter_domestic: "国内配送",
      caption_pallets: "輸送用に固定されたパレット", caption_collars: "コンテナ積載準備済みパレットカラー", caption_mixed: "複数製品を一つの出荷に集約", caption_domestic: "国内トラック配送準備",
      privacy_title: "顧客情報の保護", privacy_desc: "顧客名、出荷書類、仕向地、価格、取引内容を公開せず、オペレーション能力のみを紹介します。",
      cta_label: "FCL出荷をご計画ですか？", cta_title: "製品構成と仕向地をお知らせください", cta_desc: "仕様、積載方法、取引条件、納期をメールで確認します。", cta_button: "見積もりを依頼"
    }
  };

  var VALID_LANGS = Object.keys(COPY);
  var currentLang = "en";

  function browserLang() {
    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i += 1) {
      var lang = String(langs[i]).toLowerCase();
      if (/^zh-(tw|hk|mo)/.test(lang)) return "zh-TW";
      if (/^zh/.test(lang)) return "zh-CN";
      if (/^th/.test(lang)) return "th";
      if (/^vi/.test(lang)) return "vi";
      if (/^ko/.test(lang)) return "ko";
      if (/^ja/.test(lang)) return "ja";
    }
    return "en";
  }

  function initialLang() {
    var query = new URLSearchParams(window.location.search).get("lang");
    var saved = null;
    try { saved = window.localStorage.getItem("pw_lang"); } catch (e) {}
    if (VALID_LANGS.indexOf(query) !== -1) return query;
    if (VALID_LANGS.indexOf(saved) !== -1) return saved;
    return browserLang();
  }

  function monthLabel(value, lang) {
    var parts = value.split("-");
    var date = new Date(Number(parts[0]), Number(parts[1]) - 1, 1);
    try { return new Intl.DateTimeFormat(lang, { month: "long", year: "numeric" }).format(date); }
    catch (e) { return value; }
  }

  function applyLang(lang) {
    if (VALID_LANGS.indexOf(lang) === -1) lang = "en";
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = COPY[lang][el.getAttribute("data-i18n")];
      if (value) el.textContent = value;
    });
    document.querySelectorAll(".gallery-card").forEach(function (card) {
      var key = card.getAttribute("data-caption-key");
      var caption = card.querySelector(".caption-text");
      var time = card.querySelector("time");
      if (caption && COPY[lang][key]) caption.textContent = COPY[lang][key];
      if (time) time.textContent = monthLabel(card.getAttribute("data-month"), lang);
    });
    document.getElementById("gallery-lang").value = lang;
    try { window.localStorage.setItem("pw_lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".filter-button").forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");
      document.querySelectorAll(".filter-button").forEach(function (item) {
        var active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      document.querySelectorAll(".gallery-card").forEach(function (card) {
        card.classList.toggle("hidden", filter !== "all" && card.getAttribute("data-category") !== filter);
      });
      if (typeof window.gtag === "function") window.gtag("event", "gallery_filter", { gallery_category: filter });
    });
  });

  var dialog = document.getElementById("gallery-lightbox");
  var dialogImage = dialog.querySelector("img");
  var dialogTitle = dialog.querySelector("strong");
  var dialogDate = dialog.querySelector(".lightbox-copy span");

  document.querySelectorAll(".gallery-open").forEach(function (button) {
    button.addEventListener("click", function () {
      var card = button.closest(".gallery-card");
      var image = button.querySelector("img");
      dialogImage.src = image.src;
      dialogImage.alt = image.alt;
      dialogTitle.textContent = card.querySelector(".caption-text").textContent;
      dialogDate.textContent = card.querySelector("time").textContent;
      dialog.showModal();
      if (typeof window.gtag === "function") window.gtag("event", "gallery_photo_open", { gallery_category: card.getAttribute("data-category") });
    });
  });

  dialog.querySelector(".lightbox-close").addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("click", function (event) { if (event.target === dialog) dialog.close(); });
  document.getElementById("gallery-lang").addEventListener("change", function (event) { applyLang(event.target.value); });

  applyLang(initialLang());
  var initialCategory = new URLSearchParams(window.location.search).get("category");
  if (["pallets", "collars", "mixed", "domestic"].indexOf(initialCategory) !== -1) {
    var initialFilter = document.querySelector('.filter-button[data-filter="' + initialCategory + '"]');
    if (initialFilter) initialFilter.click();
  }
})();
