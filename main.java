<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roqa Boutique | روكا بوتيك</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #d4a373;
            --secondary-color: #1d3557;
            --bg-light: #fefae0;
            --white: #ffffff;
            --text-dark: #2d3436;
            --shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        * { box-sizing: border-box; font-family: 'Tajawal', sans-serif; scroll-behavior: smooth; }
        body { margin: 0; background-color: var(--bg-light); color: var(--text-dark); line-height: 1.6; padding-bottom: 50px; }

        header {
            background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
            color: white; padding: 60px 20px; text-align: center;
            border-bottom-left-radius: 50px; border-bottom-right-radius: 50px;
            box-shadow: var(--shadow);
        }

        header h1 { margin: 0; font-size: 2.5rem; letter-spacing: 2px; }
        header p { margin-top: 10px; opacity: 0.9; font-weight: 300; }

        .container { max-width: 1100px; margin: -30px auto 40px; padding: 0 15px; }

        /* Search & Categories */
        .search-bar {
            background: var(--white); padding: 5px; border-radius: 15px;
            box-shadow: var(--shadow); margin-bottom: 25px; display: flex;
        }
        .search-bar input { flex: 1; padding: 12px 20px; border: none; outline: none; font-size: 1rem; border-radius: 15px; }

        .categories {
            display: flex; justify-content: center; gap: 8px;
            margin-bottom: 25px; overflow-x: auto; padding: 10px 5px;
            scrollbar-width: none;
        }
        .cat-btn {
            background: var(--white); border: 1px solid #eee; padding: 10px 22px;
            border-radius: 25px; cursor: pointer; font-weight: bold;
            transition: 0.3s; white-space: nowrap; box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .cat-btn.active { background: var(--secondary-color); color: white; border-color: var(--secondary-color); }

        /* Products Grid */
        .products-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
        @media (min-width: 768px) { .products-grid { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 25px; } }

        .product-card {
            background: var(--white); border-radius: 20px; overflow: hidden;
            box-shadow: var(--shadow); transition: 0.3s; border: 1px solid rgba(0,0,0,0.02);
            display: flex; flex-direction: column; height: 100%;
        }
        .product-card:hover { transform: translateY(-8px); }

        .image-container { position: relative; height: 180px; width: 100%; cursor: zoom-in; overflow: hidden; background: #f9f9f9; }
        @media (min-width: 768px) { .image-container { height: 250px; } }
        .product-image { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .product-card:hover .product-image { transform: scale(1.1); }
        
        .product-info { padding: 15px; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .product-title { font-size: 0.95rem; font-weight: bold; margin-bottom: 5px; color: var(--secondary-color); height: 2.8em; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
        .product-price { color: var(--primary-color); font-size: 1.1rem; font-weight: 800; margin-bottom: 12px; }

        .add-btn {
            background: var(--secondary-color); color: white; border: none; padding: 12px;
            border-radius: 12px; cursor: pointer; width: 100%; font-weight: bold; transition: 0.3s;
        }
        .add-btn:active { transform: scale(0.95); }

        /* Cart Section */
        .cart-section {
            background: var(--white); border-radius: 25px; padding: 25px;
            margin-top: 50px; box-shadow: var(--shadow); border: 2px solid var(--secondary-color);
        }
        .cart-item { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #eee; }
        .qty-controls { display: flex; align-items: center; gap: 10px; }
        .qty-btn { background: var(--secondary-color); color: white; border: none; width: 32px; height: 32px; border-radius: 8px; cursor: pointer; }

        /* Totals */
        .totals-area { margin-top: 20px; background: #f9f9f9; padding: 15px; border-radius: 15px; }
        .total-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 1.1rem; }
        .total-row.grand-total { border-top: 2px dashed #ddd; padding-top: 10px; font-size: 1.4rem; font-weight: bold; color: var(--secondary-color); }

        /* Form */
        .order-form { display: grid; gap: 12px; margin-top: 25px; }
        .order-form input, .order-form select, .order-form textarea { 
            padding: 14px; border: 1px solid #ddd; border-radius: 12px; font-size: 1rem; width: 100%; 
        }

        .whatsapp-btn {
            background: #25d366; color: white; border: none; padding: 18px;
            border-radius: 12px; font-size: 1.1rem; font-weight: bold; cursor: pointer;
            transition: 0.3s; margin-top: 10px;
        }
        .whatsapp-btn:hover { background: #128c7e; }

        /* Modal & Toast */
        .modal {
            display: none; position: fixed; z-index: 9999; left: 0; top: 0;
            width: 100%; height: 100%; background: rgba(0,0,0,0.9);
            justify-content: center; align-items: center;
        }
        .modal-content { max-width: 90%; max-height: 80vh; border-radius: 15px; }
        .close-modal { position: absolute; top: 20px; left: 20px; color: white; font-size: 40px; cursor: pointer; }

        .toast {
            position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
            background: var(--secondary-color); color: white;
            padding: 12px 30px; border-radius: 50px; display: none; z-index: 10000;
        }
    </style>
</head>
<body>

    <header>
        <h1>Roqa Boutique</h1>
        <p>الأناقة التي تليق بكِ ✨</p>
    </header>

    <div class="container">
        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="ابحثي عن منتجك المفضل..." onkeyup="filterProducts()">
        </div>

        <div class="categories">
            <button class="cat-btn active" onclick="filterCategory('الكل', this)">الكل</button>
            <button class="cat-btn" onclick="filterCategory('نتائج', this)">نتائج مكتب</button>
            <button class="cat-btn" onclick="filterCategory('هدايا', this)">هدايا</button>
            <button class="cat-btn" onclick="filterCategory('إكسسوارات', this)">إكسسوارات</button>
        </div>

        <div class="products-grid" id="products-container"></div>

        <div class="cart-section" id="cart">
            <h2>🛒 سلة التسوق</h2>
            <div id="cart-items-container">
                <p style="text-align: center; color: #888;">السلة فارغة..</p>
            </div>
            
            <div class="totals-area">
                <div class="total-row">
                    <span>ثمن المنتجات:</span>
                    <span><span id="sub-total">0</span> ج.م</span>
                </div>
                <div class="total-row">
                    <span>مصاريف الشحن:</span>
                    <span><span id="shipping-cost">0</span> ج.م</span>
                </div>
                <div class="total-row grand-total">
                    <span>الإجمالي النهائي:</span>
                    <span><span id="final-total">0</span> ج.م</span>
                </div>
            </div>

            <div class="order-form">
                <h3>🚚 بيانات التوصيل</h3>
                <input type="text" id="customer-name" placeholder="الاسم بالكامل">
                
                <select id="customer-city" onchange="updateUI()">
                    <option value="" data-price="0">-- اختر المحافظة --</option>
                    <option value="القاهرة" data-price="50">القاهرة (50 ج.م)</option>
                    <option value="الجيزة" data-price="50">الجيزة (50 ج.م)</option>
                    <option value="الإسكندرية" data-price="60">الإسكندرية (60 ج.م)</option>
                    <option value="القليوبية" data-price="55">القليوبية (55 ج.م)</option>
                    <option value="الدقهلية" data-price="65">الدقهلية (65 ج.م)</option>
                    <option value="المنوفية" data-price="60">المنوفية (60 ج.م)</option>
                    <option value="البحيرة" data-price="65">البحيرة (65 ج.م)</option>
                    <option value="الشرقية" data-price="65">الشرقية (65 ج.م)</option>
                    <option value="الغربية" data-price="65">الغربية (65 ج.م)</option>
                    <option value="مدن القناة" data-price="70">مدن القناة (70 ج.م)</option>
                    <option value="صعيد مصر 1" data-price="80">المنيا / بني سويف (80 ج.م)</option>
                    <option value="صعيد مصر 2" data-price="95">أسيوط / سوهاج / قنا (95 ج.م)</option>
                    <option value="الأقصر وأسوان" data-price="110">الأقصر وأسوان (110 ج.م)</option>
                </select>

                <input type="text" id="customer-address" placeholder="العنوان بالتفصيل (المنطقة - الشارع - رقم المنزل)">
                <textarea id="customer-note" rows="2" placeholder="ملاحظات إضافية؟"></textarea>
                
                <button class="whatsapp-btn" onclick="sendToWhatsapp()">
                    إرسال الطلب عبر الواتساب
                </button>
            </div>
        </div>
    </div>

    <div id="galleryModal" class="modal">
        <span class="close-modal" onclick="closeGallery()">&times;</span>
        <img class="modal-content" id="modalImage">
    </div>

    <div id="toast" class="toast">تمت الإضافة للسلة بنجاح ✨</div>

    <script>
        // قاعدة بيانات المنتجات
        const products = [
            { id: 1, name: "نتيجة مكتب مودرن 2025", price: 850, category: "نتائج", images: ["https://i.postimg.cc/W1XrmR64/IMG-20251224-WA0043.jpg"] },
            { id: 4, name: "نوت بوك فاخر مطرز", price: 240, category: "نتائج", images: ["https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400"] },
            { id: 5, name: "بوكس هدايا مفاجآت", price: 450, category: "هدايا", images: ["https://images.unsplash.com/photo-1549465220-1d8c9d9c6703?w=400"] },
            { id: 6, name: "سلسال رقيق ذهبي", price: 180, category: "إكسسوارات", images: ["https://images.unsplash.com/photo-1535633302703-9420414421ee?w=400"] }
        ];

        let cart = JSON.parse(localStorage.getItem('roqa_cart')) || {};

        function renderProducts(data = products) {
            const container = document.getElementById('products-container');
            if(data.length === 0) {
                container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">لا توجد منتجات مطابقة للبحث.</p>';
                return;
            }
            container.innerHTML = data.map(p => `
                <div class="product-card">
                    <div class="image-container" onclick="openGallery('${p.images[0]}')">
                        <img src="${p.images[0]}" class="product-image" loading="lazy">
                    </div>
                    <div class="product-info">
                        <span class="product-title">${p.name}</span>
                        <div class="product-price">${p.price} ج.م</div>
                        <button class="add-btn" onclick="addToCart(${p.id})">أضف للسلة</button>
                    </div>
                </div>
            `).join('');
        }

        function filterCategory(cat, btn) {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(cat === 'الكل' ? products : products.filter(p => p.category === cat));
        }

        function filterProducts() {
            const term = document.getElementById('searchInput').value.toLowerCase();
            renderProducts(products.filter(p => p.name.toLowerCase().includes(term)));
        }

        function addToCart(id) {
            const p = products.find(x => x.id === id);
            cart[id] = cart[id] ? { ...cart[id], qty: cart[id].qty + 1 } : { ...p, qty: 1 };
            saveAndUpdate();
            showToast();
        }

        function changeQty(id, delta) {
            if (cart[id]) {
                cart[id].qty += delta;
                if (cart[id].qty <= 0) delete cart[id];
                saveAndUpdate();
            }
        }

        function saveAndUpdate() {
            localStorage.setItem('roqa_cart', JSON.stringify(cart));
            updateUI();
        }

        function updateUI() {
            const container = document.getElementById('cart-items-container');
            const items = Object.values(cart);
            let subtotal = 0;

            if (items.length === 0) {
                container.innerHTML = '<p style="text-align: center; color: #888;">السلة فارغة..</p>';
            } else {
                container.innerHTML = items.map(i => {
                    subtotal += i.price * i.qty;
                    return `
                        <div class="cart-item">
                            <div><strong>${i.name}</strong><br><small>${i.price} ج.م</small></div>
                            <div class="qty-controls">
                                <button class="qty-btn" onclick="changeQty(${i.id},-1)">-</button>
                                <span>${i.qty}</span>
                                <button class="qty-btn" onclick="changeQty(${i.id},1)">+</button>
                            </div>
                        </div>`;
                }).join('');
            }

            const citySelect = document.getElementById('customer-city');
            const shipping = parseInt(citySelect.options[citySelect.selectedIndex].getAttribute('data-price')) || 0;
            
            document.getElementById('sub-total').innerText = subtotal;
            document.getElementById('shipping-cost').innerText = shipping;
            document.getElementById('final-total').innerText = subtotal + shipping;
        }

        function sendToWhatsapp() {
            const name = document.getElementById('customer-name').value;
            const city = document.getElementById('customer-city').value;
            const addr = document.getElementById('customer-address').value;
            const items = Object.values(cart);

            if (!name || !city || !addr || items.length === 0) {
                alert("يرجى إكمال البيانات واختيار منتج واحد على الأقل.");
                return;
            }

            let msg = `*طلب جديد من Roqa Boutique*%0A%0A`;
            msg += `👤 *الاسم:* ${name}%0A📍 *المحافظة:* ${city}%0A🏠 *العنوان:* ${addr}%0A%0A🛒 *المنتجات:*%0A`;
            items.forEach(i => msg += `• ${i.name} (×${i.qty})%0A`);
            msg += `%0A💵 *المنتجات:* ${document.getElementById('sub-total').innerText} ج.م`;
            msg += `%0A🚚 *الشحن:* ${document.getElementById('shipping-cost').innerText} ج.م`;
            msg += `%0A💰 *الإجمالي النهائي:* ${document.getElementById('final-total').innerText} ج.م`;

            window.open(`https://wa.me/201066178604?text=${msg}`, '_blank');
            
            // تصفير السلة بعد الطلب
            cart = {};
            saveAndUpdate();
        }

        function showToast() {
            const t = document.getElementById('toast');
            t.style.display = 'block';
            setTimeout(() => t.style.display = 'none', 2000);
        }

        function openGallery(url) {
            document.getElementById('modalImage').src = url;
            document.getElementById('galleryModal').style.display = 'flex';
        }

        function closeGallery() { document.getElementById('galleryModal').style.display = 'none'; }

        // تهيئة المتجر
        renderProducts();
        updateUI();
    </script>
</body>
</html>