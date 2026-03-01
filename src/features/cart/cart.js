import { getCart, removeFromCart } from '../../interfaces/cart.js';

const container = document.getElementById('cart_items');

export const renderCart = () => {
  container.innerHTML = '';

  const cart = getCart();

  if (!cart.length) {
    container.textContent = 'Кошик порожній';
    return;
  }

  cart.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('cart_item');

    div.innerHTML = `
      <img src="${item.image}" width="80"/>
      <p>${item.title}</p>
      <p>${item.price} ₴ × ${item.quantity}</p>
      <button>❌</button>
    `;

    div.querySelector('button').onclick = () => {
      removeFromCart(item.id);
      renderCart();
    };

    container.append(div);
  });
};