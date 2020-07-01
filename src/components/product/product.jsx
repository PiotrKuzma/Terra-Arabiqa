import React from "react";
import "./product.style.scss";
import { ReactComponent as Purchase } from "../../assets/purchase.svg";
import { connect } from 'react-redux';
import { addItemToCartArray } from '../../redux/cart/cart.actions';

const Product = ({ item, addItemToCartArray }) => {
  const { name, price, imageUrl } = item
  return (
  <div className="product">
    <div
      className="product__image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="product__footer">
      <span className="product__footer--name">{name}</span>
      <span className="product__footer--price">{price}zł</span>
    </div>
    <button className="product__purchase"
      onClick={() => addItemToCartArray(item)}
    >
      <Purchase className="product__purchase__icon"/>
      <p className="product__purchase__text">Dodaj do koszyka</p>
    </button>
  </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItemToCartArray: item => dispatch(addItemToCartArray(item))
})

export default connect(null, mapDispatchToProps)(Product);


