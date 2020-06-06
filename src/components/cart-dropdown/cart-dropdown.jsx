import React from 'react';
import Unibutton from '../uniButton/uniButton';
import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <Unibutton>Przejdź do koszyka</Unibutton>
    </div>
)

export default CartDropdown;

