import React from "react";
import "./preview.style.scss";
import Product from "../product/product";
import { motion } from 'framer-motion';
import { headingVariants } from '../../animations/page-animations';

const Preview = ({ title, items }) => {
  return (
  <div className="preview">
    <motion.h1 className="preview__title" variants={headingVariants} initial="initial" animate="final">
      {title}
    </motion.h1>
    <div className="preview__item">
      {items
        .filter((item, idx) => idx < 3)
        .map((item) => (
          <Product key={item.id} item = {item}/>
        ))}
    </div>
  </div>
)};

export default Preview;
