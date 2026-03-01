import {
  getCart,
  removeFromCart,
  clearCart
} from '../../interfaces/cart.js';

import { addToCart } from '../../interfaces/cart.js';

const getCartContainer = () => document.getElementById('cart');


const cartItemTemplate = (item) => `
  <div class="cart-item" data-id="${item.id}">
    <input type="checkbox" class="cart-check" checked />

    <img
      class="cart-image"
      src="${item.image}"
      alt="${item.title}"
    />

    <div class="cart-info">
      <h3 class="cart-name">${item.title}</h3>
      <p class="cart-desc">${item.description}</p>
    </div>

    <div class="cart-price">
      <span class="old">$${item.price + item.discount}</span>
      <span class="new">$${item.price}</span>
      <span class="discount">-${item.discount}%</span>
    </div>

    <div class="cart-qty">
      <button class="qty-minus">-</button>
      <span>${item.quantity}</span>
      <button class="qty-plus">+</button>
    </div>

    <div class="cart-total">$${item.price * item.quantity}</div>

    <button class="cart-remove">✕</button>
  </div>
`;

const bindCartEvents = () => {
  document.querySelectorAll('.cart-item').forEach(item => {
    const id = Number(item.dataset.id);

    item.querySelector('.qty-plus').onclick = () => {
      addToCart({ id });
      renderCart();
    };

    item.querySelector('.qty-minus').onclick = () => {
      const cartItem = getCart().find(i => i.id === id);
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        removeFromCart(id);
      }
      renderCart();
    };

    item.querySelector('.cart-remove').onclick = () => {
      removeFromCart(id);
      renderCart();
    };
  });
};

const bindClearCart = () => {
  const btn = document.getElementById('clear-cart');
  if (!btn) return;

  btn.onclick = () => {
    clearCart();
    renderCart();
  };
};


export const renderCart = () => {
  const cartContainer = getCartContainer();
  if (!cartContainer) return;

  const items = getCart();

  cartContainer.querySelectorAll('.cart-item').forEach(el => el.remove());

  items.forEach(item => {
    cartContainer.insertAdjacentHTML('beforeend', cartItemTemplate(item));
  });

  bindCartEvents();
  bindClearCart();
};

export const updateClearCartState = () => {
  const btn = document.getElementById('clear-cart');
  if (!btn) return;

  btn.disabled = getCart().length === 0;
};


