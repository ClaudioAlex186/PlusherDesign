// Model - Data and Business Logic
const Model = {
    // Product data
    products: [
    {
        id: 1,
        title: "PLUSHER Zona Oeste Tee Black",
        price: "$89.99",
        images: [
            "images/product-1.jpg",
            "images/bangood.jpg",
            "images/product-3c.jpg",
            "images/product-1b.jpg", 
            "images/product-1c.jpg"
        ],
        description: "Elevate your street style with the PLUSHER Zona Oeste Tee, a premium streetwear essential inspired by the raw energy of Rio de Janeiro's West Zone. Crafted from ultra-soft, heavyweight 100% cotton for all-day comfort and durability PLUSHER Zona Oeste Rio de Janeiro.Available in sizes S-XXL— grab yours before it's gone"
    },
    {
        id: 2,
        title: "PLUSHER Zona Oeste Tee White",
        price: "$39.99",
        images: [
            "images/product-2.jpg",
            "images/product-2d.jpg",
            "images/product-2c.jpg",
            "images/product-2b.jpg",
            
        ],
        description: "Elevate your street style with the PLUSHER Zona Oeste Tee, a premium streetwear essential inspired by the raw energy of Rio de Janeiro's West Zone. Crafted from ultra-soft, heavyweight 100% cotton for all-day comfort and durability PLUSHER Zona Oeste Rio de Janeiro.Available in sizes S-XXL— grab yours before it's gone"
    },
    {
        id: 3,
        title: "PLUSHER ADEMPT",
        price: "$79.99",
        images: [
            "images/Adempt1.jpg",
            "images/Adempt2.jpg",
            "images/Adempt3.jpg",
            "images/size.jpg",
            
        ],
        description: "Elevate your street style with the PLUSHER Zona Oeste Tee, a premium streetwear essential inspired by the raw energy of PLUSHER ADEMPT. Crafted from ultra-soft, heavyweight 100% cotton for all-day comfort and durability PLUSHER Zona Oeste Rio de Janeiro.Available in sizes S-XXL— grab yours before it's gone"
    },
        {
        id: 3,
        title: "Secret Collection 1",
        price: "Coming Soon",
        images: ["images/nova.jpg"],
        description: "Our upcoming collection. Stay tuned!",
        comingSoon: true
    },
    // Continue for all 10 products...
],

    // Current product state
    currentProduct: null,
    quantity: 1,
    selectedSize: 'M',

    // Get all products
    getAllProducts: function() {
        return this.products;
    },

    // Get product by ID
    getProductById: function(id) {
        return this.products.find(product => product.id === id);
    },

    // Set current product
    setCurrentProduct: function(product) {
        this.currentProduct = product;
    },

    // Get current product
    getCurrentProduct: function() {
        return this.currentProduct;
    },

    // Update quantity
    updateQuantity: function(amount) {
        this.quantity = Math.max(1, this.quantity + amount);
        return this.quantity;
    },

    // Get current quantity
    getQuantity: function() {
        return this.quantity;
    },

    // Set selected size
    setSelectedSize: function(size) {
        this.selectedSize = size;
    },

    // Get selected size
    getSelectedSize: function() {
        return this.selectedSize;
    },

    // Reset product detail state
    resetProductDetailState: function() {
        this.quantity = 1;
        this.selectedSize = 'M';
    }
};