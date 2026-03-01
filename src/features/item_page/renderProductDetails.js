import { getCart, addToCart } from "../../interfaces/cart.js";

export const renderProductDetail = (product) => {
    const container = document.getElementById('main');
    if (!container) return;

    container.innerHTML = `
    <div class="product_detail_card">
        <div class="product_image_conteiner">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product_decription">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <span>В наявності: ${product.stock}</span>
            <p class="price">$${product.price} ${product.currency}</p>
        </div>
        <div class="actions">
            <button class="add-to-cart ${getCart().some(i=>i.id===product.id)?'added':''}">
                ${getCart().some(i=>i.id===product.id)?'Додано':'Додати в корзину'}
            </button>
            <button class="back-to-list">← Повернутись до каталогу</button>
        </div>
    </div>
    `;

    const btn = container.querySelector('.add-to-cart');
    btn.addEventListener('click', () => {
        if(btn.classList.contains('added')) return;
        addToCart(product);
        btn.classList.add('added');
        btn.textContent = 'Додано';
    });

    container.querySelector('.back-to-list').addEventListener('click', () => {
        window.location.hash = '';
    });
}