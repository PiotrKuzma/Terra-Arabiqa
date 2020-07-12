import React from "react";
import ShopInventory from "./shop.inventory";
import Preview from "../../components/preview/preview";
import './shop.style.scss';
import { motion } from 'framer-motion';
import { containerVariants } from '../../animations/page-animations';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: ShopInventory,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <motion.div className="shop" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        {collection.map(({ id, ...rest }) => (
          <Preview key={id} {...rest} />
        ))}
      </motion.div>
    );
  }
}

export default Shop;
