(function () {
  "use strict";

  var SUPPORTED = ["en", "th", "zh-CN", "zh-TW", "vi", "ko", "ja"];

  var EPAL = {
    en: {
      cardBadge: "Real product reference", cardTitle: "Confirm the pallet, producer and route before PO", cardCopy: "Every quotation identifies the requested model, producing facility, treatment plan, loading port, trade term and document scope.", point3: "40HQ reference<br>600 pallets", point4: "MOQ<br>1 × FCL", officialVerify: "The formal quotation identifies the producing facility for the order and the applicable licence details for buyer verification.",
      spec4Key: "Treatment & documents", spec4Value: "ISPM 15 treatment, marking, phytosanitary and commercial document requirements are confirmed for the actual facility, route, and destination.", spec5Key: "Order & shipping", spec5Value: "MOQ usually starts from 1 FCL. Mixed loading can be reviewed. Loading route and EXW, FOB, CIF, DAP or DDP terms are discussed per inquiry.", spec6Key: "40HQ loading reference", spec6Value: "EPAL 1 (1200 × 800 mm): 600 pallets. Final quantity is confirmed against the packing method and order mix.",
      jumpSupplier: "China Supplier", jumpFaq: "FAQ", supplierLabel: "Why PAKSWELL", supplierTitle: "EPAL pallet supply built for export buyers", supplierLead: "Importers need more than a unit price: they need consistent models, clear documents and a reliable container loading plan.",
      cards: [["EPAL focus", "Standard EPAL pallet supply", "EPAL 1 and EPAL 3 are the core models for repeat FCL inquiries."], ["Documents", "Treatment and export paperwork", "Treatment, phytosanitary and commercial documents are confirmed for the actual facility and destination."], ["FCL export", "Container loading support", "Full-container and mixed-loading plans can include collars or accessories when space allows."]],
      faqLabel: "Buyer FAQ", faqTitle: "Buying EPAL pallets from China", faqLead: "Common questions from importers before requesting a formal quotation.",
      faqs: [["Can I buy EPAL pallets from China?", "Yes. PAKSWELL coordinates EPAL 1 and EPAL 3 supply for FCL export orders."], ["Are treatment documents available?", "Treatment, marking, phytosanitary and commercial documents are confirmed for the selected facility, route and destination."], ["What is needed for a quotation?", "Please provide the EPAL model, size, quantity, destination port and delivery timeline."], ["Can pallets and collars be loaded together?", "Yes. Mixed loading can be reviewed after the product mix and container plan are confirmed."]]
    },
    "zh-CN": {
      cardBadge: "实物参考", cardTitle: "下单前确认托盘、生产企业和运输路线", cardCopy: "正式报价会列明型号、生产企业、处理方案、装货港、贸易条款和文件范围。", point3: "40HQ参考<br>600张", point4: "起订量<br>1个整柜", officialVerify: "正式报价将列明本订单对应的生产企业及适用许可信息，供采购方核验。",
      spec4Key: "处理与文件", spec4Value: "ISPM 15处理、标记、植物检疫及商业文件要求，按实际生产企业、路线和目的地确认。", spec5Key: "订单与运输", spec5Value: "通常1个整柜起订，可评估混装；装货路线及EXW、FOB、CIF、DAP或DDP条款按询盘确认。", spec6Key: "40HQ参考装载量", spec6Value: "EPAL 1（1200 × 800 mm）：600张。最终数量按包装方式及是否混装确认。",
      jumpSupplier: "供应能力", jumpFaq: "常见问题", supplierLabel: "为什么选择PAKSWELL", supplierTitle: "面向出口买家的EPAL托盘供应", supplierLead: "进口商需要的不只是单价，还包括稳定型号、清晰文件和可靠的整柜装载方案。",
      cards: [["EPAL重点产品", "标准EPAL托盘供应", "EPAL 1和EPAL 3是整柜复购询盘的主要型号。"], ["出口文件", "处理与出口单证", "处理、植物检疫和商业文件按实际生产企业与目的地确认。"], ["整柜出口", "集装箱装载支持", "空间允许时，可评估与围板箱或配件混装。"]],
      faqLabel: "买家常见问题", faqTitle: "从中国采购EPAL托盘", faqLead: "进口商在索取正式报价前常见的问题。",
      faqs: [["可以从中国采购EPAL托盘吗？", "可以。PAKSWELL为整柜出口订单协调EPAL 1和EPAL 3托盘供应。"], ["可以提供处理文件吗？", "处理、标记、植物检疫和商业文件按所选生产企业、路线及目的地确认。"], ["报价需要哪些信息？", "请提供EPAL型号、尺寸、数量、目的港和交付时间。"], ["托盘可以与围板箱混装吗？", "可以。确认产品组合和装柜方案后评估混装。"]]
    },
    "zh-TW": {
      cardBadge: "實物參考", cardTitle: "下單前確認棧板、生產企業與運輸路線", cardCopy: "正式報價會列明型號、生產企業、處理方案、裝貨港、貿易條款與文件範圍。", point3: "40HQ參考<br>600片", point4: "起訂量<br>1個整櫃", officialVerify: "正式報價將列明本訂單對應的生產企業及適用許可資訊，供採購方核驗。",
      spec4Key: "處理與文件", spec4Value: "ISPM 15處理、標記、植物檢疫及商業文件要求，依實際生產企業、路線與目的地確認。", spec5Key: "訂單與運輸", spec5Value: "通常1個整櫃起訂，可評估混裝；裝貨路線及EXW、FOB、CIF、DAP或DDP條款依詢價確認。", spec6Key: "40HQ參考裝載量", spec6Value: "EPAL 1（1200 × 800 mm）：600片。最終數量依包裝方式及是否混裝確認。",
      jumpSupplier: "供應能力", jumpFaq: "常見問題", supplierLabel: "為何選擇PAKSWELL", supplierTitle: "面向出口買家的EPAL棧板供應", supplierLead: "進口商需要的不只是單價，還包括穩定型號、清楚文件與可靠的整櫃裝載方案。",
      cards: [["EPAL重點產品", "標準EPAL棧板供應", "EPAL 1與EPAL 3是整櫃複購詢價的主要型號。"], ["出口文件", "處理與出口單證", "處理、植物檢疫及商業文件依實際生產企業與目的地確認。"], ["整櫃出口", "貨櫃裝載支援", "空間允許時，可評估與圍板箱或配件混裝。"]],
      faqLabel: "買家常見問題", faqTitle: "從中國採購EPAL棧板", faqLead: "進口商在索取正式報價前常見的問題。",
      faqs: [["可以從中國採購EPAL棧板嗎？", "可以。PAKSWELL為整櫃出口訂單協調EPAL 1與EPAL 3棧板供應。"], ["可以提供處理文件嗎？", "處理、標記、植物檢疫與商業文件依所選生產企業、路線及目的地確認。"], ["報價需要哪些資訊？", "請提供EPAL型號、尺寸、數量、目的港與交付時間。"], ["棧板可以與圍板箱混裝嗎？", "可以。確認產品組合與裝櫃方案後評估混裝。"]]
    },
    th: {
      cardBadge: "ภาพสินค้าจริง", cardTitle: "ยืนยันรุ่น โรงงาน และเส้นทางก่อนออก PO", cardCopy: "ใบเสนอราคาจะระบุรุ่น โรงงาน แผนการอบ ท่าเรือ เงื่อนไขการค้า และขอบเขตเอกสาร", point3: "อ้างอิง 40HQ<br>600 พาเลท", point4: "MOQ<br>1 ตู้ FCL", officialVerify: "ใบเสนอราคาอย่างเป็นทางการจะระบุโรงงานผลิตที่ตรงกับคำสั่งซื้อและข้อมูลใบอนุญาตที่เกี่ยวข้อง เพื่อให้ผู้ซื้อใช้ตรวจสอบ",
      spec4Key: "การอบและเอกสาร", spec4Value: "ข้อกำหนด ISPM 15 เครื่องหมาย สุขอนามัยพืช และเอกสารการค้า ยืนยันตามโรงงาน เส้นทาง และปลายทางจริง", spec5Key: "คำสั่งซื้อและขนส่ง", spec5Value: "โดยทั่วไปเริ่มที่ 1 FCL และพิจารณาโหลดรวมได้ เส้นทางและเงื่อนไข EXW, FOB, CIF, DAP หรือ DDP ยืนยันตามคำขอ", spec6Key: "จำนวนบรรทุกอ้างอิง 40HQ", spec6Value: "EPAL 1 (1200 × 800 มม.): 600 พาเลท จำนวนสุดท้ายยืนยันตามวิธีบรรจุและรายการสินค้า",
      jumpSupplier: "การจัดหา", jumpFaq: "คำถาม", supplierLabel: "เหตุผลที่เลือก PAKSWELL", supplierTitle: "การจัดหาพาเลท EPAL สำหรับผู้ซื้อส่งออก", supplierLead: "ผู้นำเข้าต้องการมากกว่าราคาต่อชิ้น ทั้งรุ่นที่สม่ำเสมอ เอกสารชัดเจน และแผนโหลดตู้ที่เชื่อถือได้",
      cards: [["EPAL", "จัดหารุ่นมาตรฐาน", "EPAL 1 และ EPAL 3 เป็นรุ่นหลักสำหรับคำสั่งซื้อ FCL"], ["เอกสาร", "การอบและเอกสารส่งออก", "ยืนยันเอกสารตามโรงงานและปลายทางจริง"], ["FCL", "รองรับการโหลดตู้", "พิจารณาโหลดร่วมกับกรอบพาเลทหรืออุปกรณ์ได้"]],
      faqLabel: "คำถามผู้ซื้อ", faqTitle: "ซื้อพาเลท EPAL จากจีน", faqLead: "คำถามที่พบบ่อยก่อนขอใบเสนอราคา",
      faqs: [["ซื้อพาเลท EPAL จากจีนได้หรือไม่?", "ได้ PAKSWELL ประสานการจัดหา EPAL 1 และ EPAL 3 สำหรับคำสั่งซื้อ FCL"], ["มีเอกสารการอบหรือไม่?", "ยืนยันการอบ เครื่องหมาย สุขอนามัยพืช และเอกสารการค้าตามคำสั่งซื้อ"], ["ต้องใช้ข้อมูลอะไรเพื่อเสนอราคา?", "โปรดส่งรุ่น ขนาด จำนวน ท่าเรือปลายทาง และกำหนดเวลา"], ["โหลดร่วมกับกรอบพาเลทได้หรือไม่?", "ได้ หลังยืนยันรายการสินค้าและแผนโหลดตู้"]]
    },
    vi: {
      cardBadge: "Hình ảnh sản phẩm thực", cardTitle: "Xác nhận pallet, cơ sở và tuyến đường trước PO", cardCopy: "Báo giá chính thức nêu rõ mẫu, cơ sở sản xuất, xử lý, cảng xếp, điều kiện thương mại và chứng từ.", point3: "Tham khảo 40HQ<br>600 pallet", point4: "MOQ<br>1 FCL", officialVerify: "Báo giá chính thức sẽ nêu cơ sở sản xuất phù hợp với đơn hàng và thông tin giấy phép áp dụng để người mua xác minh.",
      spec4Key: "Xử lý & chứng từ", spec4Value: "Yêu cầu ISPM 15, dấu, kiểm dịch và chứng từ thương mại được xác nhận theo cơ sở, tuyến đường và điểm đến.", spec5Key: "Đơn hàng & vận chuyển", spec5Value: "MOQ thường từ 1 FCL; có thể xem xét hàng ghép. Tuyến xếp và điều kiện EXW, FOB, CIF, DAP hoặc DDP được xác nhận theo RFQ.", spec6Key: "Số lượng tham khảo 40HQ", spec6Value: "EPAL 1 (1200 × 800 mm): 600 pallet. Số lượng cuối cùng được xác nhận theo cách đóng gói và cơ cấu đơn hàng.",
      jumpSupplier: "Năng lực cung ứng", jumpFaq: "FAQ", supplierLabel: "Vì sao chọn PAKSWELL", supplierTitle: "Cung ứng pallet EPAL cho người mua xuất khẩu", supplierLead: "Nhà nhập khẩu cần mẫu ổn định, chứng từ rõ ràng và kế hoạch đóng container đáng tin cậy, không chỉ giá đơn vị.",
      cards: [["EPAL", "Cung ứng mẫu tiêu chuẩn", "EPAL 1 và EPAL 3 là các mẫu chính cho đơn FCL."], ["Chứng từ", "Xử lý và hồ sơ xuất khẩu", "Chứng từ được xác nhận theo cơ sở và điểm đến thực tế."], ["FCL", "Hỗ trợ đóng container", "Có thể xem xét ghép pallet collar hoặc phụ kiện."]],
      faqLabel: "FAQ người mua", faqTitle: "Mua pallet EPAL từ Trung Quốc", faqLead: "Các câu hỏi thường gặp trước khi yêu cầu báo giá.",
      faqs: [["Có thể mua pallet EPAL từ Trung Quốc?", "Có. PAKSWELL điều phối EPAL 1 và EPAL 3 cho đơn FCL."], ["Có chứng từ xử lý không?", "Xử lý, dấu, kiểm dịch và chứng từ thương mại được xác nhận theo đơn hàng."], ["Cần thông tin gì để báo giá?", "Vui lòng gửi mẫu, kích thước, số lượng, cảng đến và thời gian giao."], ["Có thể ghép pallet collar không?", "Có, sau khi xác nhận danh mục hàng và kế hoạch container."]]
    },
    ko: {
      cardBadge: "실물 제품 참고", cardTitle: "발주 전 팔레트·생산시설·운송경로 확인", cardCopy: "정식 견적서에 모델, 생산시설, 처리계획, 적재항, 거래조건과 서류 범위를 명시합니다.", point3: "40HQ 참고<br>600매", point4: "MOQ<br>1 FCL", officialVerify: "정식 견적서에 주문에 해당하는 생산시설과 적용 라이선스 정보를 명시하여 구매자가 확인할 수 있도록 합니다.",
      spec4Key: "처리 및 서류", spec4Value: "ISPM 15 처리, 마킹, 식물위생 및 상업서류 요건은 실제 시설, 경로와 목적지에 따라 확인합니다.", spec5Key: "주문 및 운송", spec5Value: "MOQ는 보통 1 FCL이며 혼적 검토가 가능합니다. 적재 경로와 EXW, FOB, CIF, DAP, DDP 조건은 문의별로 확인합니다.", spec6Key: "40HQ 적재 참고 수량", spec6Value: "EPAL 1(1200 × 800 mm): 600매. 최종 수량은 포장 방식과 혼적 구성에 따라 확인합니다.",
      jumpSupplier: "공급 역량", jumpFaq: "FAQ", supplierLabel: "PAKSWELL을 선택하는 이유", supplierTitle: "수출 구매자를 위한 EPAL 팔레트 공급", supplierLead: "수입업체에는 단가뿐 아니라 일관된 모델, 명확한 서류와 안정적인 컨테이너 계획이 필요합니다.",
      cards: [["EPAL", "표준 모델 공급", "EPAL 1과 EPAL 3가 FCL 반복 주문의 핵심 모델입니다."], ["서류", "처리 및 수출서류", "실제 시설과 목적지에 맞춰 서류를 확인합니다."], ["FCL", "컨테이너 적재 지원", "팔레트 칼라 또는 부속품 혼적을 검토할 수 있습니다."]],
      faqLabel: "구매자 FAQ", faqTitle: "중국에서 EPAL 팔레트 구매", faqLead: "정식 견적 전 수입업체의 일반적인 질문입니다.",
      faqs: [["중국에서 EPAL 팔레트를 구매할 수 있나요?", "예. PAKSWELL은 FCL 주문용 EPAL 1과 EPAL 3 공급을 조정합니다."], ["처리 서류를 제공하나요?", "처리, 마킹, 식물위생 및 상업서류는 주문별로 확인합니다."], ["견적에 필요한 정보는?", "모델, 크기, 수량, 도착항과 납기를 알려주세요."], ["팔레트 칼라와 혼적할 수 있나요?", "예. 제품 구성과 적재 계획 확인 후 검토합니다."]]
    },
    ja: {
      cardBadge: "実物製品参考", cardTitle: "発注前にパレット・生産施設・輸送ルートを確認", cardCopy: "正式見積にモデル、生産施設、処理計画、積出港、取引条件、書類範囲を明記します。", point3: "40HQ参考<br>600枚", point4: "MOQ<br>1 FCL", officialVerify: "正式見積には、注文に対応する生産施設と適用ライセンス情報を明記し、購入者が確認できるようにします。",
      spec4Key: "処理・書類", spec4Value: "ISPM 15処理、マーキング、植物検疫、商業書類の要件を実際の施設・ルート・仕向地ごとに確認します。", spec5Key: "注文・輸送", spec5Value: "通常1 FCLから。混載も検討可能です。積載ルートとEXW、FOB、CIF、DAP、DDP条件は案件ごとに確認します。", spec6Key: "40HQ積載参考数量", spec6Value: "EPAL 1（1200 × 800 mm）：600枚。最終数量は梱包方法と混載構成に応じて確認します。",
      jumpSupplier: "供給体制", jumpFaq: "FAQ", supplierLabel: "PAKSWELLを選ぶ理由", supplierTitle: "輸出バイヤー向けEPALパレット供給", supplierLead: "輸入者には単価だけでなく、安定したモデル、明確な書類、確実なコンテナ計画が必要です。",
      cards: [["EPAL", "標準モデル供給", "EPAL 1とEPAL 3がFCL継続注文の主要モデルです。"], ["書類", "処理・輸出書類", "実際の施設と仕向地に合わせて書類を確認します。"], ["FCL", "コンテナ積載支援", "パレットカラーや付属品との混載を検討できます。"]],
      faqLabel: "バイヤーFAQ", faqTitle: "中国からEPALパレットを購入", faqLead: "正式見積の前によく寄せられる質問です。",
      faqs: [["中国からEPALパレットを購入できますか？", "はい。PAKSWELLはFCL注文向けEPAL 1とEPAL 3の供給を調整します。"], ["処理書類はありますか？", "処理、マーキング、植物検疫、商業書類を注文ごとに確認します。"], ["見積に必要な情報は？", "モデル、寸法、数量、到着港、納期をお知らせください。"], ["パレットカラーと混載できますか？", "はい。製品構成と積載計画の確認後に検討します。"]]
    }
  };

  var COLLAR = {
    en: { badge: "Real warehouse reference", title: "Build the collar set around your pallet and cargo", copy: "Share the footprint, board height, layers per set, quantity, destination and optional accessories.", p1: "1200 × 800<br>standard", p2: "1200 × 1000<br>standard", p3: "600 × 800<br>half pallet", p4: "4 / 6 hinges<br>custom options", spec4Key: "Order basis", spec4Value: "MOQ: 1 x FCL. Mixed loading with pallets, lids, hinges and accessories can be reviewed after the product mix is confirmed.", spec5Key: "Trade terms", spec5Value: "EXW, FOB, CIF, DAP and DDP can be discussed. Loading port, lead time and container quantity are confirmed in the formal quotation.", spec6Key: "40HQ loading reference", spec6Value: "1200 × 800 mm pallet collars: 2,714 sets. Final quantity is confirmed against the packing method and order mix." },
    "zh-CN": { badge: "仓库实拍", title: "根据托盘和货物配置整套围板", copy: "请提供托盘尺寸、板高、每套层数、数量、目的地和所需配件。", p1: "1200 × 800<br>标准规格", p2: "1200 × 1000<br>标准规格", p3: "600 × 800<br>半托规格", p4: "4 / 6铰链<br>可定制", spec4Key: "订单基础", spec4Value: "起订量：1个整柜。确认产品组合后，可评估与托盘、盖板、铰链和配件混装。", spec5Key: "贸易条款", spec5Value: "可讨论EXW、FOB、CIF、DAP和DDP；装货港、交期及装柜数量在正式报价中确认。", spec6Key: "40HQ参考装载量", spec6Value: "1200 × 800 mm围板：2,714副。最终数量按包装方式及是否混装确认。" },
    "zh-TW": { badge: "倉庫實拍", title: "依棧板與貨物配置整套圍板", copy: "請提供棧板尺寸、板高、每套層數、數量、目的地與所需配件。", p1: "1200 × 800<br>標準規格", p2: "1200 × 1000<br>標準規格", p3: "600 × 800<br>半棧板", p4: "4 / 6鉸鏈<br>可客製", spec4Key: "訂單基礎", spec4Value: "起訂量：1個整櫃。確認產品組合後，可評估與棧板、蓋板、鉸鏈及配件混裝。", spec5Key: "貿易條款", spec5Value: "可討論EXW、FOB、CIF、DAP與DDP；裝貨港、交期及裝櫃數量在正式報價中確認。", spec6Key: "40HQ參考裝載量", spec6Value: "1200 × 800 mm圍板：2,714組。最終數量依包裝方式及是否混裝確認。" },
    th: { badge: "ภาพคลังสินค้าจริง", title: "จัดชุดกรอบให้เหมาะกับพาเลทและสินค้า", copy: "แจ้งขนาดพาเลท ความสูง จำนวนชั้น ปริมาณ ปลายทาง และอุปกรณ์เสริม", p1: "1200 × 800<br>มาตรฐาน", p2: "1200 × 1000<br>มาตรฐาน", p3: "600 × 800<br>ครึ่งพาเลท", p4: "4 / 6 บานพับ<br>สั่งทำได้", spec4Key: "เงื่อนไขคำสั่งซื้อ", spec4Value: "MOQ 1 FCL และพิจารณาโหลดร่วมกับพาเลท ฝา บานพับ และอุปกรณ์ได้", spec5Key: "เงื่อนไขการค้า", spec5Value: "รองรับ EXW, FOB, CIF, DAP และ DDP โดยยืนยันท่าเรือ ระยะเวลา และจำนวนในใบเสนอราคา", spec6Key: "จำนวนบรรทุกอ้างอิง 40HQ", spec6Value: "กรอบพาเลท 1200 × 800 มม.: 2,714 ชุด จำนวนสุดท้ายยืนยันตามวิธีบรรจุและรายการสินค้า" },
    vi: { badge: "Hình ảnh kho thực tế", title: "Cấu hình bộ collar theo pallet và hàng hóa", copy: "Gửi kích thước pallet, chiều cao ván, số lớp, số lượng, điểm đến và phụ kiện.", p1: "1200 × 800<br>tiêu chuẩn", p2: "1200 × 1000<br>tiêu chuẩn", p3: "600 × 800<br>nửa pallet", p4: "4 / 6 bản lề<br>tùy chỉnh", spec4Key: "Cơ sở đơn hàng", spec4Value: "MOQ 1 FCL; có thể xem xét ghép pallet, nắp, bản lề và phụ kiện.", spec5Key: "Điều kiện thương mại", spec5Value: "Có thể thảo luận EXW, FOB, CIF, DAP và DDP; cảng xếp, lead time và số lượng được xác nhận trong báo giá.", spec6Key: "Số lượng tham khảo 40HQ", spec6Value: "Pallet collar 1200 × 800 mm: 2.714 bộ. Số lượng cuối cùng được xác nhận theo cách đóng gói và cơ cấu đơn hàng." },
    ko: { badge: "실제 창고 사진", title: "팔레트와 화물에 맞는 칼라 세트 구성", copy: "팔레트 규격, 보드 높이, 층수, 수량, 목적지와 부속품을 알려주세요.", p1: "1200 × 800<br>표준", p2: "1200 × 1000<br>표준", p3: "600 × 800<br>하프 팔레트", p4: "4 / 6 힌지<br>맞춤 가능", spec4Key: "주문 기준", spec4Value: "MOQ 1 FCL. 팔레트, 뚜껑, 힌지, 부속품 혼적을 검토할 수 있습니다.", spec5Key: "거래 조건", spec5Value: "EXW, FOB, CIF, DAP, DDP를 협의하며 적재항, 납기와 수량은 정식 견적에서 확인합니다.", spec6Key: "40HQ 적재 참고 수량", spec6Value: "1200 × 800 mm 팔레트 칼라: 2,714세트. 최종 수량은 포장 방식과 혼적 구성에 따라 확인합니다." },
    ja: { badge: "実際の倉庫写真", title: "パレットと貨物に合わせてカラーセットを構成", copy: "パレット寸法、板高さ、段数、数量、仕向地、付属品をお知らせください。", p1: "1200 × 800<br>標準", p2: "1200 × 1000<br>標準", p3: "600 × 800<br>ハーフ", p4: "4 / 6ヒンジ<br>カスタム可", spec4Key: "注文条件", spec4Value: "MOQ 1 FCL。パレット、蓋、ヒンジ、付属品との混載を検討できます。", spec5Key: "取引条件", spec5Value: "EXW、FOB、CIF、DAP、DDPを協議し、積出港、納期、数量を正式見積で確認します。", spec6Key: "40HQ積載参考数量", spec6Value: "1200 × 800 mmパレットカラー：2,714セット。最終数量は梱包方法と混載構成に応じて確認します。" }
  };

  function langFromPage() {
    var value = null;
    try { value = new URLSearchParams(window.location.search).get("lang"); } catch (e) {}
    if (SUPPORTED.indexOf(value) !== -1) return value;
    var htmlLang = document.documentElement.lang;
    return SUPPORTED.indexOf(htmlLang) !== -1 ? htmlLang : "en";
  }

  function text(selector, value) {
    var el = document.querySelector(selector);
    if (el && value) el.textContent = value;
  }

  function html(selector, value) {
    var el = document.querySelector(selector);
    if (el && value) el.innerHTML = value;
  }

  function applyEpal(lang) {
    var t = EPAL[lang] || EPAL.en;
    text(".hero-product-badge", t.cardBadge);
    text(".hero-product-body strong", t.cardTitle);
    text(".hero-product-body > p", t.cardCopy);
    html(".hero-product-points span:nth-child(3)", t.point3);
    html(".hero-product-points span:nth-child(4)", t.point4);
    text("#specs .spec-row:nth-child(4) .spec-key", t.spec4Key);
    text("#specs .spec-row:nth-child(4) .spec-value", t.spec4Value);
    text("#specs .spec-row:nth-child(5) .spec-key", t.spec5Key);
    text("#specs .spec-row:nth-child(5) .spec-value", t.spec5Value);
    text("#specs .spec-row:nth-child(6) .spec-key", t.spec6Key);
    text("#specs .spec-row:nth-child(6) .spec-value", t.spec6Value);
    text(".official-verify", t.officialVerify);
    text(".section-jump-links a:nth-child(3)", t.jumpSupplier);
    text(".section-jump-links a:nth-child(4)", t.jumpFaq);
    text("#supplier .label", t.supplierLabel);
    text("#supplier h2", t.supplierTitle);
    text("#supplier .section-lead", t.supplierLead);
    t.cards.forEach(function (card, i) {
      var n = i + 1;
      text("#supplier .card:nth-child(" + n + ") .card-kicker", card[0]);
      text("#supplier .card:nth-child(" + n + ") h3", card[1]);
      text("#supplier .card:nth-child(" + n + ") p", card[2]);
    });
    text("#faq .label", t.faqLabel);
    text("#faq h2", t.faqTitle);
    text("#faq .section-lead", t.faqLead);
    t.faqs.forEach(function (faq, i) {
      var n = i + 1;
      text("#faq .faq-item:nth-child(" + n + ") summary", faq[0]);
      text("#faq .faq-item:nth-child(" + n + ") p", faq[1]);
    });
  }

  function applyCollar(lang) {
    var t = COLLAR[lang] || COLLAR.en;
    text(".hero-product-badge", t.badge);
    text(".hero-product-body strong", t.title);
    text(".hero-product-body > p", t.copy);
    html(".hero-product-points span:nth-child(1)", t.p1);
    html(".hero-product-points span:nth-child(2)", t.p2);
    html(".hero-product-points span:nth-child(3)", t.p3);
    html(".hero-product-points span:nth-child(4)", t.p4);
    text("#specs .spec-row:nth-child(4) .spec-key", t.spec4Key);
    text("#specs .spec-row:nth-child(4) .spec-value", t.spec4Value);
    text("#specs .spec-row:nth-child(5) .spec-key", t.spec5Key);
    text("#specs .spec-row:nth-child(5) .spec-value", t.spec5Value);
    text("#specs .spec-row:nth-child(6) .spec-key", t.spec6Key);
    text("#specs .spec-row:nth-child(6) .spec-value", t.spec6Value);
  }

  function applyExtra(lang) {
    var product = document.body.dataset.product;
    if (product === "epal-euro-pallets") applyEpal(lang);
    if (product === "pallet-collars") applyCollar(lang);
    var privacy = document.querySelector(".form-note a");
    if (privacy) privacy.href = lang === "en" ? "https://www.pakswell.com/privacy" : "https://www.pakswell.com/privacy?lang=" + encodeURIComponent(lang);
  }

  var originalSwitch = window.switchAdsLang;
  window.switchAdsLang = function (lang) {
    if (typeof originalSwitch === "function") originalSwitch(lang);
    applyExtra(lang);
    if (window.PakswellConsent) window.PakswellConsent.refreshLanguage();
  };

  applyExtra(langFromPage());
})();
