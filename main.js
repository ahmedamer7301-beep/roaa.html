<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Roqa Boutique v6.0 | نظام إدارة المبيعات والعملاء</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

    <style>
        /* -----------------------------------------------------------------
        1. DESIGN SYSTEM & ROOT VARIABLES
        -----------------------------------------------------------------
        */
        :root {
            --brand-gold: #ec8a29;
            --brand-gold-dark: #d3761a;
            --brand-blue: #0a4eae;
            --brand-blue-dark: #073a82;
            --ui-dark: #121212;
            --ui-gray-900: #1a1a1a;
            --ui-gray-800: #2d2d2d;
            --ui-gray-500: #888888;
            --ui-gray-200: #e0e0e0;
            --ui-gray-100: #f8f8f8;
            --ui-white: #ffffff;
            --ui-danger: #ff4757;
            --ui-success: #2ed573;
            --font-main: 'Tajawal', sans-serif;
            --font-accent: 'Playfair Display', serif;
            --shadow-sm: 0 5px 15px rgba(0,0,0,0.05);
            --shadow-md: 0 10px 30px rgba(0,0,0,0.08);
            --shadow-lg: 0 20px 50px rgba(0,0,0,0.15);
            --glass-bg: rgba(255, 255, 255, 0.85);
            --spring: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            --smooth: all 0.3s ease;
        }

        /* إضافة: أنماط الوضع الليلي (Dark Mode) */
        body.dark-mode {
            --ui-gray-100: #0a0a0a;
            --ui-white: #1a1a1a;
            --ui-dark: #f8f8f8;
            --ui-gray-900: #ffffff;
            --ui-gray-800: #e0e0e0;
            --glass-bg: rgba(26, 26, 26, 0.9);
            background-color: #000;
        }
        body.dark-mode .product-card-v5, 
        body.dark-mode .control-bar, 
        body.dark-mode .panel-blade,
        body.dark-mode .checkout-view { background: #1a1a1a; color: white; }
        body.dark-mode .matrix-item { background: #333; color: #ccc; }
        body.dark-mode .matrix-item.active { background: var(--brand-gold); color: white; }
        body.dark-mode .input-luxury { background: #2d2d2d; color: white; border-color: #444; }

        * { box-sizing: border-box; -webkit-font-smoothing: antialiased; outline: none; }
        body {
            margin: 0; font-family: var(--font-main);
            background: var(--ui-gray-100); color: var(--ui-dark);
            overflow-x: hidden; line-height: 1.6; transition: background 0.3s ease;
        }
        h1, h2, h3, h4 { margin: 0; font-weight: 900; }
        a { text-decoration: none; color: inherit; transition: var(--smooth); }
        ul { list-style: none; padding: 0; margin: 0; }
        button { cursor: pointer; border: none; font-family: var(--font-main); background: none; }

        .main-header {
            position: fixed; top: 0; width: 100%; z-index: 2000;
            background: var(--glass-bg); backdrop-filter: blur(20px);
            height: 90px; display: flex; align-items: center; justify-content: space-between;
            padding: 0 6%; border-bottom: 1px solid rgba(0,0,0,0.05);
            transition: var(--smooth);
        }
        .main-header.scrolled { height: 70px; background: var(--ui-white); box-shadow: var(--shadow-md); }
        .brand-logo { font-size: 1.8rem; font-weight: 900; color: var(--brand-blue); display: flex; align-items: center; gap: 12px; }
        .brand-logo i { color: var(--brand-gold); transform: rotate(-15deg); }
        .brand-logo span { color: var(--brand-gold); }

        .nav-tools { display: flex; align-items: center; gap: 25px; }
        .tool-icon {
            font-size: 1.4rem; position: relative; color: var(--ui-dark);
            width: 45px; height: 45px; display: flex; align-items: center; justify-content: center;
            border-radius: 50%; transition: var(--spring);
        }
        .tool-icon:hover { background: var(--brand-gold); color: white; transform: scale(1.1); }
        .counter-badge {
            position: absolute; top: 0; right: 0; background: var(--ui-danger);
            color: white; font-size: 0.7rem; width: 20px; height: 20px;
            border-radius: 50%; display: flex; align-items: center; justify-content: center;
            font-weight: 800; border: 2px solid white;
        }

        .hero-platform {
            height: 100vh; position: relative; display: flex; align-items: center;
            justify-content: center; background: var(--ui-dark); overflow: hidden;
        }
        .hero-video-mock {
            position: absolute; width: 100%; height: 100%; object-fit: cover;
            opacity: 0.5; filter: grayscale(30%); transform: scale(1.1);
        }
        .hero-inner { position: relative; z-index: 10; text-align: center; max-width: 900px; color: white; padding: 20px; }
        .hero-title { font-size: clamp(3rem, 10vw, 6rem); line-height: 0.9; margin-bottom: 30px; font-family: var(--font-accent); }
        .hero-btn-group { display: flex; gap: 20px; justify-content: center; margin-top: 40px; }

        .btn-luxury {
            padding: 20px 50px; border-radius: 15px; font-weight: 800; font-size: 1.1rem;
            display: flex; align-items: center; gap: 15px; transition: var(--spring);
        }
        .btn-gold { background: var(--brand-gold); color: white; }
        .btn-gold:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(236,138,41,0.4); }

        .store-engine { max-width: 1440px; margin: -120px auto 100px; position: relative; z-index: 100; padding: 0 5%; }
        .control-bar {
            background: var(--ui-white); padding: 40px; border-radius: 30px;
            box-shadow: var(--shadow-lg); display: grid; grid-template-columns: 1.5fr 1fr; gap: 30px; margin-bottom: 60px;
        }
        @media (max-width: 992px) { .control-bar { grid-template-columns: 1fr; } }

        .search-orchestrator { position: relative; }
        .search-orchestrator i { position: absolute; right: 25px; top: 50%; transform: translateY(-50%); font-size: 1.2rem; color: var(--ui-gray-500); }
        .search-orchestrator input {
            width: 100%; padding: 20px 65px 20px 30px; border-radius: 18px;
            border: 2px solid var(--ui-gray-200); font-size: 1.1rem; transition: var(--smooth);
        }
        .search-orchestrator input:focus { border-color: var(--brand-blue); box-shadow: 0 0 0 8px rgba(10,78,174,0.05); }

        .category-matrix { display: flex; gap: 15px; overflow-x: auto; padding: 5px 0; scrollbar-width: none; }
        .matrix-item {
            background: var(--ui-gray-100); padding: 15px 35px; border-radius: 50px;
            white-space: nowrap; font-weight: 800; cursor: pointer; transition: var(--smooth);
            border: 2px solid transparent;
        }
        .matrix-item.active { background: var(--ui-dark); color: white; }

        .product-grid-system {
            display: grid; grid-template-columns: 1fr; gap: 40px;
        }
        @media (min-width: 768px) {
            .product-grid-system { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }
        }

        .product-card-v5 {
            background: var(--ui-white); border-radius: 30px; overflow: hidden;
            transition: var(--spring); position: relative; border: 1px solid rgba(0,0,0,0.02);
            display: flex; flex-direction: column;
        }
        .product-card-v5:hover { transform: translateY(-20px); box-shadow: var(--shadow-lg); }
        .card-visuals { position: relative; padding-top: 135%; overflow: hidden; }
        .card-visuals img {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            object-fit: cover; transition: transform 1.5s ease;
        }
        .product-card-v5:hover .card-visuals img { transform: scale(1.15); }

        .card-actions-overlay {
            position: absolute; bottom: 30px; left: 0; width: 100%; display: flex;
            justify-content: center; gap: 15px; transform: translateY(120%); transition: var(--smooth);
            opacity: 0; visibility: hidden;
        }
        .product-card-v5:hover .card-actions-overlay { transform: translateY(0); opacity: 1; visibility: visible; }

        .action-circle {
            width: 55px; height: 55px; border-radius: 50%; background: var(--ui-white);
            color: var(--ui-dark); display: flex; align-items: center; justify-content: center;
            font-size: 1.3rem; box-shadow: var(--shadow-md); transition: var(--spring);
        }
        .action-circle:hover { background: var(--brand-blue); color: white; transform: rotate(360deg) scale(1.1); }

        .card-content { padding: 30px; flex-grow: 1; display: flex; flex-direction: column; }
        .card-tag { font-size: 0.8rem; font-weight: 900; color: var(--brand-gold); margin-bottom: 10px; }
        .card-name { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: var(--ui-gray-900); }
        
        .card-price-engine { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
        .price-current { font-size: 1.7rem; font-weight: 900; color: var(--brand-blue); }
        .price-currency { font-size: 0.9rem; font-weight: 500; opacity: 0.6; margin-right: 5px; }

        .system-panel {
            position: fixed; top: 0; left: -110%; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); z-index: 3000; backdrop-filter: blur(10px);
            transition: 0.6s cubic-bezier(0.7, 0, 0.3, 1);
            visibility: hidden;
        }
        .system-panel.is-active { left: 0; visibility: visible; }
        
        .panel-blade {
            position: absolute; top: 0; left: 0; width: 550px; height: 100%;
            background: var(--ui-white); box-shadow: var(--shadow-lg);
            display: flex; flex-direction: column;
        }
        @media (max-width: 600px) { .panel-blade { width: 100%; } }

        .blade-header { padding: 40px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
        .blade-body { flex-grow: 1; overflow-y: auto; padding: 30px; }
        .blade-footer { padding: 40px; background: var(--ui-gray-100); }

        /* إضافة: أنماط الاقتراحات (Suggestions) */
        .suggestions-section { margin-top: 30px; border-top: 2px dashed #eee; padding-top: 20px; }
        .suggestion-grid { display: flex; gap: 15px; overflow-x: auto; padding: 10px 0; scrollbar-width: none; }
        .suggestion-card { min-width: 140px; background: var(--ui-gray-100); border-radius: 15px; padding: 10px; cursor: pointer; text-align: center; }
        .suggestion-card img { width: 100%; height: 100px; object-fit: cover; border-radius: 10px; }
        .suggestion-card h5 { margin: 8px 0 0; font-size: 0.8rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        /* إضافة: أنماط زر المشاركة */
        .share-tool-btn {
            background: #f1f1f1;
            padding: 10px 20px;
            border-radius: 12px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            color: var(--brand-blue);
            transition: var(--smooth);
        }
        .share-tool-btn:hover { background: var(--brand-blue); color: white; }

        .modal-body-content { padding: 20px; }
        .modal-info-box { background: var(--ui-gray-100); padding: 20px; border-radius: 20px; margin-top: 20px; }
        .info-row { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
        .info-row i { color: var(--brand-gold); font-size: 1.2rem; }

        .cart-node {
            display: flex; gap: 20px; margin-bottom: 25px; background: white;
            padding: 20px; border-radius: 20px; border: 1px solid #f0f0f0;
            animation: slideInLeft 0.5s ease;
        }
        .cart-node img { width: 110px; height: 110px; border-radius: 15px; object-fit: cover; }
        .quantity-shifter {
            display: flex; align-items: center; gap: 20px; background: var(--ui-gray-100);
            padding: 8px 20px; border-radius: 12px; margin-top: 15px; width: fit-content;
        }
        .shift-btn { font-weight: 900; color: var(--brand-blue); font-size: 1.2rem; }

        .checkout-view {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: var(--ui-white); z-index: 4000; display: none; padding: 80px 5%;
            overflow-y: auto;
        }
        .checkout-container { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 80px; max-width: 1400px; margin: 0 auto; }
        @media (max-width: 1100px) { .checkout-container { grid-template-columns: 1fr; } }

        .checkout-block { background: var(--ui-gray-100); padding: 50px; border-radius: 40px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 40px; }
        @media (max-width: 650px) { .form-grid { grid-template-columns: 1fr; } }

        .input-luxury {
            width: 100%; padding: 22px; border-radius: 18px; border: 2px solid #ddd;
            font-size: 1.1rem; transition: var(--smooth); background: white;
        }
        .input-luxury:focus { border-color: var(--brand-gold); }

        .bill-summary {
            background: var(--ui-dark); color: white; padding: 50px;
            border-radius: 40px; height: fit-content; position: sticky; top: 50px;
        }
        .bill-row { display: flex; justify-content: space-between; margin-bottom: 20px; opacity: 0.8; }
        .bill-total { border-top: 1px dashed rgba(255,255,255,0.2); padding-top: 30px; font-size: 2.2rem; font-weight: 900; color: var(--brand-gold); }

        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        
        .whatsapp-fixed {
            position: fixed; bottom: 40px; right: 40px; width: 80px; height: 80px;
            background: #25d366; color: white; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 3rem; z-index: 1500; box-shadow: 0 15px 40px rgba(37,211,102,0.4);
            animation: pulse-green 2s infinite;
        }

        @keyframes pulse-green {
            0% { box-shadow: 0 0 0 0 rgba(37,211,102, 0.7); }
            70% { box-shadow: 0 0 0 30px rgba(37,211,102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37,211,102, 0); }
        }

        .out-of-stock {
            filter: grayscale(1) !important;
            opacity: 0.6;
            cursor: not-allowed !important;
        }
        .out-of-stock-badge {
            position: absolute;
            top: 20px;
            left: 20px;
            background: #555;
            color: white;
            padding: 8px 15px;
            border-radius: 10px;
            font-weight: 900;
            z-index: 50;
        }
    </style>
</head>
<body>

    <header class="main-header" id="dynamicNav">
        <a href="#" class="brand-logo">
            <i class="fa-solid fa-crown"></i>
            Roqa <span>Boutique</span>
        </a>
        <div class="nav-tools">
            <a href="javascript:void(0)" class="tool-icon" onclick="StoreManager.toggleDarkMode()">
                <i class="fa-solid fa-moon" id="theme-icon"></i>
            </a>
            <a href="javascript:void(0)" class="tool-icon" onclick="StoreManager.openPanel('search')"><i class="fa-solid fa-magnifying-glass"></i></a>
            <a href="javascript:void(0)" class="tool-icon" onclick="StoreManager.openPanel('wishlist')">
                <i class="fa-regular fa-heart"></i>
                <span class="counter-badge" id="wish-count">0</span>
            </a>
            <a href="javascript:void(0)" class="tool-icon" onclick="StoreManager.openPanel('cart')">
                <i class="fa-solid fa-bag-shopping"></i>
                <span class="counter-badge" id="cart-count">0</span>
            </a>
        </div>
    </header>

    <section class="hero-platform">
        <img src="https://i.postimg.cc/dtHt2Z40/Whats-App-Image-2026-01-03-at-1-00-19-AM.jpg" class="hero-video-mock">
        <div class="hero-inner">
            <div class="animate__animated animate__fadeInDown">
                <span style="letter-spacing: 5px; text-transform: uppercase; font-weight: 800; color: var(--brand-gold);">You wish it i make it</span>
            </div>
            <h1 class="hero-title animate__animated animate__fadeInUp">فن الأناقة<br>في كل قطعة</h1>
            <p class="animate__animated animate__fadeInUp animate__delay-1s" style="font-size: 1.4rem; opacity: 0.8;">
                نجمع لكِ أرقى التصاميم العالمية من الإكسسوارات والنتائج المكتبية والهدايا الفاخرة لتناسب ذوقكِ .
            </p>
            <div class="hero-btn-group animate__animated animate__fadeInUp animate__delay-2s">
                <a href="#store-front" class="btn-luxury btn-gold">تسوقي المجموعة <i class="fa-solid fa-arrow-left"></i></a>
            </div>
        </div>
    </section>

    <main class="store-engine" id="store-front">
        <div class="control-bar">
            <div class="search-orchestrator">
                <i class="fa-solid fa-search"></i>
                <input type="text" id="masterSearch" placeholder="ابحثي عن قطعتكِ المميزة " onkeyup="StoreManager.handleDynamicSearch()">
            </div>
            <div class="category-matrix" id="categoryMatrix"></div>
        </div>
        <div class="product-grid-system" id="productInfector"></div>
    </main>

    <div class="system-panel" id="sidePanel" onclick="StoreManager.closePanel()">
        <div class="panel-blade" onclick="event.stopPropagation()">
            <div class="blade-header">
                <h2 id="bladeTitle">حقيبة المشتريات</h2>
                <button onclick="StoreManager.closePanel()"><i class="fa-solid fa-times fa-2x"></i></button>
            </div>
            <div class="blade-body" id="bladeBody"></div>
            <div class="blade-footer" id="bladeFooter">
                <div class="bill-row">
                    <span>إجمالي القيمة:</span>
                    <span id="panelSubtotal" style="font-weight: 900; font-size: 1.4rem;">0 ج.م</span>
                </div>
                <button class="btn-luxury btn-gold" style="width: 100%; justify-content: center;" onclick="StoreManager.launchCheckout()">
                    إتمام عملية الدفع <i class="fa-solid fa-credit-card"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="system-panel" id="productModal" onclick="StoreManager.closeProductModal()">
        <div class="panel-blade" onclick="event.stopPropagation()" style="width: 600px; left: 50%; transform: translateX(-50%); border-radius: 30px; height: fit-content; margin-top: 50px; max-height: 90vh;">
            <div class="blade-header">
                <h2 id="modalTitle">تفاصيل القطعة</h2>
                <button onclick="StoreManager.closeProductModal()"><i class="fa-solid fa-times fa-2x"></i></button>
            </div>
            <div class="blade-body" id="modalProductContent">
                </div>
            <div class="blade-footer">
                <button id="modalAddToCartBtn" class="btn-luxury btn-gold" style="width: 100%; justify-content: center;">
                    إضافة لحقيبة التسوق <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="checkout-view" id="checkoutView">
        <div class="checkout-container">
            <div class="checkout-main">
                <button onclick="StoreManager.closeCheckout()" style="font-weight: 800; margin-bottom: 30px;"><i class="fa-solid fa-chevron-right"></i> العودة للتسوق</button>
                <div class="checkout-block">
                    <h2><i class="fa-solid fa-truck-fast" style="color: var(--brand-gold);"></i> تفاصيل الشحن والتوصيل</h2>
                    <div class="form-grid">
                        <div class="input-group">
                            <label style="display:block; margin-bottom:10px; font-weight:700;">الاسم الثلاثي</label>
                            <input type="text" class="input-luxury" id="c_name" placeholder="الاسم بالكامل">
                        </div>
                        <div class="input-group">
                            <label style="display:block; margin-bottom:10px; font-weight:700;">رقم الواتساب</label>
                            <input type="tel" class="input-luxury" id="c_phone" placeholder="01xxxxxxxxx">
                        </div>
                        <div class="input-group">
                            <label style="display:block; margin-bottom:10px; font-weight:700;">المحافظة</label>
                            <select class="input-luxury" id="c_city" onchange="StoreManager.recalcOrder()">
                                <option value="50">القاهرة والجيزة (50 ج.م)</option>
                                <option value="60">الإسكندرية (60 ج.م)</option>
                                <option value="60">المنوفية (60 ج.م)</option>
                                <option value="80">الدلتا والقناة (80 ج.م)</option>
                                <option value="100">الصعيد (100 ج.م)</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label style="display:block; margin-bottom:10px; font-weight:700;">العنوان بالتفصيل</label>
                            <input type="text" class="input-luxury" id="c_address" placeholder="المنطقة، الشارع، رقم المنزل">
                        </div>
                    </div>

                    <div style="margin-top: 30px; padding-top: 25px; border-top: 1px dashed #ccc;">
                        <h4 style="margin-bottom:15px;">هل لديك كود خصم؟</h4>
                        <div style="display: flex; gap: 10px;">
                            <input type="text" id="coupon_code" class="input-luxury" placeholder="أدخل الكود هنا" style="padding: 15px;">
                            <button onclick="StoreManager.applyCoupon()" class="btn-luxury btn-gold" style="padding: 0 30px;">تطبيق</button>
                        </div>
                        <div id="coupon_message" style="margin-top: 10px; font-weight: 700;"></div>
                    </div>
                </div>
            </div>

            <div class="bill-summary">
                <h3 style="color: var(--brand-gold); margin-bottom: 30px;">ملخص الطلب</h3>
                <div id="checkoutItems" style="margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px;"></div>
                <div class="bill-row"><span>المنتجات:</span> <span id="summary_sub">0 ج.م</span></div>
                <div class="bill-row"><span>مصاريف الشحن:</span> <span id="summary_ship">0 ج.م</span></div>
                <div class="bill-row" id="discount_row" style="display: none; color: var(--ui-success);">
                    <span>الخصم:</span> <span id="summary_discount">0 ج.م</span>
                </div>
                <div class="bill-total">
                    <div style="font-size: 1rem; opacity: 0.6; margin-bottom: 5px;">الإجمالي الكلي</div>
                    <span id="summary_total">0</span> <small>ج.م</small>
                </div>
                <button class="btn-luxury btn-gold" style="width: 100%; margin-top: 40px; background: #25d366;" onclick="StoreManager.confirmViaWA()">
                    <i class="fa-brands fa-whatsapp"></i> تأكيد الطلب عبر واتساب
                </button>
            </div>
        </div>
    </div>

    <a href="https://wa.me/201106091519" class="whatsapp-fixed">
        <i class="fa-brands fa-whatsapp"></i>
    </a>

    <script>
        const COUPONS = {
            "ROQA10": 0.10,
            "OFF50": 50
        };

        const StoreManager = (() => {
            const DATABASE = [
                { 
                    id: 109, 
                    name: "نتيجه مكتبيه 2026", 
                    price: 290, 
                    category: "نتائج مكتب", 
                    img: "https://i.postimg.cc/W1XrmR64/IMG-20251224-WA0043.jpg",
                    materials: "ورق كوشيه فاخر 150 جرام، قاعدة خشب عالي الجوده",
                    size: "4 × 10 سم",
                    description: " ونتيجة مكتبية بتصميم راقي لعام 2026 تساعدك على تنظيم وقتك بأناقة.",
                    inStock: true 
                },
                { 
                    id: 110, 
                    name: "نوت بوك", 
                    price: 100, 
                    category: "اكسسوار", 
                    img: "https://i.postimg.cc/nrDkkqvd/1000058236.png",
                    materials: "جلد طبيعي، ورق كريمي",
                    size: "A5",
                    description: "دفتر ملاحظات فاخر للأفكار والإبداع اليومي.",
                    inStock: false 
                }
            ];

            let state = {
                cart: JSON.parse(localStorage.getItem('roqa_cart_v5')) || [],
                wishlist: JSON.parse(localStorage.getItem('roqa_wish_v5')) || [],
                activeCategory: 'الكل',
                searchQuery: '',
                activeCoupon: null,
                appliedDiscount: 0,
                isDarkMode: localStorage.getItem('roqa_dark_mode') === 'true'
            };

            const UIEngine = {
                renderProducts: (items) => {
                    const grid = document.getElementById('productInfector');
                    grid.innerHTML = items.map(p => `
                        <div class="product-card-v5 animate__animated animate__fadeInUp ${!p.inStock ? 'out-of-stock' : ''}">
                            ${!p.inStock ? '<div class="out-of-stock-badge">نفدت الكمية</div>' : ''}
                            <div class="card-visuals">
                                <img src="${p.img}" loading="lazy">
                                <div class="card-actions-overlay">
                                    <button class="action-circle" onclick="StoreManager.openProductModal(${p.id})">
                                        <i class="fa-solid fa-eye"></i>
                                    </button>
                                    <button class="action-circle" onclick="StoreManager.toggleWish(${p.id})">
                                        <i class="${state.wishlist.includes(p.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                                    </button>
                                    <button class="action-circle" ${p.inStock ? `onclick="StoreManager.addToCart(${p.id})"` : 'disabled'}>
                                        <i class="fa-solid fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-content">
                                <span class="card-tag">${p.category}</span>
                                <h3 class="card-name">${p.name}</h3>
                                <div class="card-price-engine">
                                    <div class="price-current">${p.price}<span class="price-currency">ج.م</span></div>
                                </div>
                            </div>
                        </div>
                    `).join('');
                },
                renderCategories: () => {
                    const container = document.getElementById('categoryMatrix');
                    const cats = ['الكل', ...new Set(DATABASE.map(p => p.category))];
                    container.innerHTML = cats.map(c => `
                        <div class="matrix-item ${state.activeCategory === c ? 'active' : ''}" onclick="StoreManager.setCategory('${c}')">${c}</div>
                    `).join('');
                },
                updateBadges: () => {
                    document.getElementById('cart-count').innerText = state.cart.reduce((a, b) => a + b.qty, 0);
                    document.getElementById('wish-count').innerText = state.wishlist.length;
                },
                renderCartItems: () => {
                    const body = document.getElementById('bladeBody');
                    if(state.cart.length === 0) {
                        body.innerHTML = '<p style="text-align:center; opacity:0.5; margin-top:50px;">السلة فارغة</p>';
                        document.getElementById('bladeFooter').style.display = 'none';
                        return;
                    }
                    document.getElementById('bladeFooter').style.display = 'block';
                    let subtotal = 0;
                    body.innerHTML = state.cart.map(item => {
                        subtotal += (item.price * item.qty);
                        return `
                            <div class="cart-node">
                                <img src="${item.img}">
                                <div style="flex-grow:1;">
                                    <div style="font-weight:800;">${item.name}</div>
                                    <div class="quantity-shifter">
                                        <button onclick="StoreManager.updateQty(${item.id}, -1)">-</button>
                                        <span>${item.qty}</span>
                                        <button onclick="StoreManager.updateQty(${item.id}, 1)">+</button>
                                    </div>
                                </div>
                                <button onclick="StoreManager.removeFromCart(${item.id})" style="color:red"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        `;
                    }).join('');
                    document.getElementById('panelSubtotal').innerText = subtotal + ' ج.م';
                }
            };

            return {
                init: () => {
                    if (state.isDarkMode) document.body.classList.add('dark-mode');
                    UIEngine.renderProducts(DATABASE);
                    UIEngine.renderCategories();
                    UIEngine.updateBadges();
                    window.addEventListener('scroll', () => {
                        document.getElementById('dynamicNav').classList.toggle('scrolled', window.scrollY > 100);
                    });
                },
                toggleDarkMode: () => {
                    state.isDarkMode = !state.isDarkMode;
                    document.body.classList.toggle('dark-mode');
                    localStorage.setItem('roqa_dark_mode', state.isDarkMode);
                    document.getElementById('theme-icon').className = state.isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
                },
                setCategory: (cat) => {
                    state.activeCategory = cat;
                    UIEngine.renderCategories();
                    StoreManager.filterEngine();
                },
                handleDynamicSearch: () => {
                    state.searchQuery = document.getElementById('masterSearch').value.toLowerCase();
                    StoreManager.filterEngine();
                },
                filterEngine: () => {
                    const results = DATABASE.filter(p => {
                        const matchCat = state.activeCategory === 'الكل' || p.category === state.activeCategory;
                        const matchSearch = p.name.toLowerCase().includes(state.searchQuery);
                        return matchCat && matchSearch;
                    });
                    UIEngine.renderProducts(results);
                },
                addToCart: (pid) => {
                    const product = DATABASE.find(p => p.id === pid);
                    if(!product.inStock) return;
                    const existing = state.cart.find(i => i.id === pid);
                    if(existing) existing.qty++;
                    else state.cart.push({...product, qty: 1});
                    StoreManager.persistAndSync();
                    StoreManager.openPanel('cart');
                },
                updateQty: (pid, delta) => {
                    const item = state.cart.find(i => i.id === pid);
                    item.qty += delta;
                    if(item.qty < 1) return StoreManager.removeFromCart(pid);
                    StoreManager.persistAndSync();
                    UIEngine.renderCartItems();
                    if(document.getElementById('checkoutView').style.display === 'block') StoreManager.recalcOrder();
                },
                removeFromCart: (pid) => {
                    state.cart = state.cart.filter(i => i.id !== pid);
                    StoreManager.persistAndSync();
                    UIEngine.renderCartItems();
                    if(document.getElementById('checkoutView').style.display === 'block') StoreManager.recalcOrder();
                },
                persistAndSync: () => {
                    localStorage.setItem('roqa_cart_v5', JSON.stringify(state.cart));
                    localStorage.setItem('roqa_wish_v5', JSON.stringify(state.wishlist));
                    UIEngine.updateBadges();
                },
                toggleWish: (pid) => {
                    if(state.wishlist.includes(pid)) state.wishlist = state.wishlist.filter(id => id !== pid);
                    else state.wishlist.push(pid);
                    StoreManager.persistAndSync();
                    StoreManager.filterEngine();
                },
                openPanel: (type) => {
                    document.getElementById('sidePanel').classList.add('is-active');
                    UIEngine.renderCartItems();
                },
                closePanel: () => document.getElementById('sidePanel').classList.remove('is-active'),
                
                openProductModal: (pid) => {
                    const p = DATABASE.find(i => i.id === pid);
                    if(!p) return;
                    
                    const suggestions = DATABASE.filter(item => item.category === p.category && item.id !== p.id);
                    
                    document.getElementById('modalTitle').innerText = p.name;
                    document.getElementById('modalProductContent').innerHTML = `
                        <div class="modal-body-content ${!p.inStock ? 'out-of-stock' : ''}">
                            <button class="share-tool-btn" onclick="StoreManager.shareProduct(${p.id})">
                                <i class="fa-solid fa-share-nodes"></i> مشاركة هذه القطعة
                            </button>

                            <img src="${p.img}" style="width:100%; height:250px; object-fit:cover; border-radius:20px; margin-bottom:20px;">
                            <p style="font-size:1.1rem; color:var(--ui-gray-800); margin-bottom:15px;">${p.description || 'لا يوجد وصف متاح.'}</p>
                            <div class="modal-info-box">
                                <div class="info-row"><i>•</i><span><strong>الخامات:</strong> ${p.materials}</span></div>
                                <div class="info-row"><i>•</i><span><strong>المقاسات:</strong> ${p.size}</span></div>
                            </div>
                            
                            ${suggestions.length > 0 ? `
                            <div class="suggestions-section">
                                <h4 style="margin-bottom:15px;">قطع قد تعجبكِ أيضاً:</h4>
                                <div class="suggestion-grid">
                                    ${suggestions.map(s => `
                                        <div class="suggestion-card" onclick="StoreManager.openProductModal(${s.id})">
                                            <img src="${s.img}">
                                            <h5>${s.name}</h5>
                                            <div style="color:var(--brand-blue); font-weight:800; font-size:0.8rem;">${s.price} ج.م</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>` : ''}
                        </div>`;
                    
                    const btn = document.getElementById('modalAddToCartBtn');
                    if(p.inStock) {
                        btn.disabled = false;
                        btn.style.opacity = "1";
                        btn.innerHTML = `إضافة لحقيبة التسوق <i class="fa-solid fa-cart-plus"></i>`;
                        btn.onclick = () => { StoreManager.addToCart(p.id); StoreManager.closeProductModal(); };
                    } else {
                        btn.disabled = true;
                        btn.style.opacity = "0.5";
                        btn.innerHTML = `المنتج غير متوفر حالياً`;
                    }
                    
                    document.getElementById('productModal').classList.add('is-active');
                },
                closeProductModal: () => document.getElementById('productModal').classList.remove('is-active'),

                /* وظيفة المشاركة الجديدة */
                shareProduct: (pid) => {
                    const p = DATABASE.find(x => x.id === pid);
                    if (navigator.share) {
                        navigator.share({
                            title: p.name,
                            text: `شوفي القطعة المميزة دي من Roqa Boutique: ${p.name}`,
                            url: window.location.href
                        }).catch(err => console.log('خطأ في المشاركة'));
                    } else {
                        // في حال كان المتصفح لا يدعم المشاركة الأصلية
                        const dummy = document.createElement('input');
                        document.body.appendChild(dummy);
                        dummy.value = window.location.href;
                        dummy.select();
                        document.execCommand('copy');
                        document.body.removeChild(dummy);
                        alert('تم نسخ رابط المتجر لمشاركته!');
                    }
                },
                
                launchCheckout: () => {
                    if(state.cart.length === 0) return alert('الحقيبة فارغة');
                    StoreManager.closePanel();
                    document.getElementById('checkoutView').style.display = 'block';
                    StoreManager.recalcOrder();
                },
                closeCheckout: () => document.getElementById('checkoutView').style.display = 'none',
                applyCoupon: () => {
                    const code = document.getElementById('coupon_code').value.toUpperCase();
                    if(COUPONS[code]) {
                        state.activeCoupon = code;
                        document.getElementById('coupon_message').innerText = "تم تطبيق الخصم!";
                        document.getElementById('coupon_message').style.color = "green";
                        StoreManager.recalcOrder();
                    } else {
                        alert("كود غير صحيح");
                    }
                },
                recalcOrder: () => {
                    const subtotal = state.cart.reduce((a, b) => a + (b.price * b.qty), 0);
                    const shipping = parseInt(document.getElementById('c_city').value);
                    let discount = 0;
                    if(state.activeCoupon) {
                        discount = COUPONS[state.activeCoupon] < 1 ? subtotal * COUPONS[state.activeCoupon] : COUPONS[state.activeCoupon];
                    }
                    document.getElementById('summary_sub').innerText = subtotal + ' ج.م';
                    document.getElementById('summary_ship').innerText = shipping + ' ج.م';
                    document.getElementById('summary_total').innerText = (subtotal + shipping - discount);
                    document.getElementById('checkoutItems').innerHTML = state.cart.map(i => `<div>${i.name} × ${i.qty}</div>`).join('');
                },
                confirmViaWA: () => {
                    const name = document.getElementById('c_name').value;
                    const phone = document.getElementById('c_phone').value;
                    if(!name || !phone) return alert("يرجى إكمال البيانات");
                    const itemsText = state.cart.map(i => `- ${i.name} (${i.qty})`).join('%0A');
                    const total = document.getElementById('summary_total').innerText;
                    window.open(`https://wa.me/201106091519?text=طلب جديد:%0Aالاسم: ${name}%0Aالمنتجات:%0A${itemsText}%0Aالاجمالي: ${total} ج.م`);
                }
            };
        })();

        StoreManager.init();
    </script>
</body>
</html>