(function () {
  var WHATSAPP_CONVERSION = "AW-18091479514/YtFFCPfIq6scENqj2LJD";
  var LANG_ORDER = ["en", "th", "zh-CN", "zh-TW", "vi", "ko", "ja"];
  var PRODUCT_PATHS = {
    "epal-euro-pallets": "epal-euro-pallets",
    "pallet-collars": "pallet-collars",
    "pallet-collar-hinges": "pallet-collar-hinges"
  };

  var COMMON = {
    en: {
      langShort: "EN",
      logoTagline: "Packaging Solutions",
      topbarQuote: "Request a Quote",
      navProducts: "Products",
      navCompliance: "Compliance",
      navContact: "Contact",
      navSpecs: "Specs",
      navProcess: "Process",
      navCta: "Get a Quote",
      whatsappSales: "WhatsApp Sales",
      formName: "Full name *",
      formCompany: "Company",
      formEmail: "Email *",
      formPhone: "Phone / WhatsApp",
      formDestination: "Destination port *",
      formQuantity: "Quantity *",
      formEstimatedQuantity: "Estimated quantity *",
      formOther: "Other requirements",
      formNoteHtml: 'By submitting this form, you agree to be contacted about your quote. See <a href="https://www.pakswell.com/privacy">Privacy Policy</a>.',
      salesContact: "Sales contact",
      email: "Email",
      phone: "Phone",
      productEpal: "EPAL Euro Pallets",
      productCollars: "Pallet Collars",
      productHinges: "Pallet Collar Hinges",
      mainSite: "Main site",
      footerText: "© 2026 PAKSWELL. EPAL pallet and pallet collar manufacturer.",
      mobileCall: "Call",
      mobileWhatsApp: "WhatsApp",
      mobileQuote: "Quote"
    },
    th: {
      langShort: "TH",
      logoTagline: "โซลูชันบรรจุภัณฑ์",
      topbarQuote: "ขอใบเสนอราคา",
      navProducts: "สินค้า",
      navCompliance: "มาตรฐาน",
      navContact: "ติดต่อ",
      navSpecs: "สเปก",
      navProcess: "ขั้นตอน",
      navCta: "ขอราคา",
      whatsappSales: "ฝ่ายขาย WhatsApp",
      formName: "ชื่อ-นามสกุล *",
      formCompany: "บริษัท",
      formEmail: "อีเมล *",
      formPhone: "โทรศัพท์ / WhatsApp",
      formDestination: "ท่าเรือปลายทาง *",
      formQuantity: "จำนวน *",
      formEstimatedQuantity: "จำนวนโดยประมาณ *",
      formOther: "ข้อกำหนดอื่น",
      formNoteHtml: 'เมื่อส่งแบบฟอร์มนี้ คุณยินยอมให้เราติดต่อกลับเกี่ยวกับใบเสนอราคา ดู <a href="https://www.pakswell.com/privacy">นโยบายความเป็นส่วนตัว</a>',
      salesContact: "ผู้ติดต่อฝ่ายขาย",
      email: "อีเมล",
      phone: "โทร",
      productEpal: "พาเลท EPAL Euro",
      productCollars: "กรอบพาเลทไม้",
      productHinges: "บานพับกรอบพาเลท",
      mainSite: "เว็บไซต์หลัก",
      footerText: "© 2026 PAKSWELL ผู้ผลิตพาเลท EPAL และกรอบพาเลท",
      mobileCall: "โทร",
      mobileWhatsApp: "WhatsApp",
      mobileQuote: "ขอราคา"
    },
    "zh-CN": {
      langShort: "简中",
      logoTagline: "包装解决方案",
      topbarQuote: "获取报价",
      navProducts: "产品",
      navCompliance: "合规",
      navContact: "联系",
      navSpecs: "规格",
      navProcess: "流程",
      navCta: "获取报价",
      whatsappSales: "WhatsApp 销售",
      formName: "姓名 *",
      formCompany: "公司",
      formEmail: "邮箱 *",
      formPhone: "电话 / WhatsApp",
      formDestination: "目的港 *",
      formQuantity: "数量 *",
      formEstimatedQuantity: "预计数量 *",
      formOther: "其他要求",
      formNoteHtml: '提交表单即表示你同意我们就报价事宜联系你。查看 <a href="https://www.pakswell.com/privacy">隐私政策</a>。',
      salesContact: "销售联系人",
      email: "邮箱",
      phone: "电话",
      productEpal: "EPAL 欧标托盘",
      productCollars: "木质围板箱",
      productHinges: "围板箱铰链",
      mainSite: "返回主页",
      footerText: "© 2026 PAKSWELL. EPAL 托盘与木质围板箱制造商。",
      mobileCall: "电话",
      mobileWhatsApp: "WhatsApp",
      mobileQuote: "报价"
    },
    "zh-TW": {
      langShort: "繁中",
      logoTagline: "包裝解決方案",
      topbarQuote: "取得報價",
      navProducts: "產品",
      navCompliance: "合規",
      navContact: "聯絡",
      navSpecs: "規格",
      navProcess: "流程",
      navCta: "取得報價",
      whatsappSales: "WhatsApp 銷售",
      formName: "姓名 *",
      formCompany: "公司",
      formEmail: "電子郵件 *",
      formPhone: "電話 / WhatsApp",
      formDestination: "目的港 *",
      formQuantity: "數量 *",
      formEstimatedQuantity: "預估數量 *",
      formOther: "其他需求",
      formNoteHtml: '送出表單即表示你同意我們就報價事宜聯絡你。查看 <a href="https://www.pakswell.com/privacy">隱私政策</a>。',
      salesContact: "銷售聯絡人",
      email: "電子郵件",
      phone: "電話",
      productEpal: "EPAL 歐標棧板",
      productCollars: "木質圍板箱",
      productHinges: "圍板箱鉸鏈",
      mainSite: "返回主站",
      footerText: "© 2026 PAKSWELL. EPAL 棧板與木質圍板箱製造商。",
      mobileCall: "電話",
      mobileWhatsApp: "WhatsApp",
      mobileQuote: "報價"
    },
    vi: {
      langShort: "VI",
      logoTagline: "Giải pháp đóng gói",
      topbarQuote: "Yêu cầu báo giá",
      navProducts: "Sản phẩm",
      navCompliance: "Tuân thủ",
      navContact: "Liên hệ",
      navSpecs: "Thông số",
      navProcess: "Quy trình",
      navCta: "Nhận báo giá",
      whatsappSales: "Kinh doanh WhatsApp",
      formName: "Họ và tên *",
      formCompany: "Công ty",
      formEmail: "Email *",
      formPhone: "Điện thoại / WhatsApp",
      formDestination: "Cảng đến *",
      formQuantity: "Số lượng *",
      formEstimatedQuantity: "Số lượng dự kiến *",
      formOther: "Yêu cầu khác",
      formNoteHtml: 'Khi gửi biểu mẫu này, bạn đồng ý để chúng tôi liên hệ về báo giá. Xem <a href="https://www.pakswell.com/privacy">Chính sách bảo mật</a>.',
      salesContact: "Liên hệ kinh doanh",
      email: "Email",
      phone: "Điện thoại",
      productEpal: "Pallet EPAL Euro",
      productCollars: "Pallet Collars gỗ",
      productHinges: "Bản lề pallet collar",
      mainSite: "Trang chính",
      footerText: "© 2026 PAKSWELL. Nhà sản xuất pallet EPAL và pallet collar.",
      mobileCall: "Gọi",
      mobileWhatsApp: "WhatsApp",
      mobileQuote: "Báo giá"
    },
    ko: {
      langShort: "KO",
      logoTagline: "포장 솔루션",
      topbarQuote: "견적 요청",
      navProducts: "제품",
      navCompliance: "인증",
      navContact: "문의",
      navSpecs: "사양",
      navProcess: "절차",
      navCta: "견적 받기",
      whatsappSales: "WhatsApp 영업",
      formName: "성명 *",
      formCompany: "회사",
      formEmail: "이메일 *",
      formPhone: "전화 / WhatsApp",
      formDestination: "도착 항구 *",
      formQuantity: "수량 *",
      formEstimatedQuantity: "예상 수량 *",
      formOther: "기타 요구사항",
      formNoteHtml: '양식을 제출하면 견적 관련 연락에 동의하는 것입니다. <a href="https://www.pakswell.com/privacy">개인정보 처리방침</a> 보기.',
      salesContact: "영업 담당",
      email: "이메일",
      phone: "전화",
      productEpal: "EPAL 유로 팔레트",
      productCollars: "목재 팔레트 칼라",
      productHinges: "팔레트 칼라 힌지",
      mainSite: "메인 사이트",
      footerText: "© 2026 PAKSWELL. EPAL 팔레트 및 팔레트 칼라 제조사.",
      mobileCall: "전화",
      mobileWhatsApp: "WhatsApp",
      mobileQuote: "견적"
    },
    ja: {
      langShort: "JA",
      logoTagline: "梱包ソリューション",
      topbarQuote: "見積依頼",
      navProducts: "製品",
      navCompliance: "規格対応",
      navContact: "お問い合わせ",
      navSpecs: "仕様",
      navProcess: "流れ",
      navCta: "見積依頼",
      whatsappSales: "WhatsApp 営業",
      formName: "氏名 *",
      formCompany: "会社名",
      formEmail: "メール *",
      formPhone: "電話 / WhatsApp",
      formDestination: "到着港 *",
      formQuantity: "数量 *",
      formEstimatedQuantity: "予定数量 *",
      formOther: "その他の要件",
      formNoteHtml: 'フォーム送信により、見積について当社から連絡することに同意したものとします。<a href="https://www.pakswell.com/privacy">プライバシーポリシー</a>をご確認ください。',
      salesContact: "営業担当",
      email: "メール",
      phone: "電話",
      productEpal: "EPAL ユーロパレット",
      productCollars: "木製パレットカラー",
      productHinges: "パレットカラー用ヒンジ",
      mainSite: "メインサイト",
      footerText: "© 2026 PAKSWELL. EPAL パレットとパレットカラーのメーカー。",
      mobileCall: "電話",
      mobileWhatsApp: "WhatsApp",
      mobileQuote: "見積"
    }
  };

  var PRODUCT_COPY = {
    "epal-euro-pallets": {
      en: {
        metaTitle: "PPWR EPAL 1 Pallet Supplier China | PAKSWELL",
        metaDescription: "Source EPAL 1 pallets from China with the current EPAL EU Declaration of Conformity under PPWR Article 39, ISPM 15 treatment and order-specific export documents.",
        ogTitle: "PPWR EPAL 1 Pallets from China | PAKSWELL",
        ogDescription: "EPAL 1 pallets with the current EPAL EU Declaration of Conformity under PPWR Article 39, ISPM 15 treatment and order-specific export documents.",
        eyebrow: "EPAL pallet China manufacturer | PPWR documents | ISPM 15 HT",
        heroTitle: "EPAL 1 & EPAL 3 Pallets from China with PPWR Documentation",
        heroCopy: "PAKSWELL supplies EPAL 1 and EPAL 3 pallets for FCL export. For EPAL 1, the current EPAL EU Declaration of Conformity under Article 39 of Regulation (EU) 2025/40 (PPWR) is available alongside ISPM 15 treatment and order-specific export documents.",
        heroQuote: "Request EPAL Pallet Quote",
        fact1: "EPAL pallet manufacturing in China",
        fact2: "EPAL 1 / EPAL 3",
        fact3: "EPAL 1 PPWR EU Declaration available",
        fact4: "MOQ: 1 container",
        specsLabel: "EPAL pallet China manufacturer",
        specsTitle: "EPAL 1 and EPAL 3 pallets for FCL export",
        specsLead: "PAKSWELL supplies EPAL pallets for FCL buyers who need consistent specifications, ISPM 15 heat treatment, quality control and clear destination documents. The current EPAL PPWR EU Declaration is available for EPAL 1.",
        spec1Key: "Manufacturing scope",
        spec1Value: "EPAL pallet manufacturing, heat treatment, quality control, export documentation, and supervised FCL loading in China.",
        spec2Key: "EPAL models",
        spec2Value: "EPAL 1: 1200 x 800 x 144 mm. EPAL 3: 1200 x 1000 mm. Other EPAL models are confirmed against the order specification and production plan.",
        spec3Key: "PPWR & EPAL documentation",
        spec3Value: "For EPAL 1 pallets, the current EPAL EU Declaration of Conformity under PPWR Article 39 is available. The formal quotation identifies the applicable producing facility, EPAL licence details, treatment markings and shipment documents.",
        processLabel: "Buying process",
        processTitle: "From manufacturer quote to container loading",
        step1Title: "Send pallet requirements",
        step1Copy: "EPAL model, size, quantity, destination port, and delivery timeline.",
        step2Title: "Confirm production and price",
        step2Copy: "We confirm the EPAL model, production plan, lead time, and FCL price.",
        step3Title: "Prepare export documents",
        step3Copy: "ISPM 15, phytosanitary, packing, and commercial documents aligned with destination market.",
        step4Title: "Load and ship",
        step4Copy: "Supervised container loading with photos and shipping coordination.",
        quoteLabel: "Request a quote",
        quoteTitle: "Get EPAL pallet manufacturer pricing for your destination port",
        quoteLead: "For the fastest quote, include EPAL model, size, quantity, destination port, and delivery timeline. PAKSWELL promotes new EPAL Euro pallets manufactured for export buyers.",
        emailCta: "Email Directly",
        emailSubject: "EPAL Euro Pallet Quote Request",
        formDestinationPlaceholder: "Bangkok, Ho Chi Minh, Busan...",
        formQuantityPlaceholder: "1 x 40'HC, 2 containers...",
        formMessagePlaceholder: "Required size (EPAL 1 / EPAL 3 / mixed), timeline, documents, or anything else we should know.",
        formSubmit: "Send EPAL Pallet RFQ",
        footerText: "© 2026 PAKSWELL. China manufacturer of EPAL pallets, pallet collars, and galvanized hinges."
      },
      th: {
        metaTitle: "พาเลท EPAL 1 พร้อมเอกสาร PPWR จากจีน | PAKSWELL",
        metaDescription: "พาเลท EPAL 1 จากจีนพร้อมคำประกาศความสอดคล้องของสหภาพยุโรปตาม PPWR มาตรา 39 การอบ ISPM 15 และเอกสารส่งออกตามคำสั่งซื้อ",
        ogTitle: "พาเลท EPAL 1 พร้อมเอกสาร PPWR | PAKSWELL",
        ogDescription: "พาเลท EPAL 1 พร้อมคำประกาศความสอดคล้อง EU ตาม PPWR มาตรา 39 การอบ ISPM 15 และเอกสารส่งออกตามคำสั่งซื้อ",
        eyebrow: "ผู้ผลิตพาเลท EPAL ในจีน | เอกสาร PPWR | ISPM 15 HT",
        heroTitle: "พาเลท EPAL 1 และ EPAL 3 จากจีนพร้อมเอกสาร PPWR",
        heroCopy: "PAKSWELL จัดหาพาเลท EPAL 1 และ EPAL 3 สำหรับส่งออก FCL โดยพาเลท EPAL 1 มีคำประกาศความสอดคล้องของสหภาพยุโรปฉบับปัจจุบันตามมาตรา 39 ของ Regulation (EU) 2025/40 (PPWR) พร้อมการอบ ISPM 15 และเอกสารส่งออกตามคำสั่งซื้อ",
        heroQuote: "ขอราคาพาเลท EPAL",
        fact1: "MOQ: 1 ตู้คอนเทนเนอร์",
        fact2: "เสนอราคาใน 24 ชม.",
        fact3: "EPAL 1 มีคำประกาศ EU ตาม PPWR",
        fact4: "EPAL 1 / EPAL 3",
        specsLabel: "เหมาะสำหรับ",
        specsTitle: "พาเลท EPAL 1 และ EPAL 3 พร้อมเอกสารสำหรับการนำเข้า",
        specsLead: "PAKSWELL จัดหาพาเลท EPAL สำหรับผู้ซื้อ FCL พร้อมยืนยันข้อกำหนด การอบ ISPM 15 การควบคุมคุณภาพ และเอกสารปลายทาง โดยมีคำประกาศ EU ตาม PPWR ฉบับปัจจุบันสำหรับ EPAL 1",
        spec1Key: "ขนาด",
        spec1Value: "EPAL 1 ขนาด 1200 x 800 มม. และ EPAL 3 ขนาด 1200 x 1000 มม. รุ่นอื่นยืนยันตามข้อกำหนดและแผนการผลิต",
        spec2Key: "การอบ/เอกสาร",
        spec2Value: "ข้อกำหนด ISPM 15 ใบรับรองสุขอนามัยพืช และเอกสารส่งออกจะยืนยันตามแผนการผลิต เส้นทาง และปลายทางของคำสั่งซื้อ",
        spec3Key: "เอกสาร PPWR และ EPAL",
        spec3Value: "สำหรับ EPAL 1 มีคำประกาศความสอดคล้อง EU ตาม PPWR มาตรา 39 ใบเสนอราคาจะยืนยันโรงงาน ใบอนุญาต EPAL เครื่องหมายการอบ และเอกสารขนส่งที่ใช้ได้",
        processLabel: "ขั้นตอนสั่งซื้อ",
        processTitle: "จาก RFQ ถึงโหลดตู้",
        step1Title: "ส่งความต้องการ",
        step1Copy: "ขนาด ท่าเรือ จำนวน และกำหนดเวลา",
        step2Title: "ยืนยันสต็อกและราคา",
        step2Copy: "เสนอราคาใน 24 ชั่วโมง",
        step3Title: "เตรียมเอกสาร",
        step3Copy: "เอกสารสอดคล้องกับตลาดปลายทาง",
        step4Title: "โหลดและส่งออก",
        step4Copy: "ควบคุมการโหลดตู้คอนเทนเนอร์",
        quoteLabel: "ขอใบเสนอราคา",
        quoteTitle: "รับราคาพาเลท EPAL สำหรับท่าเรือปลายทาง",
        quoteLead: "เพื่อเสนอราคาเร็ว โปรดระบุขนาด จำนวน ท่าเรือปลายทาง และกำหนดเวลา PAKSWELL โปรโมตพาเลท EPAL ใหม่สำหรับผู้ซื้อส่งออก",
        emailCta: "ส่งอีเมลโดยตรง",
        emailSubject: "EPAL Euro Pallet Quote Request",
        formDestinationPlaceholder: "Bangkok, Ho Chi Minh, Busan...",
        formQuantityPlaceholder: "1 x 40'HC, 2 ตู้...",
        formMessagePlaceholder: "ขนาดที่ต้องการ (EPAL 1 / EPAL 3 / ผสม), กำหนดเวลา, เอกสาร หรือข้อกำหนดอื่น",
        formSubmit: "ส่ง RFQ พาเลท EPAL"
      },
      "zh-CN": {
        metaTitle: "中国PPWR EPAL 1托盘供应商 | PAKSWELL",
        metaDescription: "从中国采购EPAL 1托盘，可提供PPWR第39条下现行EPAL欧盟符合性声明、ISPM 15处理及按订单确认的出口文件。",
        ogTitle: "中国PPWR EPAL 1托盘 | PAKSWELL",
        ogDescription: "EPAL 1托盘可提供PPWR第39条下现行欧盟符合性声明、ISPM 15处理和按订单确认的出口文件。",
        eyebrow: "中国EPAL托盘制造商 | PPWR文件 | ISPM 15支持",
        heroTitle: "中国EPAL 1与EPAL 3托盘及PPWR文件支持",
        heroCopy: "PAKSWELL供应EPAL 1和EPAL 3托盘用于整柜出口。EPAL 1可提供Regulation (EU) 2025/40（PPWR）第39条下现行EPAL欧盟符合性声明，并配套ISPM 15处理和按订单确认的出口文件。",
        heroQuote: "获取 EPAL 托盘报价",
        fact1: "起订量：1个集装箱",
        fact2: "24小时内报价",
        fact3: "EPAL 1可提供PPWR欧盟声明",
        fact4: "EPAL 1 / EPAL 3",
        specsLabel: "产品匹配",
        specsTitle: "面向进口买家的EPAL 1/3托盘与文件支持",
        specsLead: "PAKSWELL为整柜买家供应EPAL托盘，并确认规格、ISPM 15处理、质量控制和目的国文件。EPAL 1可提供现行EPAL PPWR欧盟符合性声明。",
        spec1Key: "尺寸",
        spec1Value: "EPAL 1：1200 x 800 mm；EPAL 3：1200 x 1000 mm。其他型号按订单规格与生产计划确认。",
        spec2Key: "处理",
        spec2Value: "ISPM 15 热处理，每票货提供植物检疫证书和完整出口文件。",
        spec3Key: "PPWR与EPAL文件",
        spec3Value: "EPAL 1可提供PPWR第39条下现行欧盟符合性声明；正式报价会列明适用生产工厂、EPAL许可、处理标记和运输文件。",
        processLabel: "采购流程",
        processTitle: "从询价到集装箱装柜",
        step1Title: "发送需求",
        step1Copy: "尺寸、港口、数量和交期。",
        step2Title: "确认库存和价格",
        step2Copy: "24小时内报价。",
        step3Title: "准备文件",
        step3Copy: "按目的市场要求匹配合规文件。",
        step4Title: "装柜发运",
        step4Copy: "监督集装箱装载。",
        quoteLabel: "申请报价",
        quoteTitle: "获取目的港 EPAL 托盘价格",
        quoteLead: "为了更快报价，请提供 EPAL 型号、尺寸、数量、目的港和交期。PAKSWELL 推广面向出口买家的全新 EPAL 欧标托盘。",
        emailCta: "直接发送邮件",
        emailSubject: "EPAL Euro Pallet Quote Request",
        formDestinationPlaceholder: "曼谷、胡志明、釜山...",
        formQuantityPlaceholder: "1 x 40'HC、2个集装箱...",
        formMessagePlaceholder: "所需尺寸（EPAL 1 / EPAL 3 / 混装）、时间、文件要求，或其他需求。",
        formSubmit: "发送 EPAL 托盘询价"
      },
      "zh-TW": {
        metaTitle: "中國PPWR EPAL 1棧板供應商 | PAKSWELL",
        metaDescription: "從中國採購EPAL 1棧板，可提供PPWR第39條下現行EPAL歐盟符合性聲明、ISPM 15處理及依訂單確認的出口文件。",
        ogTitle: "中國PPWR EPAL 1棧板 | PAKSWELL",
        ogDescription: "EPAL 1棧板可提供PPWR第39條下現行歐盟符合性聲明、ISPM 15處理及依訂單確認的出口文件。",
        eyebrow: "中國EPAL棧板製造商 | PPWR文件 | ISPM 15支援",
        heroTitle: "中國EPAL 1與EPAL 3棧板及PPWR文件支援",
        heroCopy: "PAKSWELL供應EPAL 1與EPAL 3棧板用於整櫃出口。EPAL 1可提供Regulation (EU) 2025/40（PPWR）第39條下現行EPAL歐盟符合性聲明，並搭配ISPM 15處理及依訂單確認的出口文件。",
        heroQuote: "取得 EPAL 棧板報價",
        fact1: "起訂量：1個貨櫃",
        fact2: "24小時內報價",
        fact3: "EPAL 1可提供PPWR歐盟聲明",
        fact4: "EPAL 1 / EPAL 3",
        specsLabel: "產品適配",
        specsTitle: "面向進口買家的EPAL 1/3棧板與文件支援",
        specsLead: "PAKSWELL為整櫃買家供應EPAL棧板，並確認規格、ISPM 15處理、品質控制及目的國文件。EPAL 1可提供現行EPAL PPWR歐盟符合性聲明。",
        spec1Key: "尺寸",
        spec1Value: "EPAL 1：1200 x 800 mm；EPAL 3：1200 x 1000 mm。其他型號依訂單規格與生產計畫確認。",
        spec2Key: "處理",
        spec2Value: "ISPM 15 熱處理，每票貨提供植物檢疫證書與完整出口文件。",
        spec3Key: "PPWR與EPAL文件",
        spec3Value: "EPAL 1可提供PPWR第39條下現行歐盟符合性聲明；正式報價會列明適用生產工廠、EPAL許可、處理標記及運輸文件。",
        processLabel: "採購流程",
        processTitle: "從詢價到貨櫃裝載",
        step1Title: "提供需求",
        step1Copy: "尺寸、港口、數量與交期。",
        step2Title: "確認庫存與價格",
        step2Copy: "24小時內報價。",
        step3Title: "準備文件",
        step3Copy: "依目的市場要求匹配合規文件。",
        step4Title: "裝櫃發運",
        step4Copy: "監督貨櫃裝載。",
        quoteLabel: "申請報價",
        quoteTitle: "取得目的港 EPAL 棧板價格",
        quoteLead: "為了更快報價，請提供 EPAL 型號、尺寸、數量、目的港與交期。PAKSWELL 推廣面向出口買家的全新 EPAL 歐標棧板。",
        emailCta: "直接寄送郵件",
        emailSubject: "EPAL Euro Pallet Quote Request",
        formDestinationPlaceholder: "曼谷、胡志明、釜山...",
        formQuantityPlaceholder: "1 x 40'HC、2個貨櫃...",
        formMessagePlaceholder: "所需尺寸（EPAL 1 / EPAL 3 / 混裝）、時間、文件需求，或其他需求。",
        formSubmit: "送出 EPAL 棧板詢價"
      },
      vi: {
        metaTitle: "Pallet EPAL 1 có hồ sơ PPWR từ Trung Quốc | PAKSWELL",
        metaDescription: "Pallet EPAL 1 từ Trung Quốc với Tuyên bố phù hợp EU hiện hành theo Điều 39 PPWR, xử lý ISPM 15 và chứng từ xuất khẩu theo đơn hàng.",
        ogTitle: "Pallet EPAL 1 có hồ sơ PPWR | PAKSWELL",
        ogDescription: "Pallet EPAL 1 có Tuyên bố phù hợp EU theo Điều 39 PPWR, xử lý ISPM 15 và chứng từ xuất khẩu theo đơn hàng.",
        eyebrow: "Nhà sản xuất pallet EPAL tại Trung Quốc | Hồ sơ PPWR | ISPM 15",
        heroTitle: "Pallet EPAL 1 và EPAL 3 từ Trung Quốc có hỗ trợ hồ sơ PPWR",
        heroCopy: "PAKSWELL cung cấp pallet EPAL 1 và EPAL 3 cho xuất khẩu FCL. Với EPAL 1, Tuyên bố phù hợp EU hiện hành theo Điều 39 của Regulation (EU) 2025/40 (PPWR) có sẵn cùng xử lý ISPM 15 và chứng từ xuất khẩu theo đơn hàng.",
        heroQuote: "Yêu cầu báo giá pallet EPAL",
        fact1: "MOQ: 1 container",
        fact2: "Báo giá trong 24h",
        fact3: "EPAL 1 có Tuyên bố EU theo PPWR",
        fact4: "EPAL 1 / EPAL 3",
        specsLabel: "Phù hợp sản phẩm",
        specsTitle: "Pallet EPAL 1/3 và hỗ trợ hồ sơ cho nhà nhập khẩu",
        specsLead: "PAKSWELL cung cấp pallet EPAL cho khách FCL, xác nhận quy cách, xử lý ISPM 15, kiểm soát chất lượng và chứng từ điểm đến. Tuyên bố phù hợp EU PPWR hiện hành có sẵn cho EPAL 1.",
        spec1Key: "Kích thước",
        spec1Value: "EPAL 1: 1200 x 800 mm; EPAL 3: 1200 x 1000 mm. Model khác được xác nhận theo quy cách đơn hàng và kế hoạch sản xuất.",
        spec2Key: "Xử lý",
        spec2Value: "Xử lý nhiệt ISPM 15 với chứng thư kiểm dịch thực vật và chứng từ xuất khẩu đầy đủ cho mỗi lô.",
        spec3Key: "Hồ sơ PPWR và EPAL",
        spec3Value: "EPAL 1 có Tuyên bố phù hợp EU hiện hành theo Điều 39 PPWR; báo giá xác nhận cơ sở sản xuất, giấy phép EPAL, dấu xử lý và chứng từ vận chuyển áp dụng.",
        processLabel: "Quy trình mua hàng",
        processTitle: "Từ RFQ đến đóng container",
        step1Title: "Gửi yêu cầu",
        step1Copy: "Kích thước, cảng, số lượng, thời gian.",
        step2Title: "Xác nhận tồn kho và giá",
        step2Copy: "Báo giá trong 24 giờ.",
        step3Title: "Chuẩn bị chứng từ",
        step3Copy: "Tuân thủ theo thị trường đích.",
        step4Title: "Đóng và xuất hàng",
        step4Copy: "Giám sát đóng container.",
        quoteLabel: "Yêu cầu báo giá",
        quoteTitle: "Nhận giá pallet EPAL cho cảng đến của bạn",
        quoteLead: "Để báo giá nhanh, hãy gửi model EPAL, kích thước, số lượng, cảng đến và thời gian giao hàng. PAKSWELL quảng bá pallet EPAL mới cho người mua xuất khẩu.",
        emailCta: "Gửi email trực tiếp",
        emailSubject: "EPAL Euro Pallet Quote Request",
        formDestinationPlaceholder: "Bangkok, Ho Chi Minh, Busan...",
        formQuantityPlaceholder: "1 x 40'HC, 2 container...",
        formMessagePlaceholder: "Kích thước cần dùng (EPAL 1 / EPAL 3 / hỗn hợp), thời gian, chứng từ hoặc yêu cầu khác.",
        formSubmit: "Gửi RFQ pallet EPAL"
      },
      ko: {
        metaTitle: "중국산 PPWR 문서 EPAL 1 팔레트 | PAKSWELL",
        metaDescription: "PPWR 제39조에 따른 최신 EPAL EU 적합성 선언서, ISPM 15 처리 및 주문별 수출서류를 제공하는 중국산 EPAL 1 팔레트.",
        ogTitle: "PPWR 문서가 있는 EPAL 1 팔레트 | PAKSWELL",
        ogDescription: "EPAL 1 팔레트에 PPWR 제39조 EU 적합성 선언, ISPM 15 처리 및 주문별 수출서류를 제공합니다.",
        eyebrow: "중국 EPAL 팔레트 제조업체 | PPWR 문서 | ISPM 15",
        heroTitle: "PPWR 문서를 지원하는 중국산 EPAL 1 및 EPAL 3 팔레트",
        heroCopy: "PAKSWELL은 FCL 수출용 EPAL 1 및 EPAL 3 팔레트를 공급합니다. EPAL 1에는 Regulation (EU) 2025/40(PPWR) 제39조에 따른 최신 EPAL EU 적합성 선언서와 ISPM 15 처리 및 주문별 수출서류를 제공합니다.",
        heroQuote: "EPAL 팔레트 견적 요청",
        fact1: "MOQ: 1 컨테이너",
        fact2: "24시간 내 견적",
        fact3: "EPAL 1 PPWR EU 선언서 제공",
        fact4: "EPAL 1 / EPAL 3",
        specsLabel: "제품 적합성",
        specsTitle: "수입업체용 EPAL 1/3 팔레트와 문서 지원",
        specsLead: "PAKSWELL은 FCL 바이어에게 EPAL 팔레트를 공급하고 규격, ISPM 15 처리, 품질관리 및 목적지 서류를 확인합니다. EPAL 1에는 최신 EPAL PPWR EU 적합성 선언서를 제공합니다.",
        spec1Key: "사이즈",
        spec1Value: "1200 x 800 mm EPAL 1, 1200 x 1000 mm EPAL 3 및 기타 승인 모델 문의 가능.",
        spec2Key: "처리",
        spec2Value: "ISPM 15 열처리, 식물검역증 및 전체 수출 서류 제공.",
        spec3Key: "PPWR 및 EPAL 문서",
        spec3Value: "EPAL 1에는 PPWR 제39조에 따른 최신 EU 적합성 선언서가 있으며, 정식 견적에서 적용 생산시설, EPAL 라이선스, 처리 마킹 및 운송서류를 확인합니다.",
        processLabel: "구매 절차",
        processTitle: "RFQ부터 컨테이너 적재까지",
        step1Title: "요구사항 전달",
        step1Copy: "사이즈, 항구, 수량, 일정.",
        step2Title: "재고와 가격 확인",
        step2Copy: "24시간 내 견적.",
        step3Title: "서류 준비",
        step3Copy: "목적지 시장 기준에 맞춘 서류.",
        step4Title: "적재 및 선적",
        step4Copy: "컨테이너 적재 감독.",
        quoteLabel: "견적 요청",
        quoteTitle: "도착 항구 기준 EPAL 팔레트 가격 받기",
        quoteLead: "빠른 견적을 위해 사이즈, 수량, 도착 항구, 신규 또는 리퍼브 팔레트 여부를 알려주세요.",
        emailCta: "이메일 보내기",
        emailSubject: "EPAL Euro Pallet Quote Request",
        formDestinationPlaceholder: "Bangkok, Ho Chi Minh, Busan...",
        formQuantityPlaceholder: "1 x 40'HC, 2 컨테이너...",
        formMessagePlaceholder: "필요 사이즈(EPAL 1 / EPAL 3 / 혼합), 일정, 신규/리퍼브 또는 기타 요구사항.",
        formSubmit: "EPAL 팔레트 RFQ 보내기"
      },
      ja: {
        metaTitle: "中国製PPWR書類対応EPAL 1パレット | PAKSWELL",
        metaDescription: "PPWR第39条に基づく現行EPAL EU適合宣言書、ISPM 15処理、注文別輸出書類を提供する中国製EPAL 1パレット。",
        ogTitle: "PPWR書類対応EPAL 1パレット | PAKSWELL",
        ogDescription: "EPAL 1パレットにPPWR第39条EU適合宣言書、ISPM 15処理、注文別輸出書類を提供します。",
        eyebrow: "中国EPALパレットメーカー | PPWR書類 | ISPM 15",
        heroTitle: "PPWR書類に対応する中国製EPAL 1・EPAL 3パレット",
        heroCopy: "PAKSWELLはFCL輸出向けEPAL 1・EPAL 3パレットを供給します。EPAL 1にはRegulation (EU) 2025/40（PPWR）第39条に基づく現行EPAL EU適合宣言書、ISPM 15処理、注文別輸出書類を提供します。",
        heroQuote: "EPAL パレット見積を依頼",
        fact1: "MOQ：1コンテナ",
        fact2: "24時間以内に見積",
        fact3: "EPAL 1 PPWR EU宣言書対応",
        fact4: "EPAL 1 / EPAL 3",
        specsLabel: "製品適合",
        specsTitle: "輸入者向けEPAL 1/3パレットと書類支援",
        specsLead: "PAKSWELLはFCLバイヤーにEPALパレットを供給し、仕様、ISPM 15処理、品質管理、仕向地書類を確認します。EPAL 1には現行EPAL PPWR EU適合宣言書を提供します。",
        spec1Key: "サイズ",
        spec1Value: "1200 x 800 mm EPAL 1、1200 x 1000 mm EPAL 3、その他認定モデルはお問い合わせください。",
        spec2Key: "処理",
        spec2Value: "ISPM 15 熱処理、植物検疫証明書および輸出書類一式を各出荷で提供。",
        spec3Key: "PPWR・EPAL書類",
        spec3Value: "EPAL 1にはPPWR第39条に基づく現行EU適合宣言書があり、正式見積で適用生産施設、EPALライセンス、処理表示、輸送書類を確認します。",
        processLabel: "購入プロセス",
        processTitle: "RFQ からコンテナ積載まで",
        step1Title: "要件を送信",
        step1Copy: "サイズ、港、数量、納期。",
        step2Title: "在庫と価格を確認",
        step2Copy: "24時間以内に見積。",
        step3Title: "書類を準備",
        step3Copy: "目的市場の規格に合わせて対応。",
        step4Title: "積載・出荷",
        step4Copy: "コンテナ積載を管理。",
        quoteLabel: "見積依頼",
        quoteTitle: "到着港向け EPAL パレット価格を取得",
        quoteLead: "迅速な見積のため、EPALモデル、サイズ、数量、到着港、納期をお知らせください。PAKSWELL は輸出バイヤー向け新品 EPAL ユーロパレットを提案します。",
        emailCta: "直接メール",
        emailSubject: "EPAL Euro Pallet Quote Request",
        formDestinationPlaceholder: "Bangkok, Ho Chi Minh, Busan...",
        formQuantityPlaceholder: "1 x 40'HC、2コンテナ...",
        formMessagePlaceholder: "必要サイズ（EPAL 1 / EPAL 3 / 混載）、納期、必要書類、その他要件。",
        formSubmit: "EPAL パレット RFQ を送信"
      }
    },
    "pallet-collars": {
      en: {
        metaTitle: "PPWR Pallet Collar Documentation | China Supplier | PAKSWELL",
        metaDescription: "Reusable wooden pallet collars from China with product and material data, reuse and repair information, and order-specific PPWR technical documentation for buyer review.",
        ogTitle: "Reusable Pallet Collars with PPWR Documentation | PAKSWELL",
        ogDescription: "Foldable wooden pallet collars with product and material data, reuse and repair information, and order-specific PPWR technical documentation.",
        eyebrow: "Reusable transport packaging | PPWR documentation | FCL export",
        heroTitle: "Reusable Wooden Pallet Collars with PPWR Documentation",
        heroCopy: "For the 1200 × 800 × 195 mm specification, the technical file includes product and material data, reuse and repair information, and SGS PPWR Article 5(4) evidence for the wooden component. Final component coverage and declaration scope are confirmed before order approval.",
        heroQuote: "Request Pallet Collar Quote",
        fact1: "40HQ reference: 2,714 PCS",
        fact2: "MOQ: 1 container",
        fact3: "Standard & custom sizes",
        fact4: "PPWR technical file available",
        specsLabel: "Product fit",
        specsTitle: "Reusable pallet collars with order-specific PPWR documentation",
        specsLead: "Foldable solid wood pallet collars suit repeat industrial packaging programs for fasteners, castings and automotive parts. Product-specific PPWR documents are reviewed against the supplied specification, component evidence, import route and intended use before order approval.",
        spec1Key: "Sizes",
        spec1Value: "1200 x 800 mm, 1200 x 1000 mm, 600 x 800 mm, plus custom dimensions on request.",
        spec2Key: "Structure",
        spec2Value: "Foldable solid wood boards with galvanized 4-hinge or custom 6-hinge configurations. Board height and thickness are confirmed per drawing or sample.",
        spec3Key: "Accessories",
        spec3Value: "Plywood lids, plastic corners, matching pallets, branding and bundled hinge supply are available by quotation.",
        processLabel: "Buying process",
        processTitle: "Simple RFQ for custom or standard collars",
        step1Title: "Share packaging goal",
        step1Copy: "Cargo, size, height, quantity, destination.",
        step2Title: "Confirm configuration",
        step2Copy: "Hinge option, lids, plastic corners, mixed loading.",
        step3Title: "Prepare production",
        step3Copy: "Stock ships fast; custom sizes confirmed first.",
        step4Title: "Bundle for export",
        step4Copy: "Folded, strapped, documented, FCL-loaded.",
        quoteLabel: "Request a quote",
        quoteTitle: "Get pallet collar pricing for your packaging project",
        quoteLead: "For the fastest quote, include pallet footprint, collar height, layers per set, destination port, and container quantity. MOQ is 1 FCL; retail or one-piece orders are not our focus.",
        emailCta: "Email Directly",
        emailSubject: "Pallet Collar Quote Request",
        formDestinationPlaceholder: "Laem Chabang, Cat Lai, Busan...",
        formQuantityPlaceholder: "PCS or containers",
        formMessagePlaceholder: "Size (1200x800 / 1200x1000 / 600x800 / custom), board height, lids, plastic corners, branding, or anything else we should know.",
        formSubmit: "Send Pallet Collar RFQ"
      },
      th: {
        metaTitle: "เอกสาร PPWR สำหรับกรอบพาเลทไม้ | PAKSWELL",
        metaDescription: "กรอบพาเลทไม้ใช้ซ้ำได้จากจีน พร้อมข้อมูลผลิตภัณฑ์และวัสดุ ข้อมูลการใช้ซ้ำและซ่อมแซม และเอกสารทางเทคนิค PPWR ตามคำสั่งซื้อสำหรับผู้ซื้อตรวจสอบ",
        ogTitle: "กรอบพาเลทใช้ซ้ำพร้อมเอกสาร PPWR | PAKSWELL",
        ogDescription: "กรอบพาเลทไม้พับได้ พร้อมข้อมูลผลิตภัณฑ์และวัสดุ ข้อมูลการใช้ซ้ำและซ่อมแซม และเอกสาร PPWR ตามคำสั่งซื้อ",
        eyebrow: "บรรจุภัณฑ์ขนส่งใช้ซ้ำ | เอกสาร PPWR | ส่งออก FCL",
        heroTitle: "กรอบพาเลทไม้ใช้ซ้ำพร้อมเอกสาร PPWR",
        heroCopy: "สำหรับขนาด 1200 × 800 × 195 มม. แฟ้มทางเทคนิคมีข้อมูลผลิตภัณฑ์และวัสดุ ข้อมูลการใช้ซ้ำและซ่อมแซม และหลักฐาน SGS ตาม PPWR มาตรา 5(4) สำหรับส่วนไม้ โดยยืนยันขอบเขตส่วนประกอบและคำประกาศขั้นสุดท้ายก่อนอนุมัติคำสั่งซื้อ",
        heroQuote: "ขอราคากรอบพาเลท",
        fact1: "อ้างอิง 40HQ: 2,714 PCS",
        fact2: "MOQ: 1 ตู้คอนเทนเนอร์",
        fact3: "ขนาดมาตรฐานและสั่งทำ",
        fact4: "มีแฟ้มทางเทคนิค PPWR",
        specsLabel: "เหมาะสำหรับ",
        specsTitle: "กรอบพาเลทใช้ซ้ำพร้อมเอกสาร PPWR ตามคำสั่งซื้อ",
        specsLead: "กรอบพาเลทไม้พับได้เหมาะกับโปรแกรมบรรจุภัณฑ์อุตสาหกรรมแบบใช้ซ้ำสำหรับชิ้นส่วนยึด งานหล่อ และชิ้นส่วนยานยนต์ เอกสาร PPWR ของผลิตภัณฑ์จะตรวจสอบตามข้อกำหนดที่จัดส่ง หลักฐานส่วนประกอบ เส้นทางนำเข้า และการใช้งานก่อนอนุมัติคำสั่งซื้อ",
        spec1Key: "ขนาด",
        spec1Value: "1200 x 800 มม., 1200 x 1000 มม., 600 x 800 มม. และขนาดสั่งทำ",
        spec2Key: "โครงสร้าง",
        spec2Value: "แผ่นไม้จริงพับได้พร้อมบานพับชุบกัลวาไนซ์ เลือกฝาไม้อัดและมุมพลาสติกได้",
        spec3Key: "MOQ",
        spec3Value: "1 x FCL สามารถโหลดร่วมกับพาเลท ฝา และอุปกรณ์เสริมได้",
        processLabel: "ขั้นตอนสั่งซื้อ",
        processTitle: "RFQ ง่ายสำหรับขนาดมาตรฐานหรือสั่งทำ",
        step1Title: "แจ้งเป้าหมายการแพ็ก",
        step1Copy: "สินค้า ขนาด ความสูง จำนวน ปลายทาง",
        step2Title: "ยืนยันรูปแบบ",
        step2Copy: "บานพับ ฝา มุมพลาสติก และการโหลดร่วม",
        step3Title: "เตรียมผลิต",
        step3Copy: "สินค้าสต็อกส่งไว ขนาดสั่งทำยืนยันก่อนผลิต",
        step4Title: "มัดรวมเพื่อส่งออก",
        step4Copy: "พับ รัด ทำเอกสาร และโหลด FCL",
        quoteLabel: "ขอใบเสนอราคา",
        quoteTitle: "รับราคากรอบพาเลทสำหรับโปรเจกต์บรรจุภัณฑ์",
        quoteLead: "เพื่อเสนอราคาเร็ว โปรดระบุขนาดฐานพาเลท ความสูงกรอบ จำนวนชั้นต่อชุด จำนวน ท่าเรือ และต้องการฝาหรือมุมพลาสติกหรือไม่",
        emailCta: "ส่งอีเมลโดยตรง",
        emailSubject: "Pallet Collar Quote Request",
        formDestinationPlaceholder: "Laem Chabang, Cat Lai, Busan...",
        formQuantityPlaceholder: "PCS หรือตู้คอนเทนเนอร์",
        formMessagePlaceholder: "ขนาด (1200x800 / 1200x1000 / 600x800 / สั่งทำ), ความสูงแผ่น, ฝา, มุมพลาสติก, โลโก้ หรือข้อกำหนดอื่น",
        formSubmit: "ส่ง RFQ กรอบพาเลท"
      },
      "zh-CN": {
        metaTitle: "PPWR木质围板文件 | 中国供应商 | PAKSWELL",
        metaDescription: "中国可重复使用木质围板，提供产品和材料数据、重复使用与维修信息，以及供买家审核的订单专属PPWR技术文件。",
        ogTitle: "可重复使用木质围板与PPWR文件 | PAKSWELL",
        ogDescription: "可折叠木质围板，配套产品和材料数据、重复使用与维修信息及订单专属PPWR技术文件。",
        eyebrow: "可重复使用运输包装 | PPWR文件 | 整柜出口",
        heroTitle: "配套PPWR文件的可重复使用木质围板",
        heroCopy: "针对1200 × 800 × 195 mm规格，技术文件包括产品和材料数据、重复使用与维修信息，以及木材部件的SGS PPWR第5(4)条检测依据。最终部件覆盖和声明范围会在订单批准前确认。",
        heroQuote: "获取围板箱报价",
        fact1: "40HQ参考：2,714 PCS",
        fact2: "起订量：1个集装箱",
        fact3: "标准与定制尺寸",
        fact4: "可提供PPWR技术文件",
        specsLabel: "产品匹配",
        specsTitle: "配套订单专属PPWR文件的可重复使用围板",
        specsLead: "可折叠实木围板适合紧固件、铸造件和汽车零部件等重复使用工业包装项目。产品专属PPWR文件会按实际供货规格、部件证据、进口路线和预期用途在订单批准前审核。",
        spec1Key: "尺寸",
        spec1Value: "1200 x 800 mm、1200 x 1000 mm、600 x 800 mm，也可按需定制。",
        spec2Key: "结构",
        spec2Value: "可折叠实木板搭配镀锌铰链，可选胶合板盖和塑料护角。",
        spec3Key: "起订量",
        spec3Value: "1 x FCL。可按需求与托盘、盖板和配件混装。",
        processLabel: "采购流程",
        processTitle: "标准或定制围板箱的简单询价流程",
        step1Title: "说明包装目标",
        step1Copy: "货物、尺寸、高度、数量和目的地。",
        step2Title: "确认配置",
        step2Copy: "铰链、盖板、塑料护角和混装方案。",
        step3Title: "安排生产",
        step3Copy: "库存产品可快速发货，定制尺寸先确认。",
        step4Title: "打包出口",
        step4Copy: "折叠、打包、备齐文件并整柜装载。",
        quoteLabel: "申请报价",
        quoteTitle: "获取包装项目的围板箱价格",
        quoteLead: "为了更快报价，请提供托盘尺寸、围板高度、每套层数、数量、目的港，以及是否需要盖板或塑料护角。",
        emailCta: "直接发送邮件",
        emailSubject: "Pallet Collar Quote Request",
        formDestinationPlaceholder: "林查班、吉莱、釜山...",
        formQuantityPlaceholder: "PCS或集装箱数量",
        formMessagePlaceholder: "尺寸（1200x800 / 1200x1000 / 600x800 / 定制）、板高、盖板、塑料护角、品牌标识或其他要求。",
        formSubmit: "发送围板箱询价"
      },
      "zh-TW": {
        metaTitle: "PPWR木質圍板文件 | 中國供應商 | PAKSWELL",
        metaDescription: "中國可重複使用木質圍板，提供產品與材料資料、重複使用及維修資訊，以及供買家審核的訂單專屬PPWR技術文件。",
        ogTitle: "可重複使用木質圍板與PPWR文件 | PAKSWELL",
        ogDescription: "可折疊木質圍板，搭配產品與材料資料、重複使用及維修資訊，以及訂單專屬PPWR技術文件。",
        eyebrow: "可重複使用運輸包裝 | PPWR文件 | 整櫃出口",
        heroTitle: "搭配PPWR文件的可重複使用木質圍板",
        heroCopy: "針對1200 × 800 × 195 mm規格，技術文件包括產品與材料資料、重複使用及維修資訊，以及木材部件的SGS PPWR第5(4)條檢測依據。最終部件涵蓋與聲明範圍會在訂單批准前確認。",
        heroQuote: "取得圍板箱報價",
        fact1: "40HQ參考：2,714 PCS",
        fact2: "起訂量：1個貨櫃",
        fact3: "標準與客製尺寸",
        fact4: "可提供PPWR技術文件",
        specsLabel: "產品適配",
        specsTitle: "搭配訂單專屬PPWR文件的可重複使用圍板",
        specsLead: "可折疊實木圍板適合緊固件、鑄造件及汽車零部件等重複使用工業包裝專案。產品專屬PPWR文件會依實際供貨規格、部件證據、進口路線及預期用途在訂單批准前審核。",
        spec1Key: "尺寸",
        spec1Value: "1200 x 800 mm、1200 x 1000 mm、600 x 800 mm，也可按需客製。",
        spec2Key: "結構",
        spec2Value: "可折疊實木板搭配鍍鋅鉸鏈，可選膠合板蓋和塑膠護角。",
        spec3Key: "起訂量",
        spec3Value: "1 x FCL。可按需求與棧板、蓋板和配件混裝。",
        processLabel: "採購流程",
        processTitle: "標準或客製圍板箱的簡單詢價流程",
        step1Title: "說明包裝目標",
        step1Copy: "貨物、尺寸、高度、數量與目的地。",
        step2Title: "確認配置",
        step2Copy: "鉸鏈、蓋板、塑膠護角與混裝方案。",
        step3Title: "安排生產",
        step3Copy: "庫存產品可快速出貨，客製尺寸先確認。",
        step4Title: "打包出口",
        step4Copy: "折疊、打包、備齊文件並整櫃裝載。",
        quoteLabel: "申請報價",
        quoteTitle: "取得包裝專案的圍板箱價格",
        quoteLead: "為了更快報價，請提供棧板尺寸、圍板高度、每套層數、數量、目的港，以及是否需要蓋板或塑膠護角。",
        emailCta: "直接寄送郵件",
        emailSubject: "Pallet Collar Quote Request",
        formDestinationPlaceholder: "林查班、吉萊、釜山...",
        formQuantityPlaceholder: "PCS或貨櫃數量",
        formMessagePlaceholder: "尺寸（1200x800 / 1200x1000 / 600x800 / 客製）、板高、蓋板、塑膠護角、品牌標示或其他需求。",
        formSubmit: "送出圍板箱詢價"
      },
      vi: {
        metaTitle: "Hồ sơ PPWR cho pallet collar gỗ | PAKSWELL",
        metaDescription: "Pallet collar gỗ tái sử dụng từ Trung Quốc, kèm dữ liệu sản phẩm và vật liệu, thông tin tái sử dụng và sửa chữa, cùng hồ sơ kỹ thuật PPWR theo đơn hàng để người mua xem xét.",
        ogTitle: "Pallet collar tái sử dụng có hồ sơ PPWR | PAKSWELL",
        ogDescription: "Pallet collar gỗ gấp gọn kèm dữ liệu sản phẩm/vật liệu, thông tin tái sử dụng/sửa chữa và hồ sơ PPWR theo đơn hàng.",
        eyebrow: "Bao bì vận chuyển tái sử dụng | Hồ sơ PPWR | Xuất FCL",
        heroTitle: "Pallet collar gỗ tái sử dụng có hồ sơ PPWR",
        heroCopy: "Với quy cách 1200 × 800 × 195 mm, hồ sơ kỹ thuật gồm dữ liệu sản phẩm và vật liệu, thông tin tái sử dụng và sửa chữa, cùng bằng chứng SGS theo Điều 5(4) PPWR cho phần gỗ. Phạm vi linh kiện và tuyên bố cuối cùng được xác nhận trước khi duyệt đơn.",
        heroQuote: "Yêu cầu báo giá pallet collar",
        fact1: "Tham khảo 40HQ: 2,714 PCS",
        fact2: "MOQ: 1 container",
        fact3: "Kích thước chuẩn và tùy chỉnh",
        fact4: "Có hồ sơ kỹ thuật PPWR",
        specsLabel: "Phù hợp sản phẩm",
        specsTitle: "Pallet collar tái sử dụng với hồ sơ PPWR theo đơn hàng",
        specsLead: "Pallet collar gỗ gấp gọn phù hợp với chương trình bao bì công nghiệp tái sử dụng cho ốc vít, chi tiết đúc và phụ tùng ô tô. Hồ sơ PPWR theo sản phẩm được xem xét theo quy cách cung cấp, bằng chứng linh kiện, tuyến nhập khẩu và mục đích sử dụng trước khi duyệt đơn.",
        spec1Key: "Kích thước",
        spec1Value: "1200 x 800 mm, 1200 x 1000 mm, 600 x 800 mm, và kích thước tùy chỉnh.",
        spec2Key: "Kết cấu",
        spec2Value: "Ván gỗ đặc gấp gọn với bản lề mạ kẽm. Tùy chọn nắp plywood và góc nhựa.",
        spec3Key: "MOQ",
        spec3Value: "1 x FCL. Có thể đóng chung với pallet, nắp và phụ kiện theo yêu cầu.",
        processLabel: "Quy trình mua hàng",
        processTitle: "RFQ đơn giản cho collar chuẩn hoặc tùy chỉnh",
        step1Title: "Chia sẻ mục tiêu đóng gói",
        step1Copy: "Hàng hóa, kích thước, chiều cao, số lượng, điểm đến.",
        step2Title: "Xác nhận cấu hình",
        step2Copy: "Bản lề, nắp, góc nhựa, đóng chung container.",
        step3Title: "Chuẩn bị sản xuất",
        step3Copy: "Hàng tồn kho giao nhanh; kích thước tùy chỉnh xác nhận trước.",
        step4Title: "Đóng gói xuất khẩu",
        step4Copy: "Gấp, đai, chuẩn bị chứng từ, đóng FCL.",
        quoteLabel: "Yêu cầu báo giá",
        quoteTitle: "Nhận giá pallet collar cho dự án đóng gói",
        quoteLead: "Để báo giá nhanh, hãy gửi footprint pallet, chiều cao collar, số lớp mỗi bộ, số lượng, cảng đến và nhu cầu nắp/góc nhựa.",
        emailCta: "Gửi email trực tiếp",
        emailSubject: "Pallet Collar Quote Request",
        formDestinationPlaceholder: "Laem Chabang, Cat Lai, Busan...",
        formQuantityPlaceholder: "PCS hoặc container",
        formMessagePlaceholder: "Kích thước (1200x800 / 1200x1000 / 600x800 / tùy chỉnh), chiều cao ván, nắp, góc nhựa, logo hoặc yêu cầu khác.",
        formSubmit: "Gửi RFQ pallet collar"
      },
      ko: {
        metaTitle: "목재 팔레트 칼라 PPWR 문서 | PAKSWELL",
        metaDescription: "제품·재료 데이터, 재사용·수리 정보와 구매자 검토용 주문별 PPWR 기술 문서를 제공하는 중국산 재사용 목재 팔레트 칼라.",
        ogTitle: "PPWR 문서가 있는 재사용 팔레트 칼라 | PAKSWELL",
        ogDescription: "제품·재료 데이터, 재사용·수리 정보 및 주문별 PPWR 기술 문서를 갖춘 접이식 목재 팔레트 칼라.",
        eyebrow: "재사용 운송 포장 | PPWR 문서 | FCL 수출",
        heroTitle: "PPWR 문서를 갖춘 재사용 목재 팔레트 칼라",
        heroCopy: "1200 × 800 × 195 mm 사양의 기술 파일에는 제품·재료 데이터, 재사용·수리 정보와 목재 부품에 대한 SGS PPWR 제5(4)조 근거가 포함됩니다. 최종 부품 범위와 선언 범위는 주문 승인 전에 확인합니다.",
        heroQuote: "팔레트 칼라 견적 요청",
        fact1: "40HQ 참고: 2,714 PCS",
        fact2: "MOQ: 1 컨테이너",
        fact3: "표준 및 맞춤 사이즈",
        fact4: "PPWR 기술 파일 제공",
        specsLabel: "제품 적합성",
        specsTitle: "주문별 PPWR 문서를 갖춘 재사용 팔레트 칼라",
        specsLead: "접이식 원목 팔레트 칼라는 패스너, 주조품 및 자동차 부품의 재사용 산업 포장 프로그램에 적합합니다. 제품별 PPWR 문서는 실제 공급 사양, 부품 근거, 수입 경로 및 용도에 따라 주문 승인 전에 검토합니다.",
        spec1Key: "사이즈",
        spec1Value: "1200 x 800 mm, 1200 x 1000 mm, 600 x 800 mm 및 맞춤 치수.",
        spec2Key: "구조",
        spec2Value: "아연도금 힌지가 있는 접이식 원목 보드. 합판 덮개와 플라스틱 코너 선택 가능.",
        spec3Key: "MOQ",
        spec3Value: "1 x FCL. 요청 시 팔레트, 뚜껑, 액세서리와 혼적 가능.",
        processLabel: "구매 절차",
        processTitle: "표준 또는 맞춤 칼라용 간단한 RFQ",
        step1Title: "포장 목표 공유",
        step1Copy: "화물, 사이즈, 높이, 수량, 목적지.",
        step2Title: "구성 확인",
        step2Copy: "힌지 옵션, 덮개, 플라스틱 코너, 혼적.",
        step3Title: "생산 준비",
        step3Copy: "재고품은 빠른 선적, 맞춤 사이즈는 먼저 확인.",
        step4Title: "수출 포장",
        step4Copy: "접기, 밴딩, 서류 준비, FCL 적재.",
        quoteLabel: "견적 요청",
        quoteTitle: "포장 프로젝트용 팔레트 칼라 가격 받기",
        quoteLead: "빠른 견적을 위해 팔레트 footprint, 칼라 높이, 세트당 층수, 수량, 도착 항구, 덮개/플라스틱 코너 필요 여부를 알려주세요.",
        emailCta: "이메일 보내기",
        emailSubject: "Pallet Collar Quote Request",
        formDestinationPlaceholder: "Laem Chabang, Cat Lai, Busan...",
        formQuantityPlaceholder: "PCS 또는 컨테이너",
        formMessagePlaceholder: "사이즈(1200x800 / 1200x1000 / 600x800 / 맞춤), 보드 높이, 덮개, 플라스틱 코너, 브랜딩 또는 기타 요구사항.",
        formSubmit: "팔레트 칼라 RFQ 보내기"
      },
      ja: {
        metaTitle: "木製パレットカラーPPWR書類 | PAKSWELL",
        metaDescription: "製品・材料データ、再使用・修理情報、購入者確認用の注文別PPWR技術文書を提供する中国製再使用木製パレットカラー。",
        ogTitle: "PPWR書類対応の再使用パレットカラー | PAKSWELL",
        ogDescription: "製品・材料データ、再使用・修理情報、注文別PPWR技術文書を備えた折りたたみ木製パレットカラー。",
        eyebrow: "再使用輸送包装 | PPWR書類 | FCL輸出",
        heroTitle: "PPWR書類対応の再使用木製パレットカラー",
        heroCopy: "1200 × 800 × 195 mm仕様の技術ファイルには、製品・材料データ、再使用・修理情報、木材部分に関するSGS PPWR第5(4)条の根拠が含まれます。最終的な部品範囲と宣言範囲は注文承認前に確認します。",
        heroQuote: "パレットカラー見積を依頼",
        fact1: "40HQ参考：2,714 PCS",
        fact2: "MOQ：1コンテナ",
        fact3: "標準・カスタムサイズ",
        fact4: "PPWR技術ファイル提供",
        specsLabel: "製品適合",
        specsTitle: "注文別PPWR書類を備えた再使用パレットカラー",
        specsLead: "折りたたみ式無垢材パレットカラーは、ファスナー、鋳造品、自動車部品向けの再使用産業梱包プログラムに適しています。製品別PPWR書類は、実際の供給仕様、部品根拠、輸入経路、用途に照らして注文承認前に確認します。",
        spec1Key: "サイズ",
        spec1Value: "1200 x 800 mm、1200 x 1000 mm、600 x 800 mm、カスタム寸法対応。",
        spec2Key: "構造",
        spec2Value: "亜鉛メッキヒンジ付き折りたたみ無垢材ボード。合板蓋とプラスチックコーナーはオプション。",
        spec3Key: "MOQ",
        spec3Value: "1 x FCL。ご要望によりパレット、蓋、アクセサリーとの混載も可能。",
        processLabel: "購入プロセス",
        processTitle: "標準またはカスタムカラーの簡単 RFQ",
        step1Title: "梱包目的を共有",
        step1Copy: "貨物、サイズ、高さ、数量、目的地。",
        step2Title: "仕様を確認",
        step2Copy: "ヒンジ、蓋、プラスチックコーナー、混載。",
        step3Title: "生産準備",
        step3Copy: "在庫品は迅速出荷、カスタムサイズは先に確認。",
        step4Title: "輸出梱包",
        step4Copy: "折りたたみ、結束、書類準備、FCL 積載。",
        quoteLabel: "見積依頼",
        quoteTitle: "梱包プロジェクト向けパレットカラー価格を取得",
        quoteLead: "迅速な見積のため、パレット寸法、カラー高さ、1セットの段数、数量、到着港、蓋やプラスチックコーナーの要否をお知らせください。",
        emailCta: "直接メール",
        emailSubject: "Pallet Collar Quote Request",
        formDestinationPlaceholder: "Laem Chabang, Cat Lai, Busan...",
        formQuantityPlaceholder: "PCSまたはコンテナ数",
        formMessagePlaceholder: "サイズ（1200x800 / 1200x1000 / 600x800 / カスタム）、板高さ、蓋、プラスチックコーナー、ロゴ、その他要件。",
        formSubmit: "パレットカラー RFQ を送信"
      }
    },
    "pallet-collar-hinges": {
      en: {
        metaTitle: "Galvanized Pallet Collar Hinges | Custom Stamping Supplier | PAKSWELL",
        metaDescription: "Galvanized pallet collar hinges from China. In-house automated stamping line, custom drawings welcome, 1.5M+ sets monthly capacity.",
        ogTitle: "Galvanized Pallet Collar Hinges | PAKSWELL",
        ogDescription: "In-house automated stamping line for pallet collar hinges and custom drawings.",
        eyebrow: "In-house stamping | Custom drawings welcome",
        heroTitle: "Galvanized Pallet Collar Hinges, 1.5M+ Sets Per Month",
        heroCopy: "Galvanized steel hinges and custom stamped hardware for foldable wooden packaging, produced on in-house stamping lines for repeat supply to pallet collar factories and hardware buyers.",
        heroQuote: "Request Hinge Quote",
        fact1: "1.5M+ sets/month",
        fact2: "Galvanized steel",
        fact3: "Custom hole patterns",
        fact4: "For pallet collar factories",
        specsLabel: "Product fit",
        specsTitle: "Standard hinges for pallet collar manufacturers",
        specsLead: "Galvanized steel hinges for foldable pallet collars, stamped on our in-house automated line at 1.5M+ sets per month. Custom drawings, finishes, and dimensions handled directly with the production team for repeat supply.",
        spec1Key: "Production",
        spec1Value: "In-house automated stamping line, 1.5M+ sets per month.",
        spec2Key: "Customization",
        spec2Value: "Custom drawings, hole patterns, dimensions, and finishes reviewed by the production team.",
        spec3Key: "Order basis",
        spec3Value: "MOQ and lead time confirmed once drawing, finish, and quantity are received.",
        processLabel: "Buying process",
        processTitle: "Make the hinge RFQ concrete",
        step1Title: "Send drawing or sample",
        step1Copy: "Dimensions, hole pattern, material.",
        step2Title: "Confirm finish and packing",
        step2Copy: "Galvanized, custom color, carton & pallet.",
        step3Title: "Quote batch production",
        step3Copy: "MOQ, lead time, tooling, price basis.",
        step4Title: "Ship repeat orders",
        step4Copy: "Approved spec produced on schedule.",
        quoteLabel: "Request a quote",
        quoteTitle: "Get hinge pricing from drawing, sample, or current spec",
        quoteLead: "For the fastest quote, include drawing, dimensions, material, finish, annual or monthly quantity, and target packing method.",
        emailCta: "Email Drawing",
        emailSubject: "Pallet Collar Hinge Quote Request",
        formQuantityLabel: "Estimated quantity *",
        formQuantityPlaceholder: "Pieces, sets, monthly volume...",
        formMessagePlaceholder: "Drawing available? Dimensions, hole pattern, finish (galvanized / custom color), destination, or anything else. Email drawings to mark.lee@pakswell.com after submitting.",
        formSubmit: "Send Hinge RFQ"
      },
      th: {
        metaTitle: "บานพับกรอบพาเลทชุบกัลวาไนซ์ | ผู้ผลิตปั๊มขึ้นรูป | PAKSWELL",
        metaDescription: "บานพับกรอบพาเลทชุบกัลวาไนซ์จากจีน มีไลน์ปั๊มอัตโนมัติภายใน รองรับแบบสั่งทำ กำลังผลิต 1.5M+ ชุด/เดือน",
        ogTitle: "บานพับกรอบพาเลทชุบกัลวาไนซ์ | PAKSWELL",
        ogDescription: "ไลน์ปั๊มอัตโนมัติภายในสำหรับบานพับกรอบพาเลทและงานสั่งทำตามแบบ",
        eyebrow: "ปั๊มขึ้นรูปในโรงงาน | รองรับแบบสั่งทำ",
        heroTitle: "บานพับกรอบพาเลทชุบกัลวาไนซ์ 1.5M+ ชุดต่อเดือน",
        heroCopy: "หน้าเฉพาะสำหรับผู้ซื้อที่ต้องการบานพับกรอบพาเลท อุปกรณ์ฮาร์ดแวร์ หรือชิ้นส่วนกัลวาไนซ์ปั๊มขึ้นรูปสำหรับบรรจุภัณฑ์ไม้พับได้",
        heroQuote: "ขอราคาบานพับ",
        fact1: "1.5M+ ชุด/เดือน",
        fact2: "เหล็กชุบกัลวาไนซ์",
        fact3: "ปรับรูตามแบบได้",
        fact4: "สำหรับโรงงานกรอบพาเลท",
        specsLabel: "เหมาะสำหรับ",
        specsTitle: "บานพับมาตรฐานสำหรับผู้ผลิตกรอบพาเลท",
        specsLead: "บานพับเหล็กกัลวาไนซ์สำหรับกรอบพาเลทพับได้ ผลิตด้วยไลน์ปั๊มอัตโนมัติภายใน กำลังผลิต 1.5M+ ชุด/เดือน รองรับแบบ ผิว และขนาดสั่งทำโดยตรงกับทีมผลิต",
        spec1Key: "การผลิต",
        spec1Value: "ไลน์ปั๊มอัตโนมัติภายใน 1.5M+ ชุดต่อเดือน",
        spec2Key: "การสั่งทำ",
        spec2Value: "ทีมผลิตตรวจแบบ รู ขนาด และผิวงานตามต้องการ",
        spec3Key: "เงื่อนไขสั่งซื้อ",
        spec3Value: "MOQ และเวลานำส่งยืนยันหลังได้รับแบบ ผิวงาน และจำนวน",
        processLabel: "ขั้นตอนสั่งซื้อ",
        processTitle: "ทำ RFQ บานพับให้ชัดเจน",
        step1Title: "ส่งแบบหรือชิ้นตัวอย่าง",
        step1Copy: "ขนาด รู วัสดุ",
        step2Title: "ยืนยันผิวและแพ็กกิ้ง",
        step2Copy: "กัลวาไนซ์ สีพิเศษ กล่องและพาเลท",
        step3Title: "เสนอราคาผลิตล็อต",
        step3Copy: "MOQ, lead time, tooling และราคา",
        step4Title: "ส่งคำสั่งซื้อซ้ำ",
        step4Copy: "ผลิตตามสเปกที่อนุมัติตามแผน",
        quoteLabel: "ขอใบเสนอราคา",
        quoteTitle: "รับราคาบานพับจากแบบ ตัวอย่าง หรือสเปกปัจจุบัน",
        quoteLead: "เพื่อเสนอราคาเร็ว โปรดส่งแบบ ขนาด วัสดุ ผิวงาน จำนวนรายเดือน/รายปี และวิธีแพ็กที่ต้องการ",
        emailCta: "ส่งแบบทางอีเมล",
        emailSubject: "Pallet Collar Hinge Quote Request",
        formQuantityLabel: "จำนวนโดยประมาณ *",
        formQuantityPlaceholder: "ชิ้น ชุด หรือปริมาณต่อเดือน...",
        formMessagePlaceholder: "มีแบบหรือไม่? ขนาด รู ผิวงาน (กัลวาไนซ์ / สีพิเศษ) ปลายทาง หรือข้อกำหนดอื่น ส่งแบบไปที่ mark.lee@pakswell.com หลังส่งฟอร์ม",
        formSubmit: "ส่ง RFQ บานพับ"
      },
      "zh-CN": {
        metaTitle: "镀锌围板箱铰链 | 定制冲压供应商 | PAKSWELL",
        metaDescription: "中国生产镀锌围板箱铰链。自有自动化冲压线，支持图纸定制，月产能 150万+ 套。",
        ogTitle: "镀锌围板箱铰链 | PAKSWELL",
        ogDescription: "自有自动化冲压线，生产围板箱铰链并支持图纸定制。",
        eyebrow: "自有冲压线 | 支持图纸定制",
        heroTitle: "镀锌围板箱铰链，月产 150万+ 套",
        heroCopy: "面向采购围板箱铰链、铰链五金或可折叠木包装定制镀锌冲压件的买家。",
        heroQuote: "获取铰链报价",
        fact1: "月产 150万+ 套",
        fact2: "镀锌钢材",
        fact3: "可定制孔位",
        fact4: "适合围板箱工厂",
        specsLabel: "产品匹配",
        specsTitle: "适合围板制造商的标准铰链",
        specsLead: "用于可折叠围板箱的镀锌钢铰链，由自有自动化冲压线生产，月产能 150万+ 套。图纸、表面处理和尺寸可直接与生产团队沟通，适合长期复购供应。",
        spec1Key: "生产",
        spec1Value: "自有自动化冲压线，月产能 150万+ 套。",
        spec2Key: "定制",
        spec2Value: "生产团队可评估定制图纸、孔位、尺寸和表面处理。",
        spec3Key: "订单基础",
        spec3Value: "收到图纸、表面处理和数量后确认起订量与交期。",
        processLabel: "采购流程",
        processTitle: "让铰链询价更具体",
        step1Title: "发送图纸或样品",
        step1Copy: "尺寸、孔位、材料。",
        step2Title: "确认表面处理和包装",
        step2Copy: "镀锌、定制颜色、纸箱和托盘。",
        step3Title: "批量生产报价",
        step3Copy: "起订量、交期、模具和价格基础。",
        step4Title: "安排复购发货",
        step4Copy: "按确认规格稳定生产。",
        quoteLabel: "申请报价",
        quoteTitle: "根据图纸、样品或现有规格获取铰链价格",
        quoteLead: "为了更快报价，请提供图纸、尺寸、材料、表面处理、月度或年度数量，以及目标包装方式。",
        emailCta: "发送图纸邮件",
        emailSubject: "Pallet Collar Hinge Quote Request",
        formQuantityLabel: "预计数量 *",
        formQuantityPlaceholder: "件数、套数或月用量...",
        formMessagePlaceholder: "是否有图纸？尺寸、孔位、表面处理（镀锌 / 定制颜色）、目的地或其他要求。提交后可将图纸发至 mark.lee@pakswell.com。",
        formSubmit: "发送铰链询价"
      },
      "zh-TW": {
        metaTitle: "鍍鋅圍板箱鉸鏈 | 客製沖壓供應商 | PAKSWELL",
        metaDescription: "中國生產鍍鋅圍板箱鉸鏈。自有自動化沖壓線，支援圖紙客製，月產能 150萬+ 套。",
        ogTitle: "鍍鋅圍板箱鉸鏈 | PAKSWELL",
        ogDescription: "自有自動化沖壓線，生產圍板箱鉸鏈並支援圖紙客製。",
        eyebrow: "自有沖壓線 | 支援圖紙客製",
        heroTitle: "鍍鋅圍板箱鉸鏈，月產 150萬+ 套",
        heroCopy: "面向採購圍板箱鉸鏈、鉸鏈五金或可折疊木包裝客製鍍鋅沖壓件的買家。",
        heroQuote: "取得鉸鏈報價",
        fact1: "月產 150萬+ 套",
        fact2: "鍍鋅鋼材",
        fact3: "可客製孔位",
        fact4: "適合圍板箱工廠",
        specsLabel: "產品適配",
        specsTitle: "適合圍板製造商的標準鉸鏈",
        specsLead: "用於可折疊圍板箱的鍍鋅鋼鉸鏈，由自有自動化沖壓線生產，月產能 150萬+ 套。圖紙、表面處理和尺寸可直接與生產團隊溝通，適合長期複購供應。",
        spec1Key: "生產",
        spec1Value: "自有自動化沖壓線，月產能 150萬+ 套。",
        spec2Key: "客製",
        spec2Value: "生產團隊可評估客製圖紙、孔位、尺寸和表面處理。",
        spec3Key: "訂單基礎",
        spec3Value: "收到圖紙、表面處理和數量後確認起訂量與交期。",
        processLabel: "採購流程",
        processTitle: "讓鉸鏈詢價更具體",
        step1Title: "發送圖紙或樣品",
        step1Copy: "尺寸、孔位、材料。",
        step2Title: "確認表面處理和包裝",
        step2Copy: "鍍鋅、客製顏色、紙箱和棧板。",
        step3Title: "批量生產報價",
        step3Copy: "起訂量、交期、模具和價格基礎。",
        step4Title: "安排複購出貨",
        step4Copy: "按確認規格穩定生產。",
        quoteLabel: "申請報價",
        quoteTitle: "依圖紙、樣品或現有規格取得鉸鏈價格",
        quoteLead: "為了更快報價，請提供圖紙、尺寸、材料、表面處理、月度或年度數量，以及目標包裝方式。",
        emailCta: "寄送圖紙郵件",
        emailSubject: "Pallet Collar Hinge Quote Request",
        formQuantityLabel: "預估數量 *",
        formQuantityPlaceholder: "件數、套數或月用量...",
        formMessagePlaceholder: "是否有圖紙？尺寸、孔位、表面處理（鍍鋅 / 客製顏色）、目的地或其他需求。提交後可將圖紙寄至 mark.lee@pakswell.com。",
        formSubmit: "送出鉸鏈詢價"
      },
      vi: {
        metaTitle: "Bản lề pallet collar mạ kẽm | Nhà cung cấp dập tùy chỉnh | PAKSWELL",
        metaDescription: "Bản lề pallet collar mạ kẽm từ Trung Quốc. Dây chuyền dập tự động nội bộ, nhận bản vẽ tùy chỉnh, năng lực 1.5M+ bộ/tháng.",
        ogTitle: "Bản lề pallet collar mạ kẽm | PAKSWELL",
        ogDescription: "Dây chuyền dập tự động nội bộ cho bản lề pallet collar và bản vẽ tùy chỉnh.",
        eyebrow: "Dập nội bộ | Nhận bản vẽ tùy chỉnh",
        heroTitle: "Bản lề pallet collar mạ kẽm, 1.5M+ bộ mỗi tháng",
        heroCopy: "Trang dành cho người mua tìm bản lề pallet collar, phụ kiện bản lề hoặc chi tiết dập mạ kẽm tùy chỉnh cho bao bì gỗ gấp gọn.",
        heroQuote: "Yêu cầu báo giá bản lề",
        fact1: "1.5M+ bộ/tháng",
        fact2: "Thép mạ kẽm",
        fact3: "Mẫu lỗ tùy chỉnh",
        fact4: "Cho nhà máy pallet collar",
        specsLabel: "Phù hợp sản phẩm",
        specsTitle: "Bản lề tiêu chuẩn cho nhà sản xuất pallet collar",
        specsLead: "Bản lề thép mạ kẽm cho pallet collar gấp gọn, dập trên dây chuyền tự động nội bộ với năng lực 1.5M+ bộ/tháng. Bản vẽ, hoàn thiện và kích thước được xử lý trực tiếp với đội sản xuất.",
        spec1Key: "Sản xuất",
        spec1Value: "Dây chuyền dập tự động nội bộ, 1.5M+ bộ mỗi tháng.",
        spec2Key: "Tùy chỉnh",
        spec2Value: "Đội sản xuất rà soát bản vẽ, mẫu lỗ, kích thước và hoàn thiện.",
        spec3Key: "Cơ sở đơn hàng",
        spec3Value: "MOQ và lead time được xác nhận sau khi nhận bản vẽ, hoàn thiện và số lượng.",
        processLabel: "Quy trình mua hàng",
        processTitle: "Làm rõ RFQ bản lề",
        step1Title: "Gửi bản vẽ hoặc mẫu",
        step1Copy: "Kích thước, mẫu lỗ, vật liệu.",
        step2Title: "Xác nhận hoàn thiện và đóng gói",
        step2Copy: "Mạ kẽm, màu tùy chỉnh, carton & pallet.",
        step3Title: "Báo giá sản xuất lô",
        step3Copy: "MOQ, lead time, tooling, cơ sở giá.",
        step4Title: "Giao đơn hàng lặp lại",
        step4Copy: "Sản xuất theo spec đã duyệt đúng kế hoạch.",
        quoteLabel: "Yêu cầu báo giá",
        quoteTitle: "Nhận giá bản lề từ bản vẽ, mẫu hoặc spec hiện tại",
        quoteLead: "Để báo giá nhanh, hãy gửi bản vẽ, kích thước, vật liệu, hoàn thiện, số lượng tháng/năm và phương án đóng gói.",
        emailCta: "Gửi bản vẽ qua email",
        emailSubject: "Pallet Collar Hinge Quote Request",
        formQuantityLabel: "Số lượng dự kiến *",
        formQuantityPlaceholder: "Chiếc, bộ, sản lượng tháng...",
        formMessagePlaceholder: "Có bản vẽ không? Kích thước, mẫu lỗ, hoàn thiện (mạ kẽm / màu tùy chỉnh), điểm đến hoặc yêu cầu khác. Gửi bản vẽ tới mark.lee@pakswell.com sau khi submit.",
        formSubmit: "Gửi RFQ bản lề"
      },
      ko: {
        metaTitle: "아연도금 팔레트 칼라 힌지 | 맞춤 스탬핑 공급업체 | PAKSWELL",
        metaDescription: "중국산 아연도금 팔레트 칼라 힌지. 자체 자동 스탬핑 라인, 맞춤 도면 가능, 월 1.5M+ 세트 생산능력.",
        ogTitle: "아연도금 팔레트 칼라 힌지 | PAKSWELL",
        ogDescription: "팔레트 칼라 힌지와 맞춤 도면용 자체 자동 스탬핑 라인.",
        eyebrow: "자체 스탬핑 | 맞춤 도면 가능",
        heroTitle: "아연도금 팔레트 칼라 힌지, 월 1.5M+ 세트",
        heroCopy: "팔레트 칼라 힌지, 힌지 하드웨어 또는 접이식 목재 포장용 맞춤 아연도금 스탬핑 부품을 찾는 바이어를 위한 페이지입니다.",
        heroQuote: "힌지 견적 요청",
        fact1: "월 1.5M+ 세트",
        fact2: "아연도금 강재",
        fact3: "맞춤 홀 패턴",
        fact4: "팔레트 칼라 공장용",
        specsLabel: "제품 적합성",
        specsTitle: "팔레트 칼라 제조사를 위한 표준 힌지",
        specsLead: "접이식 팔레트 칼라용 아연도금 강철 힌지로, 자체 자동 스탬핑 라인에서 월 1.5M+ 세트를 생산합니다. 맞춤 도면, 마감, 치수를 생산팀과 직접 검토하여 반복 공급에 적합합니다.",
        spec1Key: "생산",
        spec1Value: "자체 자동 스탬핑 라인, 월 1.5M+ 세트.",
        spec2Key: "맞춤",
        spec2Value: "생산팀이 도면, 홀 패턴, 치수, 마감을 검토합니다.",
        spec3Key: "주문 기준",
        spec3Value: "도면, 마감, 수량 수령 후 MOQ와 리드타임을 확인합니다.",
        processLabel: "구매 절차",
        processTitle: "힌지 RFQ를 구체화하기",
        step1Title: "도면 또는 샘플 발송",
        step1Copy: "치수, 홀 패턴, 소재.",
        step2Title: "마감과 포장 확인",
        step2Copy: "아연도금, 맞춤 컬러, 카톤 및 팔레트.",
        step3Title: "배치 생산 견적",
        step3Copy: "MOQ, 리드타임, 금형, 가격 기준.",
        step4Title: "반복 주문 선적",
        step4Copy: "승인된 사양으로 일정에 맞춰 생산.",
        quoteLabel: "견적 요청",
        quoteTitle: "도면, 샘플 또는 현재 사양 기준 힌지 가격 받기",
        quoteLead: "빠른 견적을 위해 도면, 치수, 소재, 마감, 월/연간 수량, 목표 포장 방식을 알려주세요.",
        emailCta: "도면 이메일 보내기",
        emailSubject: "Pallet Collar Hinge Quote Request",
        formQuantityLabel: "예상 수량 *",
        formQuantityPlaceholder: "개수, 세트, 월 사용량...",
        formMessagePlaceholder: "도면 보유 여부, 치수, 홀 패턴, 마감(아연도금 / 맞춤 컬러), 목적지 또는 기타 요구사항. 제출 후 mark.lee@pakswell.com 으로 도면을 보내주세요.",
        formSubmit: "힌지 RFQ 보내기"
      },
      ja: {
        metaTitle: "亜鉛メッキ パレットカラー用ヒンジ | カスタムプレス供給 | PAKSWELL",
        metaDescription: "中国製亜鉛メッキパレットカラー用ヒンジ。自社自動プレスライン、カスタム図面対応、月産1.5M+セット。",
        ogTitle: "亜鉛メッキ パレットカラー用ヒンジ | PAKSWELL",
        ogDescription: "パレットカラー用ヒンジとカスタム図面向けの自社自動プレスライン。",
        eyebrow: "自社プレス | カスタム図面対応",
        heroTitle: "亜鉛メッキ パレットカラー用ヒンジ、月産1.5M+セット",
        heroCopy: "パレットカラー用ヒンジ、ヒンジ金具、折りたたみ木製梱包向けカスタム亜鉛メッキプレス部品を調達するバイヤー向けのページです。",
        heroQuote: "ヒンジ見積を依頼",
        fact1: "月産1.5M+セット",
        fact2: "亜鉛メッキ鋼",
        fact3: "カスタム穴パターン",
        fact4: "パレットカラー工場向け",
        specsLabel: "製品適合",
        specsTitle: "パレットカラー製造業者向け標準ヒンジ",
        specsLead: "折りたたみパレットカラー用の亜鉛メッキ鋼ヒンジを、自社自動プレスラインで月産1.5M+セット生産。カスタム図面、仕上げ、寸法を生産チームと直接確認できます。",
        spec1Key: "生産",
        spec1Value: "自社自動プレスライン、月産1.5M+セット。",
        spec2Key: "カスタム",
        spec2Value: "生産チームが図面、穴パターン、寸法、仕上げを確認します。",
        spec3Key: "注文条件",
        spec3Value: "図面、仕上げ、数量を受領後、MOQ とリードタイムを確認します。",
        processLabel: "購入プロセス",
        processTitle: "ヒンジ RFQ を具体化",
        step1Title: "図面またはサンプルを送付",
        step1Copy: "寸法、穴パターン、材料。",
        step2Title: "仕上げと梱包を確認",
        step2Copy: "亜鉛メッキ、カスタム色、カートンとパレット。",
        step3Title: "量産見積",
        step3Copy: "MOQ、リードタイム、金型、価格条件。",
        step4Title: "リピート出荷",
        step4Copy: "承認仕様で計画通り生産。",
        quoteLabel: "見積依頼",
        quoteTitle: "図面、サンプル、現行仕様からヒンジ価格を取得",
        quoteLead: "迅速な見積のため、図面、寸法、材料、仕上げ、月間/年間数量、希望梱包方法をお知らせください。",
        emailCta: "図面をメール",
        emailSubject: "Pallet Collar Hinge Quote Request",
        formQuantityLabel: "予定数量 *",
        formQuantityPlaceholder: "個数、セット、月間数量...",
        formMessagePlaceholder: "図面の有無、寸法、穴パターン、仕上げ（亜鉛メッキ / カスタム色）、目的地、その他要件。送信後に図面を mark.lee@pakswell.com へお送りください。",
        formSubmit: "ヒンジ RFQ を送信"
      }
    }
  };

  function track(name, params) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, params || {});
  }

  function fireConversion(sendTo, params) {
    if (typeof window.gtag !== "function" || !sendTo) return;
    var payload = Object.assign({
      send_to: sendTo,
      value: 1.0,
      currency: "USD"
    }, params || {});
    window.gtag("event", "conversion", payload);
  }

  function isValidLang(lang) {
    return LANG_ORDER.indexOf(lang) !== -1;
  }

  function browserLang() {
    var languages = [];
    try { languages = (navigator.languages || [navigator.language || ""]).filter(Boolean); } catch (e) {}
    for (var i = 0; i < languages.length; i += 1) {
      var lang = String(languages[i]).toLowerCase();
      if (lang.indexOf("zh-tw") === 0 || lang.indexOf("zh-hk") === 0 || lang.indexOf("zh-mo") === 0) return "zh-TW";
      if (lang.indexOf("zh") === 0) return "zh-CN";
      if (lang.indexOf("th") === 0) return "th";
      if (lang.indexOf("vi") === 0) return "vi";
      if (lang.indexOf("ko") === 0) return "ko";
      if (lang.indexOf("ja") === 0) return "ja";
      if (lang.indexOf("en") === 0) return "en";
    }
    return "en";
  }

  function getProductKey() {
    return document.body.dataset.product || "epal-euro-pallets";
  }

  function getCopy(lang) {
    var product = getProductKey();
    var productCopy = PRODUCT_COPY[product] || PRODUCT_COPY["epal-euro-pallets"];
    return Object.assign({}, COMMON.en, productCopy.en || {}, COMMON[lang] || {}, productCopy[lang] || {});
  }

  function setText(selector, value) {
    var el = document.querySelector(selector);
    if (el && value) el.textContent = value;
  }

  function setHtml(selector, value) {
    var el = document.querySelector(selector);
    if (el && value) el.innerHTML = value;
  }

  function setPlaceholder(selector, value) {
    var el = document.querySelector(selector);
    if (el && value) el.setAttribute("placeholder", value);
  }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el && value) el.setAttribute("content", value);
  }

  function urlWithLang(base, lang) {
    var hash = "";
    var hashIndex = base.indexOf("#");
    if (hashIndex !== -1) {
      hash = base.slice(hashIndex);
      base = base.slice(0, hashIndex);
    }
    base = base.split("?")[0];
    return lang && lang !== "en" ? base + "?lang=" + encodeURIComponent(lang) + hash : base + hash;
  }

  function homeUrl(lang, hash) {
    return urlWithLang("https://www.pakswell.com/" + (hash || ""), lang);
  }

  function productUrl(product, lang) {
    return urlWithLang(PRODUCT_PATHS[product] || product, lang);
  }

  function updateLanguageLinks(lang, t) {
    var logo = document.querySelector(".logo");
    if (logo) logo.setAttribute("href", homeUrl(lang, ""));

    var productNav = document.querySelector(".nav-links a:nth-child(1)");
    var complianceNav = document.querySelector(".nav-links a:nth-child(2)");
    if (productNav) productNav.setAttribute("href", homeUrl(lang, "#products"));
    if (complianceNav) complianceNav.setAttribute("href", homeUrl(lang, "#compliance"));

    document.querySelectorAll(".footer-links a").forEach(function (link) {
      var href = link.getAttribute("href") || "";
      if (href.indexOf("epal-euro-pallets") !== -1) {
        link.textContent = t.productEpal;
        link.setAttribute("href", productUrl("epal-euro-pallets", lang));
      } else if (href.indexOf("pallet-collars") !== -1 && href.indexOf("pallet-collar-hinges") === -1) {
        link.textContent = t.productCollars;
        link.setAttribute("href", productUrl("pallet-collars", lang));
      } else if (href.indexOf("pallet-collar-hinges") !== -1) {
        link.textContent = t.productHinges;
        link.setAttribute("href", productUrl("pallet-collar-hinges", lang));
      } else {
        link.textContent = t.mainSite;
        link.setAttribute("href", homeUrl(lang, ""));
      }
    });
  }

  function updateCurrentUrl(lang) {
    if (!window.history || !window.history.replaceState) return;
    var url = new URL(window.location.href);
    if (lang && lang !== "en") {
      url.searchParams.set("lang", lang);
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  }

  function ensureHeaderLanguageSwitcher() {
    var nav = document.querySelector(".nav-links");
    var source = document.querySelector(".top-bar .lang-switcher");
    if (!nav || !source || document.querySelector(".nav-links .header-lang")) return;

    var clone = source.cloneNode(true);
    clone.classList.add("header-lang");
    var current = clone.querySelector("#current-lang");
    if (current) {
      current.removeAttribute("id");
      current.classList.add("current-lang");
    }
    nav.insertBefore(clone, nav.querySelector(".nav-cta") || null);
  }

  function updateLanguageSwitcher(lang, t) {
    document.querySelectorAll("#current-lang, .current-lang").forEach(function (el) {
      el.textContent = t.langShort;
    });
    document.querySelectorAll(".lang-option").forEach(function (btn) {
      var onclick = btn.getAttribute("onclick") || "";
      btn.classList.toggle("active", onclick.indexOf("'" + lang + "'") !== -1);
    });
    document.querySelectorAll(".lang-dropdown").forEach(function (dropdown) {
      dropdown.classList.remove("show");
    });
  }

  function updateFormLanguage(lang) {
    document.querySelectorAll("form[data-lead-form]").forEach(function (form) {
      var languageInput = form.querySelector('input[name="language"]');
      if (!languageInput) {
        languageInput = document.createElement("input");
        languageInput.type = "hidden";
        languageInput.name = "language";
        form.appendChild(languageInput);
      }
      languageInput.value = lang;
    });
  }

  function applyAdsLanguage(lang, options) {
    if (!isValidLang(lang)) lang = "en";
    options = options || {};
    var t = getCopy(lang);

    ensureHeaderLanguageSwitcher();

    document.documentElement.lang = lang;
    if (t.metaTitle) document.title = t.metaTitle;
    setMeta('meta[name="description"]', t.metaDescription);
    setMeta('meta[property="og:title"]', t.ogTitle || t.metaTitle);
    setMeta('meta[property="og:description"]', t.ogDescription || t.metaDescription);

    setText(".logo-tagline", t.logoTagline);
    setText(".top-bar-right > a[href='#quote']", t.topbarQuote);
    setText(".nav-links a:nth-child(1)", t.navProducts);
    setText(".nav-links a:nth-child(2)", t.navCompliance);
    setText(".nav-links a:nth-child(3)", t.navContact);
    setText(".section-jump-links a:nth-child(1)", t.navSpecs);
    setText(".section-jump-links a:nth-child(2)", t.navProcess);
    setText(".nav-cta", t.navCta);
    setText(".eyebrow", t.eyebrow);
    setText("h1", t.heroTitle);
    setText(".hero-copy", t.heroCopy);
    setText(".hero-actions .btn-primary", t.heroQuote);
    setText(".hero-actions .btn-ghost", t.whatsappSales);
    setText(".hero-facts span:nth-child(1)", t.fact1);
    setText(".hero-facts span:nth-child(2)", t.fact2);
    setText(".hero-facts span:nth-child(3)", t.fact3);
    setText(".hero-facts span:nth-child(4)", t.fact4);

    setText("#specs .label", t.specsLabel);
    setText("#specs h2", t.specsTitle);
    setText("#specs .section-lead", t.specsLead);
    setText("#specs .spec-row:nth-child(1) .spec-key", t.spec1Key);
    setText("#specs .spec-row:nth-child(1) .spec-value", t.spec1Value);
    setText("#specs .spec-row:nth-child(2) .spec-key", t.spec2Key);
    setText("#specs .spec-row:nth-child(2) .spec-value", t.spec2Value);
    setText("#specs .spec-row:nth-child(3) .spec-key", t.spec3Key);
    setText("#specs .spec-row:nth-child(3) .spec-value", t.spec3Value);

    setText("#process .label", t.processLabel);
    setText("#process h2", t.processTitle);
    setText("#process .step:nth-child(1) h3", t.step1Title);
    setText("#process .step:nth-child(1) p", t.step1Copy);
    setText("#process .step:nth-child(2) h3", t.step2Title);
    setText("#process .step:nth-child(2) p", t.step2Copy);
    setText("#process .step:nth-child(3) h3", t.step3Title);
    setText("#process .step:nth-child(3) p", t.step3Copy);
    setText("#process .step:nth-child(4) h3", t.step4Title);
    setText("#process .step:nth-child(4) p", t.step4Copy);

    setText("#quote .quote-copy .label", t.quoteLabel);
    setText("#quote .quote-copy h2", t.quoteTitle);
    setText("#quote .quote-copy .section-lead", t.quoteLead);
    setText(".quote-list li:nth-child(1)", t.salesContact + ": Mark Lee");
    setText(".quote-list li:nth-child(2)", t.email + ": mark.lee@pakswell.com");
    setText(".quote-list li:nth-child(3)", t.phone + ": +86 173 1778 8456");
    setText(".cta-actions .btn", t.emailCta);
    var emailLink = document.querySelector(".cta-actions .btn");
    if (emailLink && t.emailSubject) {
      emailLink.setAttribute("href", "mailto:mark.lee@pakswell.com?subject=" + encodeURIComponent(t.emailSubject));
    }

    setText('label[for="name"]', t.formName);
    setText('label[for="company"]', t.formCompany);
    setText('label[for="email"]', t.formEmail);
    setText('label[for="phone"]', t.formPhone);
    setText('label[for="destination"]', t.formDestination);
    setText('label[for="quantity"]', t.formQuantityLabel || t.formQuantity);
    setText('label[for="message"]', t.formOther);
    setPlaceholder("#destination", t.formDestinationPlaceholder);
    setPlaceholder("#quantity", t.formQuantityPlaceholder);
    setPlaceholder("#message", t.formMessagePlaceholder);
    setText('.lead-form button[type="submit"]', t.formSubmit);
    setHtml(".form-note", t.formNoteHtml);

    setText(".site-footer .footer-inner > span", t.footerText);
    setText(".sticky-mobile-cta a:nth-child(1)", t.mobileCall);
    setText(".sticky-mobile-cta a:nth-child(2)", t.mobileWhatsApp);
    setText(".sticky-mobile-cta a:nth-child(3)", t.mobileQuote);

    updateLanguageLinks(lang, t);
    updateLanguageSwitcher(lang, t);
    updateFormLanguage(lang);

    if (options.updateUrl !== false) updateCurrentUrl(lang);
    try { localStorage.setItem("pw_lang", lang); } catch (e) {}
  }

  function getInitialLang() {
    var urlLang = null;
    try { urlLang = new URLSearchParams(window.location.search).get("lang"); } catch (e) {}
    if (isValidLang(urlLang)) return urlLang;

    var savedLang = null;
    try { savedLang = localStorage.getItem("pw_lang"); } catch (e) {}
    if (isValidLang(savedLang)) return savedLang;

    return browserLang();
  }

  window.switchAdsLang = function (lang) {
    applyAdsLanguage(lang, { updateUrl: true });
  };

  window.toggleAdsLangMenu = function (event) {
    if (event) event.stopPropagation();
    var switcher = event && event.currentTarget ? event.currentTarget.closest(".lang-switcher") : null;
    var dropdown = switcher ? switcher.querySelector(".lang-dropdown") : document.querySelector(".lang-dropdown");
    document.querySelectorAll(".lang-dropdown").forEach(function (otherDropdown) {
      if (otherDropdown !== dropdown) otherDropdown.classList.remove("show");
    });
    if (dropdown) dropdown.classList.toggle("show");
  };

  document.addEventListener("click", function (event) {
    if (event.target.closest(".lang-switcher")) return;
    document.querySelectorAll(".lang-dropdown").forEach(function (dropdown) {
      dropdown.classList.remove("show");
    });
  });

  if (document.body.dataset.adsLanguage !== "off") {
    applyAdsLanguage(getInitialLang(), { updateUrl: false });
  } else {
    updateFormLanguage(document.documentElement.lang || "en");
  }

  document.querySelectorAll("[data-track]").forEach(function (el) {
    el.addEventListener("click", function () {
      var eventName = el.getAttribute("data-track");
      track(eventName, {
        product: el.getAttribute("data-product") || document.body.dataset.product || "unknown",
        page_path: window.location.pathname
      });
      if (eventName && eventName.indexOf("click_whatsapp") === 0 && typeof window.gtag === "function") {
        fireConversion(WHATSAPP_CONVERSION);
      }
    });
  });

  document.querySelectorAll("form[data-lead-form]").forEach(function (form) {
    form.dataset.loadedAt = String(Date.now());
    form.addEventListener("submit", function (event) {
      var product = form.getAttribute("data-product") || document.body.dataset.product || "unknown";
      var elapsed = Date.now() - Number(form.dataset.loadedAt || 0);
      var botcheck = form.querySelector('input[name="botcheck"]');
      if (elapsed < 2500 || (botcheck && botcheck.checked)) {
        event.preventDefault();
        return;
      }

      try {
        var lastSubmit = Number(window.localStorage.getItem("pw_last_submit") || 0);
        if (lastSubmit && Date.now() - lastSubmit < 30000) {
          event.preventDefault();
          return;
        }
        window.localStorage.setItem("pw_last_submit", String(Date.now()));
      } catch (e) {}

      if (window.PakswellAttribution) {
        window.PakswellAttribution.prepareLead(form, product);
      }
      track("lead_form_submit_attempt", {
        product: product,
        page_path: window.location.pathname
      });
    });
  });
})();
