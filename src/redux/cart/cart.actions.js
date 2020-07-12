import CartActionTypes from './cart-types';

export const ToggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN

})

export const addItemToCartArray = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const deleteItemFromCart = item => ({
    type: CartActionTypes.DELETE_ITEM,
    payload: item
})