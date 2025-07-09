// Product data
const products = [
    {
        id: 1,
        name: "Classic Oxford Shirt",
        price: 89,
        originalPrice: 120,
        image: "https://mosscontenthub.rlab.net/wp-content/uploads/2023/12/0-3-Hero.png",
        category: "Shirts",
        description: "Timeless oxford shirt perfect for both casual and business settings.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Blue", "Gray"],
        isNew: true,
        isSale: false
    },
    {
        id: 2,
        name: "Premium Wool Suit",
        price: 599,
        originalPrice: 799,
        image: "https://thehouseofrare.com/cdn/shop/files/RR219584-11738_480x.webp?v=1747736283",
        category: "Suits",
        description: "Elegant wool suit tailored for the modern professional.",
        sizes: ["38", "40", "42", "44", "46"],
        colors: ["Navy", "Charcoal", "Black"],
        isNew: false,
        isSale: true
    },
    {
        id: 3,
        name: "Casual Chino Pants",
        price: 79,
        originalPrice: null,
        image: "https://bamboovillage.com.au/cdn/shop/files/Mens_Casual_Pants_-_Group__88704.1627628374.1280.1280.jpg?v=1713752906",
        category: "Pants",
        description: "Comfortable chino pants ideal for weekend wear.",
        sizes: ["30", "32", "34", "36", "38"],
        colors: ["Khaki", "Navy", "Olive"],
        isNew: false,
        isSale: false
    },
    {
        id: 4,
        name: "Leather Dress Belt",
        price: 45,
        originalPrice: null,
        image: "https://cdn11.bigcommerce.com/s-z1ddyjrfbo/images/stencil/1280x1280/products/2141/57924/b23fe12c-db45-423c-83e6-ef23261ed1cc__76860.1644369565.jpg?c=1",
        category: "Accessories",
        description: "Genuine leather belt with classic buckle design.",
        sizes: ["32", "34", "36", "38", "40"],
        colors: ["Black", "Brown", "Tan"],
        isNew: false,
        isSale: false
    },
    {
        id: 5,
        name: "Merino Wool Sweater",
        price: 149,
        originalPrice: null,
        image: "https://image.hm.com/assets/hm/1a/8c/1a8c6f9fa9a04b87f9d1c6ff2b65711740ec488c.jpg?imwidth=1536",
        category: "Shirts",
        description: "Luxurious merino wool sweater for cold weather comfort.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gray", "Navy", "Burgundy"],
        isNew: true,
        isSale: false
    },
    {
        id: 6,
        name: "Tailored Dress Pants",
        price: 129,
        originalPrice: null,
        image: "https://www.bombayshirts.com/cdn/shop/files/Artboard12_b110c4d7-de52-4dab-956e-a164cbd9290c_800x.jpg?v=1751961336",
        category: "Pants",
        description: "Precisely tailored dress pants for formal occasions.",
        sizes: ["30", "32", "34", "36", "38"],
        colors: ["Black", "Gray", "Navy"],
        isNew: false,
        isSale: false
    },
    {
        id: 7,
        name: "Silk Pocket Square",
        price: 29,
        originalPrice: null,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4jqAAhTvwkMAWtw_PkJ3v8WlZ1JRhSSwr2qyvdtrEK2lEds28ynyvYMOCQq3NTN0O-1gFoY17LWgW2FCdI9_n3RBfzfLoLDS7WqDOA4yoSuE5Q5l4nk1jbZk",
        category: "Accessories",
        description: "Elegant silk pocket square to complete your formal look.",
        sizes: ["One Size"],
        colors: ["White", "Blue", "Red", "Purple"],
        isNew: false,
        isSale: false
    },
    {
        id: 8,
        name: "Business Casual Blazer",
        price: 299,
        originalPrice: 399,
        image: "https://image.hm.com/assets/hm/3d/ab/3dab0d94921e607c8eafb8a21553f60e66bd80e6.jpg?imwidth=768",
        category: "Suits",
        description: "Versatile blazer perfect for business casual settings.",
        sizes: ["38", "40", "42", "44", "46"],
        colors: ["Navy", "Gray", "Brown"],
        isNew: false,
        isSale: true
    },
    {
        id: 9,
        name: "Cotton Polo Shirt",
        price: 59,
        originalPrice: null,
        image: "https://thehouseofrare.com/cdn/shop/files/SALIS-2-LIGHT-OLIVE01075_480x.jpg?v=1743584668",
        category: "Shirts",
        description: "Classic cotton polo shirt for casual elegance.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Navy", "Green", "Red"],
        isNew: false,
        isSale: false
    }
];

