import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';
import descriptionReducer from './description/description.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    description: descriptionReducer
})