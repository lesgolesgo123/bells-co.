const categories = document.querySelectorAll('.category');
const products = document.querySelectorAll('.products');

categories.forEach(category => {
    category.addEventListener('click', () => {
        const filter = category.dataset.filter;

        products.forEach(product => {
            if (filter === 'all' || product.dataset.category === filter) {
                product.style.display = 'block'; // Keep grid layout consistent
            } else {
                product.style.display = 'none';
            }
        });

        // Optional: active class for styling
        categories.forEach(c => c.classList.remove('active'));
        category.classList.add('active');
    });
});

