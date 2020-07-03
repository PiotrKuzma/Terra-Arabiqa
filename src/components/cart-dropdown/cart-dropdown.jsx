import React from 'react';
import Unibutton from '../uniButton/uniButton';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectPurchasedItems } from '../../redux/cart/cart-selectors'

const CartDropdown = ({ purchasedItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {purchasedItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))}
        </div>
        <Unibutton>Do kasy</Unibutton>
    </div>
)

const mapStateToProps = (state) => ({
    purchasedItems: selectPurchasedItems(state)
})

export default connect(mapStateToProps) (CartDropdown);

