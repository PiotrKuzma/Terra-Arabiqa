import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/purchase.svg';
import { connect } from 'react-redux';
import { ToggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsQuantity } from '../../redux/cart/cart-selectors';


const CartIcon = ({ToggleCartHidden, itemQuantity }) => (
    <div className="cart-icon" onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemQuantity}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemQuantity: selectCartItemsQuantity(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);