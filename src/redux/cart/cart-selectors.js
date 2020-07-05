import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectPurchasedItems = createSelector(
    [selectCart],
    (cart) => cart.purchasedItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsQuantity = createSelector(
    [selectPurchasedItems],
    purchasedItems => purchasedItems.reduce((acc, purchasedItem) => acc + purchasedItem.quantity, 0)
)

export const countPurchasedItemsTotal = createSelector(
    [selectPurchasedItems],
    purchasedItems => purchasedItems.reduce((acc, purchasedItem) => acc + purchasedItem.quantity * purchasedItem.price, 0)
)