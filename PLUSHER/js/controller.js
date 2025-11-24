// Controller - Event Handlers and Application Logic
const Controller = {
    // Initialize the application
    init: function() {
        // Render products on page load
        const products = Model.getAllProducts();
        View.renderProducts(products);
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Initialize size selection
        View.initializeSizeSelection();
    },

    // Set up event listeners
    setupEventListeners: function() {
        // Back button
        View.elements.backBtn.addEventListener('click', this.handleBackButton.bind(this));
        
        // Mobile menu
        View.elements.mobileMenu.addEventListener('click', this.handleMobileMenu.bind(this));
        
        // Quantity buttons
        View.elements.decreaseQty.addEventListener('click', this.handleDecreaseQuantity.bind(this));
        View.elements.increaseQty.addEventListener('click', this.handleIncreaseQuantity.bind(this));
        
        // Add to cart button
        View.elements.addToCart.addEventListener('click', this.handleAddToCart.bind(this));
        
        // Navigation links (smooth scrolling)
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', this.handleNavigation.bind(this));
        });
        
        // View product buttons (delegated event)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-product')) {
                const productId = parseInt(e.target.getAttribute('data-id'));
                this.handleViewProduct(productId);
            }
        });
        
        // Thumbnail clicks (delegated event)
        document.addEventListener('click', (e) => {
            if (e.target.closest('.thumbnail')) {
                const thumbnail = e.target.closest('.thumbnail');
                const imageSrc = thumbnail.getAttribute('data-image');
                this.handleThumbnailClick(imageSrc, thumbnail);
            }
        });
    },

    // Handle view product
    handleViewProduct: function(productId) {
        const product = Model.getProductById(productId);
        if (product) {
            Model.setCurrentProduct(product);
            View.showProductDetail(product);
        }
    },

    // Handle back button
    handleBackButton: function() {
        View.showHomePage();
        Model.resetProductDetailState();
        View.updateQuantityDisplay(Model.getQuantity());
        View.updateSizeSelection(Model.getSelectedSize());
    },

    // Handle mobile menu
    handleMobileMenu: function() {
        View.toggleMobileMenu();
    },

    // Handle decrease quantity
    handleDecreaseQuantity: function() {
        const quantity = Model.updateQuantity(-1);
        View.updateQuantityDisplay(quantity);
    },

    // Handle increase quantity
    handleIncreaseQuantity: function() {
        const quantity = Model.updateQuantity(1);
        View.updateQuantityDisplay(quantity);
    },

    // Handle size selection
    handleSizeSelection: function(size) {
        Model.setSelectedSize(size);
        View.updateSizeSelection(size);
    },

    // Handle thumbnail click
    handleThumbnailClick: function(imageSrc, clickedThumbnail) {
        // Update main image
        document.getElementById('main-product-image').src = imageSrc;
        
        // Update active thumbnail
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        clickedThumbnail.classList.add('active');
    },

    // Handle add to cart
    handleAddToCart: function() {
        View.showAddToCartMessage();
    },

    // Handle navigation
    handleNavigation: function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            View.closeMobileMenu();
        }
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    Controller.init();
});