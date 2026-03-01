import { cart } from '../db/cart.js';

export const getCart = () => {
  return cart;
};

export const addToCart = (card) => {
  const existing = cart.find(item => item.id === card.id);

  if (existing) {
    if(existing.quantity == undefined) existing.quantity = 0;
    existing.quantity += 1;
  } else {
    cart.push({
      ...card,
      quantity: 1
    });
  }
};

export const removeFromCart = (id) => {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) cart.splice(index, 1);
};

export const clearCart = () => {
  cart.length = 0;
};