// Global variables
let cart = [];
let currentFilter = 'all';
let currentSearchTerm = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartUI();
});

// Display products
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';

    const badges = [];
    if (product.isNew) badges.push('<span class="badge badge-new position-absolute top-0 start-0 m-2">New</span>');
    if (product.isSale) badges.push('<span class="badge badge-sale position-absolute top-0 start-0 m-2">Sale</span>');

    const originalPriceHTML = product.originalPrice 
        ? `<span class="text-muted text-decoration-line-through ms-2">$${product.originalPrice}</span>`
        : '';

    col.innerHTML = `
        <div class="card product-card h-100">
            <div class="position-relative">
                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                    class="product-image card-img-top"
                    onclick="showProductDetail(${product.id})"
                />
                ${badges.join('')}
                <button class="btn btn-light position-absolute top-0 end-0 m-2">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            
            <div class="card-body d-flex flex-column">
                <h5 class="card-title" style="cursor: pointer;" onclick="showProductDetail(${product.id})">
                    ${product.name}
                </h5>
                <p class="card-text text-muted flex-grow-1">
                    ${product.description}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <span class="price">$${product.price}</span>
                        ${originalPriceHTML}
                    </div>
                    <button 
                        class="btn btn-primary"
                        onclick="addToCart(${product.id})"
                    >
                        <i class="fas fa-shopping-cart me-2"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;

    return col;
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('btn-primary', 'active');
        btn.classList.add('btn-outline-primary');
    });
    
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.remove('btn-outline-primary');
        activeBtn.classList.add('btn-primary', 'active');
    }

    let filteredProducts = products;

    if (category !== 'all') {
        if (category === 'sale') {
            filteredProducts = products.filter(p => p.isSale);
        } else {
            filteredProducts = products.filter(p => p.category === category);
        }
    }

    // Apply search filter if exists
    if (currentSearchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(currentSearchTerm.toLowerCase())
        );
    }

    displayProducts(filteredProducts);
}

// Search products
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    currentSearchTerm = searchInput.value.trim();
    
    let filteredProducts = products;

    // Apply category filter
    if (currentFilter !== 'all') {
        if (currentFilter === 'sale') {
            filteredProducts = products.filter(p => p.isSale);
        } else {
            filteredProducts = products.filter(p => p.category === currentFilter);
        }
    }

    // Apply search filter
    if (currentSearchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(currentSearchTerm.toLowerCase())
        );
    }

    displayProducts(filteredProducts);
}

// Add event listener for search input
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// Show product detail modal
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById('productModalTitle');
    const modalBody = document.getElementById('productModalBody');

    modalTitle.textContent = product.name;

    const originalPriceHTML = product.originalPrice 
        ? `<span class="text-muted text-decoration-line-through ms-2 h5">$${product.originalPrice}</span>`
        : '';

    const sizesHTML = product.sizes.map(size => 
        `<button class="btn btn-outline-primary size-btn" onclick="selectSize(this, '${size}')">${size}</button>`
    ).join('');

    const colorsHTML = product.colors.map(color => 
        `<button class="btn btn-outline-primary color-btn" onclick="selectColor(this, '${color}')">${color}</button>`
    ).join('');

    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6 mb-4">
                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                    class="product-detail-image rounded img-fluid"
                />
            </div>
            
            <div class="col-md-6">
                <div class="d-flex align-items-center mb-3">
                    <div class="d-flex me-3">
                        ${[...Array(5)].map(() => '<i class="fas fa-star text-warning"></i>').join('')}
                    </div>
                    <span class="text-muted">(124 reviews)</span>
                </div>

                <div class="mb-4">
                    <span class="price h3">$${product.price}</span>
                    ${originalPriceHTML}
                </div>

                <p class="lead mb-4">${product.description}</p>

                <div class="mb-4">
                    <h5>Size</h5>
                    <div class="d-flex gap-2 flex-wrap">
                        ${sizesHTML}
                    </div>
                </div>

                <div class="mb-4">
                    <h5>Color</h5>
                    <div class="d-flex gap-2 flex-wrap">
                        ${colorsHTML}
                    </div>
                </div>

                <div class="quantity-controls mb-4">
                    <span class="fw-semibold me-3">Quantity:</span>
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <span class="fw-semibold mx-3" id="modalQuantity">1</span>
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>

                <div class="d-flex gap-3 mb-4">
                    <button 
                        class="btn btn-primary btn-lg flex-grow-1"
                        onclick="addToCartFromModal(${product.id})"
                    >
                        <i class="fas fa-shopping-cart me-2"></i>
                        Add to Cart
                    </button>
                    <button class="btn btn-outline-secondary btn-lg">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>

                <div class="border-top pt-4">
                    <h6>Product Details</h6>
                    <ul class="list-unstyled">
                        <li class="mb-2"><strong>Category:</strong> ${product.category}</li>
                        <li class="mb-2"><strong>Material:</strong> Premium Cotton Blend</li>
                        <li class="mb-2"><strong>Care:</strong> Machine washable</li>
                        <li class="mb-2"><strong>Fit:</strong> Regular fit</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Set default selections
    setTimeout(() => {
        const firstSizeBtn = modalBody.querySelector('.size-btn');
        const firstColorBtn = modalBody.querySelector('.color-btn');
        if (firstSizeBtn) selectSize(firstSizeBtn, product.sizes[0]);
        if (firstColorBtn) selectColor(firstColorBtn, product.colors[0]);
    }, 100);

    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

// Modal helper functions
let selectedSize = '';
let selectedColor = '';
let modalQuantity = 1;

function selectSize(button, size) {
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('btn-primary', 'active');
        btn.classList.add('btn-outline-primary');
    });
    button.classList.remove('btn-outline-primary');
    button.classList.add('btn-primary', 'active');
    selectedSize = size;
}

function selectColor(button, color) {
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('btn-primary', 'active');
        btn.classList.add('btn-outline-primary');
    });
    button.classList.remove('btn-outline-primary');
    button.classList.add('btn-primary', 'active');
    selectedColor = color;
}

function changeQuantity(change) {
    modalQuantity = Math.max(1, modalQuantity + change);
    document.getElementById('modalQuantity').textContent = modalQuantity;
}

// Add to cart functions
function addToCart(productId, quantity = 1, size = 'M', color = 'Black') {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItemIndex = cart.findIndex(
        item => item.id === productId && item.size === size && item.color === color
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            size: size,
            color: color
        });
    }

    updateCartUI();
    showCartNotification();
}

function addToCartFromModal(productId) {
    if (!selectedSize || !selectedColor) {
        alert('Please select size and color');
        return;
    }
    
    addToCart(productId, modalQuantity, selectedSize, selectedColor);
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    modal.hide();
    
    // Reset modal state
    modalQuantity = 1;
    selectedSize = '';
    selectedColor = '';
}

// Cart UI functions
function updateCartUI() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;
    document.getElementById('cartItemCount').textContent = cart.length;

    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        emptyCart.classList.remove('d-none');
        cartTotal.classList.add('d-none');
        cartItems.innerHTML = '<div class="text-center py-5" id="emptyCart"><i class="fas fa-shopping-bag text-muted mb-3" style="font-size: 3rem;"></i><p class="text-muted">Your cart is empty</p><button class="btn btn-primary" data-bs-dismiss="offcanvas">Continue Shopping</button></div>';
    } else {
        emptyCart.classList.add('d-none');
        cartTotal.classList.remove('d-none');
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-3">
                        <img 
                            src="${item.image}" 
                            alt="${item.name}"
                            class="img-fluid rounded"
                        />
                    </div>
                    <div class="col-6">
                        <h6 class="mb-1">${item.name}</h6>
                        <small class="text-muted">
                            Size: ${item.size}, Color: ${item.color}
                        </small>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', '${item.color}', ${item.quantity - 1})">
                                -
                            </button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', '${item.color}', ${item.quantity + 1})">
                                +
                            </button>
                        </div>
                    </div>
                    <div class="col-3 text-end">
                        <div class="fw-semibold mb-2">$${item.price}</div>
                        <button 
                            class="btn btn-sm btn-outline-danger"
                            onclick="removeFromCart(${item.id}, '${item.size}', '${item.color}')"
                        >
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        document.getElementById('subtotal').textContent = `$${total.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }
}

function updateQuantity(id, size, color, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(id, size, color);
        return;
    }

    const itemIndex = cart.findIndex(item => 
        item.id === id && item.size === size && item.color === color
    );

    if (itemIndex > -1) {
        cart[itemIndex].quantity = newQuantity;
        updateCartUI();
    }
}

function removeFromCart(id, size, color) {
    cart = cart.filter(item => 
        !(item.id === id && item.size === size && item.color === color)
    );
    updateCartUI();
}

function toggleCart() {
    const cartOffcanvas = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));
    cartOffcanvas.show();
}

function showCartNotification() {
    // Simple notification - you could enhance this with a toast or modal
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed';
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999;';
    notification.textContent = 'Item added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Utility functions
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}
