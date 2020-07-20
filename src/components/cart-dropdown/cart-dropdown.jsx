import React from 'react';
import Unibutton from '../uniButton/uniButton';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectPurchasedItems } from '../../redux/cart/cart-selectors'
import { withRouter } from 'react-router-dom';
import { ToggleCartHidden } from '../../redux/cart/cart.actions';
import Empty from '../empty-message/empty-message';

const CartDropdown = ({ purchasedItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
            purchasedItems.length?
            purchasedItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
            :   <Empty/>
            }
        </div>
        {
            purchasedItems.length?
        <Unibutton onClick={() => {
            history.push('/checkout')
            dispatch(ToggleCartHidden())
            }}
        >
        Do kasy
        </Unibutton>
        : null
        }
    </div>
)

const mapStateToProps = (state) => ({
    purchasedItems: selectPurchasedItems(state)
})

export default withRouter(connect(mapStateToProps) (CartDropdown));

