import React from 'react';
import "./collection.style.scss"
import Product from '../../components/product/product';
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector';
import { motion } from 'framer-motion';
import { headingVariants } from '../../animations/page-animations';
import { containerVariants } from '../../animations/page-animations';

const Collection = ({ collection }) => {
    const { title, items } = collection;
    return (
    <motion.div className="collection" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        <motion.h2 className="collection__title" variants={headingVariants} initial="initial" animate="final">{title}</motion.h2>
        <div className="collection__items">
            {
                items.map( item => (
                    <Product key={item.id} item={item}/>
                ))
            }
        </div>
    </motion.div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps) (Collection);