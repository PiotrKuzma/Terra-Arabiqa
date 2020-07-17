import React from "react";
import DirectoryItem from "../directory-item/directory-item";
import "./directory.style.scss";
import { connect } from 'react-redux';
import { selectCategory } from '../../redux/directory/directory.selectors';

const Directory = ({ category}) =>
 (
      <div className="directory">
        {category.map(({ id, ...rest }) => (
          <DirectoryItem key={id} {...rest} />
        ))}
      </div>
    );

    const mapStateToProps = (state) => ({
      category: selectCategory(state)
  })
export default connect(mapStateToProps)(Directory);
