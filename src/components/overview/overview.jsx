import React from 'react';
import './overview.style.scss'
import Preview from "../../components/preview/preview";
import { motion } from 'framer-motion';
import { containerVariants } from '../../animations/page-animations';
import { connect } from 'react-redux';
import { selectCollectionForOverview } from '../../redux/shop/shop.selector';

const Overview = ({ collection })=>
(
  <motion.div className="shop" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
    {collection.map(({ id, ...rest }) => (
      <Preview key={id} {...rest} />
    ))}
  </motion.div>
);

const mapStateToProps = (state) => ({
  collection: selectCollectionForOverview(state)
})

export default connect(mapStateToProps)(Overview);