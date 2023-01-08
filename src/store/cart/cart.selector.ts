import { createSelector } from 'reselect';

import { RootState } from '../store';

import { CartState } from './cart.reducer';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => {
    console.log('cart',cart)
    if(!cart){
      return [];
    }
    return cart.cartItems
  }
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) => {
  if (!cartItems){
    return 0;
  }
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity, 0
  )
});

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
  if (!cartItems){
    return 0;
  }
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
}
);
