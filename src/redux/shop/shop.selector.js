import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopInventory = createSelector(
    [selectShop],
    shop => shop.inventory
)

export const selectCollection = urlParameter =>
createSelector(
    [selectShopInventory],
    collections => collections[urlParameter]
)

export const selectCollectionForOverview = createSelector(
    [selectShopInventory],
    collections => Object.keys(collections).map(key => collections[key])
)