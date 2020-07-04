import React from 'react';
import Unibutton from '../uniButton/uniButton';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectPurchasedItems } from '../../redux/cart/cart-selectors'
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ purchasedItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
            purchasedItems.length?
            purchasedItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
            : <span className="cart-items__empty">Twój koszyk jest pusty</span>
            }
        </div>
        <Unibutton onClick={() => history.push('/checkout')}>Do kasy</Unibutton>
    </div>
)

const mapStateToProps = (state) => ({
    purchasedItems: selectPurchasedItems(state)
})

export default withRouter(connect(mapStateToProps) (CartDropdown));

