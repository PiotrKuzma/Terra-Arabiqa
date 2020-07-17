import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const COLLECTION_ID = {
    kawa: 1,
    kawiarki: 9,
    akcesoria: 15,
    zestawy: 27
}

export const selectShopInventory = createSelector(
    [selectShop],
    shop => shop.inventory
)

export const selectCollection = urlParameter =>
createSelector(
    [selectShopInventory],
    collections => collections.find(
        collection => collection.id === COLLECTION_ID[urlParameter]
    )
)