import React from 'react';
import './cart-item.style.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="produkt" className="cart-item__image"/>
        <div className="cart-item__details">
            <span className="cart-item__details__name">{name}</span>
            <span className="cart-item__details__price">{quantity} x {price} zł</span>
        </div>
    </div>
)

export default CartItem;