// View - UI Rendering and DOM Manipulation
const View = {
    // DOM Elements
    elements: {
        productsGrid: document.getElementById('products-grid'),
        productDetail: document.getElementById('product-detail'),
        detailImg: document.getElementById('detail-img'),
        detailTitle: document.getElementById('detail-title'),
        detailPrice: document.getElementById('detail-price'),
        detailDesc: document.getElementById('detail-desc'),
        backBtn: document.getElementById('back-btn'),
        mobileMenu: document.getElementById('mobile-menu'),
        mainNav: document.getElementById('main-nav'),
        decreaseQty: document.getElementById('decrease-qty'),
        increaseQty: document.getElementById('increase-qty'),
        qtyElement: document.getElementById('qty'),
        addToCart: document.getElementById('add-to-cart')
    },

    // Render products on the home page
    renderProducts: function(products) {
    this.elements.productsGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.images[0]}" alt="${product.title}">
                ${product.comingSoon ? '<div class="coming-soon-overlay">COMING SOON</div>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${product.price}</div>
                ${product.comingSoon ? 
                    '<button class="btn" disabled>Coming Soon</button>' : 
                    '<button class="btn view-product" data-id="' + product.id + '">View Details</button>'
                }
            </div>
        `;
        this.elements.productsGrid.appendChild(productCard);
    });
},

    // Show product detail page
    showProductDetail: function(product) {
    // Update main product info
    this.elements.detailTitle.textContent = product.title;
    this.elements.detailPrice.textContent = product.price;
    this.elements.detailDesc.textContent = product.description;
    
    // Create image gallery HTML
    const imageGalleryHTML = this.createImageGallery(product.images);
    
    // Replace the single image with gallery
    const productDetailImg = document.querySelector('.product-detail-img');
    productDetailImg.innerHTML = imageGalleryHTML;
    
    // Hide home page sections and show product detail
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.products').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    this.elements.productDetail.style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
},

// Add this new function to create the image gallery
createImageGallery: function(images) {
    return `
        <div class="main-image">
            <img src="${images[0]}" alt="" id="main-product-image">
        </div>
        <div class="image-thumbnails">
            ${images.map((image, index) => `
                <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${image}">
                    <img src="${image}" alt="">
                </div>
            `).join('')}
        </div>
    `;
},

    // Show home page
    showHomePage: function() {
        this.elements.productDetail.style.display = 'none';
        document.querySelector('.hero').style.display = 'block';
        document.querySelector('.products').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
    },

    // Update quantity display
    updateQuantityDisplay: function(quantity) {
        this.elements.qtyElement.textContent = quantity;
    },

    // Update size selection
    updateSizeSelection: function(size) {
        // Remove active class from all sizes
        document.querySelectorAll('.size').forEach(s => s.classList.remove('active'));
        
        // Add active class to selected size
        document.querySelectorAll('.size').forEach(s => {
            if (s.textContent === size) {
                s.classList.add('active');
            }
        });
    },

    // Toggle mobile menu
    toggleMobileMenu: function() {
        this.elements.mainNav.classList.toggle('active');
    },

    // Close mobile menu
    closeMobileMenu: function() {
        this.elements.mainNav.classList.remove('active');
    },

    // Show add to cart message
    showAddToCartMessage: function() {
        alert('Added to cart! (This is a demo site, no actual purchase will be made, to order contact our instagram page! )');
    },

    // Initialize size selection
    initializeSizeSelection: function() {
        document.querySelectorAll('.size').forEach(size => {
            size.addEventListener('click', function() {
                Controller.handleSizeSelection(this.textContent);
            });
        });
    }
};