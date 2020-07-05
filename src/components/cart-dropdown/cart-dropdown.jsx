import React from 'react';
import Unibutton from '../uniButton/uniButton';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectPurchasedItems } from '../../redux/cart/cart-selectors'
import { withRouter } from 'react-router-dom';
import { ToggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ purchasedItems, history, dispatch }) => (
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
        <Unibutton onClick={() => {
            history.push('/checkout')
            dispatch(ToggleCartHidden())
            }}
        >
        Podsumowanie
        </Unibutton>
    </div>
)

const mapStateToProps = (state) => ({
    purchasedItems: selectPurchasedItems(state)
})

export default withRouter(connect(mapStateToProps) (CartDropdown));

