import React from "react";

import "./preview.style.scss";

import Product from "../product/product";

const Preview = ({ title, items }) => (
  <div className="preview">
    <h1 className="preview__title">{title}</h1>
    <div className="preview__item">
      {items
        .filter((item, idx) => idx < 3)
        .map(({ id, ...rest }) => (
          <Product key={id} {...rest} />
        ))}
    </div>
  </div>
);

export default Preview;
