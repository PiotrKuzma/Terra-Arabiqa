import shopInventory from './shop.inventory';

const INITIAL_STATE = {
    inventory: shopInventory
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default shopReducer;