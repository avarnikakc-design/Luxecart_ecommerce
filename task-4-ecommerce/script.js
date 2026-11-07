// Product Catalog provided via FakeStoreAPI JSON structure
const products = [
    {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png","rating":{"rate":3.9,"count":120}},
    {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png","rating":{"rate":4.1,"count":259}},
    {"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping...","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png","rating":{"rate":4.7,"count":500}},
    {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png","rating":{"rate":2.1,"count":430}},
    {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png","rating":{"rate":4.6,"count":400}},
    {"id":6,"title":"Solid Gold Petite Micropave ","price":168,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png","rating":{"rate":3.9,"count":70}},
    {"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png","rating":{"rate":3,"count":400}},
    {"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png","rating":{"rate":1.9,"count":100}},
    {"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity","category":"electronics","image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png","rating":{"rate":3.3,"count":203}},
    {"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response","category":"electronics","image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png","rating":{"rate":2.9,"count":470}},
    {"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png","rating":{"rate":4.8,"count":319}},
    {"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy setup","category":"electronics","image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png","rating":{"rate":4.8,"count":400}},
    {"id":13,"title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","price":599,"description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology.","category":"electronics","image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png","rating":{"rate":2.9,"count":250}},
    {"id":14,"title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor – Super Ultrawide Screen QLED ","price":999.99,"description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side","category":"electronics","image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png","rating":{"rate":2.2,"count":140}},
    {"id":15,"title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats","price":56.99,"description":"Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece.","category":"women's clothing","image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png","rating":{"rate":2.6,"count":235}},
    {"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"Faux leather material for style and comfort / 2 pockets of front","category":"women's clothing","image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png","rating":{"rate":2.9,"count":340}},
    {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png","rating":{"rate":3.8,"count":679}},
    {"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Lightweight fabric with great stretch","category":"women's clothing","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png","rating":{"rate":4.7,"count":130}},
    {"id":19,"title":"Opna Women's Short Sleeve Moisture","price":7.95,"description":"100% cationic polyester interlock, Lightweight, roomy and highly breathable","category":"women's clothing","image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png","rating":{"rate":4.5,"count":146}},
    {"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print","category":"women's clothing","image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png","rating":{"rate":3.6,"count":145}}
];

let cart = JSON.parse(localStorage.getItem('luxecart_items')) || [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');

const cartToggle = document.getElementById('cart-toggle');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountBadge = document.getElementById('cart-count');

const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTaxEl = document.getElementById('cart-tax');
const cartShippingEl = document.getElementById('cart-shipping');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

const checkoutModal = document.getElementById('checkout-modal');
const closeModalBtn = document.getElementById('close-modal');

let activeCategory = 'all';

// Render Products Grid
function renderProducts(items) {
    productGrid.innerHTML = '';
    if (items.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b;">No products match your query.</p>`;
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="img-wrapper">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-category">${product.category}</div>
            <div class="product-title">${product.title}</div>
            <div class="rating-badge">
                <i class="fa-solid fa-star"></i> ${product.rating.rate} (${product.rating.count})
            </div>
            <div class="card-bottom">
                <span class="price">$${product.price.toFixed(2)}</span>
                <button class="add-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Filter and Search Handler
function filterProducts() {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = products.filter(p => {
        const matchesCategory = (activeCategory === 'all' || p.category === activeCategory);
        const matchesSearch = p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });
    renderProducts(filtered);
}

// Cart Management Functions
window.addToCart = function(productId) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        const product = products.find(p => p.id === productId);
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    openCartDrawer();
};

window.updateQty = function(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    updateCartUI();
};

function updateCartUI() {
    localStorage.setItem('luxecart_items', JSON.stringify(cart));

    // Badge count
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadge.textContent = totalCount;

    // Cart Items List
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; color: #94a3b8; margin-top: 2rem;">Your cart is empty.</p>`;
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    // Calculations
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const shipping = subtotal > 0 ? 10.00 : 0;
    const total = subtotal + tax + shipping;

    cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    cartTaxEl.textContent = `$${tax.toFixed(2)}`;
    cartShippingEl.textContent = `$${shipping.toFixed(2)}`;
    cartTotalEl.textContent = `$${total.toFixed(2)}`;

    checkoutBtn.disabled = cart.length === 0;
}

// Drawer Toggle Logic
function openCartDrawer() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('active');
}

function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('active');
}

cartToggle.addEventListener('click', openCartDrawer);
closeCart.addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);

// Category Filter Buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-category');
        filterProducts();
    });
});

searchInput.addEventListener('input', filterProducts);

// Checkout Handling
checkoutBtn.addEventListener('click', () => {
    closeCartDrawer();
    cart = [];
    updateCartUI();
    checkoutModal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

// Initial Setup
renderProducts(products);
updateCartUI();