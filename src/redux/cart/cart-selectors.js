import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectPurchasedItems = createSelector(
    [selectCart],
    (cart) => cart.purchasedItems
)

export const selectCartItemsQuantity = createSelector(
    [selectPurchasedItems],
    purchasedItems => purchasedItems.reduce((acc, purchasedItem) => acc + purchasedItem.quantity, 0)
)