import React from "react";
import "./product.style.scss";
import Unibutton from '../uniButton/uniButton';



const Product = ({ id, name, price, imageUrl }) => (
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
    <div className="product__purchase">
    <Unibutton>Kupuję</Unibutton>
    </div>
  </div>
);

export default Product;
