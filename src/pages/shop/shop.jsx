import React from "react";
import './shop.style.scss';
import Overview from '../../components/overview/overview'
import { Route } from 'react-router-dom';
import Collection from '../../pages/collection/collection';

const Shop = ({ match })=> (
  <div className="shop">
    <Route exact path = {`${match.path}`} component={Overview}/>
    <Route path = {`${match.path}/:categoryId`} component={Collection}/>
  </div>
);

export default Shop;
