import React from "react";

import "./product.style.scss";

const Product = ({ id, name, price, imageUrl }) => (
  <div className="product">
    <div
      className="product__image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="product__footer">
      <span className="product__footer--name"> {name} </span>
      <span className="product__footer--price"> {price} zł </span>
    </div>
  </div>
);

export default Product;
