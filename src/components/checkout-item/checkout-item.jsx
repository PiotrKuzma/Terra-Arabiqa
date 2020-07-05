import React from 'react';
import './checkout-item.style.scss';
import { ReactComponent as Remove } from '../../assets/remove.svg';

const CheckoutItem = ({ item : { name, price, quantity, imageUrl }}) => (
    <div className="checkout-item">
        <div className="checkout-item__img-container">
            <img className="checkout-item__img-container__image"
                alt="Produkt"
                src={imageUrl}
            />
        </div>
        <spa className="checkout-item__name">{name}</spa>
        <spa className="checkout-item__price">{price} zł</spa>
        <spa className="checkout-item__quantity">{quantity}</spa>
        <button className="checkout-item__remove">
            <Remove className="checkout-item__remove__icon"/>
        </button>
    </div>
)

export default CheckoutItem;