import React from 'react';
import './checkout-item.style.scss';
import { ReactComponent as Remove } from '../../assets/remove.svg';
import {connect} from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, deleteItem }) => {
    const { name, price, quantity, imageUrl } = item
    return (
    <div className="checkout-item">
        <div className="checkout-item__img-container">
            <img className="checkout-item__img-container__image"
                alt="Produkt"
                src={imageUrl}
            />
        </div>
        <span className="checkout-item__name">{name}</span>
        <span className="checkout-item__price">{price} zł</span>
        <span className="checkout-item__quantity">{quantity}</span>
        <button className="checkout-item__remove">
            <Remove className="checkout-item__remove__icon" onClick={() => deleteItem(item)}/>
        </button>
    </div>
) }

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItemFromCart(item))
})
export default connect(null, mapDispatchToProps) (CheckoutItem);