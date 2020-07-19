import React from "react";
import "./product.style.scss";
import { connect } from 'react-redux';
import { addItemToCartArray } from '../../redux/cart/cart.actions';
import UniButton from '../uniButton/uniButton';

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
      <UniButton
        onClick={() => addItemToCartArray(item)}
      >Dodaj do koszyka
      </UniButton>
    </div>
  </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItemToCartArray: item => dispatch(addItemToCartArray(item))
})

export default connect(null, mapDispatchToProps)(Product);


