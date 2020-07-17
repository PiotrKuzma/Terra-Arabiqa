import React from 'react';
import "./collection.scss"
import Product from '../../components/product/product';
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector';


const Collection = ({ collection }) => {
    const { title, items } = collection;
    return (
    <div className="collection">
        <h2 className="collection__title">{title}</h2>
        <div className="collection__items">
            {
                items.map( item => (
                    <Product key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps) (Collection);