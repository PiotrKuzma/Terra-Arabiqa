import React from "react";
import "./product.style.scss";
import { connect } from 'react-redux';
import { addItemToCartArray } from '../../redux/cart/cart.actions';
import { addItemToDescriptionArray } from '../../redux/description/description.actions';
import UniButton from '../uniButton/uniButton';
import { ToggleDescriptionHidden } from '../../redux/description/description.actions';

const Product = ({ item, addItemToCartArray, ToggleDescriptionHidden, addItemToDescriptionArray }) => {
  const { name, price, imageUrl } = item
  const displayItem = (item) => {
    addItemToDescriptionArray(item)
    ToggleDescriptionHidden()
  }
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
      <UniButton
        onClick={() => displayItem(item)}
      >Zobacz
      </UniButton>
    </div>
  </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItemToCartArray: item => dispatch(addItemToCartArray(item)),
  ToggleDescriptionHidden: () => dispatch(ToggleDescriptionHidden()),
  addItemToDescriptionArray: item =>dispatch(addItemToDescriptionArray(item))
})

export default connect(null, mapDispatchToProps)(Product);


