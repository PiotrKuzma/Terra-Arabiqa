import React from "react";
import './shop.style.scss';
import Overview from '../../components/overview/overview'
import { Route } from 'react-router-dom';
import Collection from '../../pages/collection/collection';
import Description from '../../pages/description/description';
import { selectDescriptionHidden } from '../../redux/description/description-selectors'
import { connect } from "react-redux";

const Shop = ({ match, hidden })=> (
  <div className="shop">
    <Route exact path = {`${match.path}`} component={Overview}/>
    <Route path = {`${match.path}/:categoryId`} component={Collection}/>
    { hidden? null : <Description/> }
  </div>
);

const mapStateToProps = (state) => ({
  hidden: selectDescriptionHidden(state)
})

export default connect(mapStateToProps) (Shop);
