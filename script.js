// script.js

// DOM Elements
const searchInput = document.querySelector('.search-bar input');
const productItems = document.querySelectorAll('.product-item');
const cartCount = document.querySelector('.cart-count');
const categoryItems = document.querySelectorAll('.category-item');
const navbarMenu = document.querySelector('.menu');
const menuToggleBtn = document.querySelector('.menu-toggle');

// Global Variables
let cart = 0;

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    productItems.forEach((product) => {
        const productName = product.querySelector('p').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Add to Cart Functionality
productItems.forEach((product) => {
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.className = 'add-to-cart';
    product.appendChild(addButton);

    addButton.addEventListener('click', () => {
        cart++;
        cartCount.textContent = cart;
        alert(`${product.querySelector('p').textContent} added to cart!`);
    });
});

// Category Filtering
categoryItems.forEach((category) => {
    category.addEventListener('click', () => {
        const categoryText = category.querySelector('p').textContent.toLowerCase();
        productItems.forEach((product) => {
            if (product.getAttribute('data-category') === categoryText || categoryText === 'all') {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Menu Toggle for Mobile
menuToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});
