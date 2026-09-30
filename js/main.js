document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS Animation
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: false, offset: 120 });
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
    }

    let swiperInstance = null;

   document.addEventListener('DOMContentLoaded', () => {
    // 1. AOS Initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: false, offset: 120 });
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
    }

    let swiperInstance = null;

    // 3. Render Products to Swiper Slider
    function renderProducts(categoryName) {
        const wrapper = document.getElementById('homeProductWrapper');
        if (!wrapper) return;

        // Check if productsData exists
        if (typeof productsData === 'undefined' || !Array.isArray(productsData)) {
            console.error('Error: products.js မရှိပါ သို့မဟုတ် productsData ကို ရှာမတွေ့ပါ။');
            return;
        }

        // Filter products
        const filtered = productsData.filter(item => item.category === categoryName);

        if (filtered.length === 0) {
            wrapper.innerHTML = `<div class="swiper-slide"><p style="padding: 20px;">No products available in this category.</p></div>`;
            return;
        }

        // Generate HTML Cards
        wrapper.innerHTML = filtered.map(item => `
            <div class="swiper-slide">
                <div class="product-card-slide" data-id="${item.id}">
                    <div class="slide-img-box">
                        <img src="${item.img}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/200x150?text=No+Image'">
                    </div>
                    <h4 class="slide-title">${item.title}</h4>
                    <p class="slide-subtitle">${item.subtitle}</p>
                    <span class="view-detail-btn">View Detail <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        `).join('');

        // Destroy previous Swiper instance before creating a new one
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
        }

        // Init Swiper
        if (typeof Swiper !== 'undefined') {
            swiperInstance = new Swiper('.product-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: { el: '.swiper-pagination', clickable: true },
                breakpoints: {
                    640: { slidesPerView: 2 },
                    992: { slidesPerView: 3 }
                }
            });
        }

        // Bind Click Event on Cards
        attachCardClickEvents();
    }

    // 4. Attach Click Event
    function attachCardClickEvents() {
        const cards = document.querySelectorAll('.product-card-slide');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                showProductDetail(productId);
            });
        });
    }

    // 5. Show Product Detail View
    function showProductDetail(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        const listView = document.getElementById('productListView');
        const detailView = document.getElementById('productDetailView');

        if (listView && detailView) {
            listView.style.display = 'none';
            detailView.style.display = 'block';

            // Fill Product Info
            document.getElementById('breadcrumbCategory').textContent = product.category;
            document.getElementById('breadcrumbTitle').textContent = product.title;
            
            document.getElementById('detailImg').src = product.img;
            document.getElementById('detailCategory').textContent = product.category;
            document.getElementById('detailTitle').textContent = product.title;
            document.getElementById('detailSubtitle').textContent = product.subtitle;
            document.getElementById('detailDescription').textContent = product.description;

            // Fill Features
            const featuresList = document.getElementById('detailFeatures');
            if (featuresList && Array.isArray(product.features)) {
                featuresList.innerHTML = product.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('');
            }

            // Smooth Scroll
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }
    }

    // 6. Back Button Logic
    const backBtn = document.getElementById('backToProductsBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            document.getElementById('productDetailView').style.display = 'none';
            document.getElementById('productListView').style.display = 'block';
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 7. Category Filter Tab Clicks
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-category');
            renderProducts(category);
        });
    });

    // Load Default Category Products
    renderProducts('Pharmaceutical');
});

    // 7. Category Filter Tabs Event
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-category');
            renderProducts(category);
        });
    });

    // Initial Load
    renderProducts('Pharmaceutical');
});

document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance = null;

    // 1. Swiper Slider ကို စတင်ပွင့်စေခြင်း
    function initSwiper() {
        if (typeof Swiper !== 'undefined') {
            if (swiperInstance) swiperInstance.destroy(true, true);
            swiperInstance = new Swiper('.product-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: { el: '.swiper-pagination', clickable: true },
                breakpoints: {
                    640: { slidesPerView: 2 },
                    992: { slidesPerView: 3 }
                }
            });
        }
    }

    // 2. Products များကို Render လုပ်ပေးခြင်း
    function renderProducts(categoryName) {
        const wrapper = document.getElementById('homeProductWrapper');
        if (!wrapper || typeof productsData === 'undefined') return;

        const filtered = productsData.filter(item => item.category === categoryName);

        if (filtered.length > 0) {
            wrapper.innerHTML = filtered.map(item => `
                <div class="swiper-slide">
                    <div class="product-card-slide" data-id="${item.id}">
                        <div class="slide-img-box">
                            <img src="${item.img}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/200x150?text=No+Image'">
                        </div>
                        <h4 class="slide-title">${item.title}</h4>
                        <p class="slide-subtitle">${item.subtitle}</p>
                        <span class="view-detail-btn">View Detail <i class="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            `).join('');
        }

        initSwiper();
        attachCardClickEvents();
    }

    // 3. Card ကို နှိပ်လျှင် Detail View သို့ သွားရန်
    function attachCardClickEvents() {
        document.querySelectorAll('.product-card-slide').forEach(card => {
            card.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                showProductDetail(productId);
            });
        });
    }

    // 4. Detail View ပြသခြင်း
    function showProductDetail(productId) {
        if (typeof productsData === 'undefined') return;
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        document.getElementById('productListView').style.display = 'none';
        document.getElementById('productDetailView').style.display = 'block';

        document.getElementById('breadcrumbCategory').textContent = product.category;
        document.getElementById('breadcrumbTitle').textContent = product.title;
        document.getElementById('detailImg').src = product.img;
        document.getElementById('detailCategory').textContent = product.category;
        document.getElementById('detailTitle').textContent = product.title;
        document.getElementById('detailSubtitle').textContent = product.subtitle;
        document.getElementById('detailDescription').textContent = product.description;

        const featuresList = document.getElementById('detailFeatures');
        if (featuresList && product.features) {
            featuresList.innerHTML = product.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('');
        }

        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }

    // 5. Back Button
    const backBtn = document.getElementById('backToProductsBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            document.getElementById('productDetailView').style.display = 'none';
            document.getElementById('productListView').style.display = 'block';
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 6. Category Filter Buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProducts(e.target.getAttribute('data-category'));
        });
    });

    // စတင်ပွဲထုတ်ခြင်း
    initSwiper();
    attachCardClickEvents();
    if (typeof productsData !== 'undefined') {
        renderProducts('Pharmaceutical');
    }
});
