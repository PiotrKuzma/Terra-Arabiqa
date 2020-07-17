import React from 'react';
import './overview.style.scss'
import Preview from "../../components/preview/preview";
import { motion } from 'framer-motion';
import { containerVariants } from '../../animations/page-animations';
import { connect } from 'react-redux';
import { selectShopInventory } from '../../redux/shop/shop.selector';


const Overview = ({ collectionToDisplay })=>
(
      <motion.div className="shop" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        {collectionToDisplay.map(({ id, ...rest }) => (
          <Preview key={id} {...rest} />
        ))}
      </motion.div>
    );

const mapStateToProps = (state) => ({
  collectionToDisplay: selectShopInventory(state)
})

export default connect(mapStateToProps)(Overview);