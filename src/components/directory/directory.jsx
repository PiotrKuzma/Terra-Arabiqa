import React from "react";

import DirectoryItem from "../directory-item/directory-item";

import "./directory.style.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      category: [
        {
          title: "kawa prażona",
          imageUrl:
            "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
          id: 1,
          linkUrl: "kawa",
        },
        {
          title: "kawiarki",
          imageUrl:
            "https://images.unsplash.com/photo-1491755276353-97642ec79167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
          id: 2,
          linkUrl: "kawiarki",
        },
        {
          title: "akcesoria",
          imageUrl:
            "https://images.unsplash.com/photo-1515592302748-6c5ea17e2f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          id: 3,
          linkUrl: "akcesoria",
        },
        {
          title: "zestawy",
          imageUrl:
            "https://images.unsplash.com/photo-1439242088854-0c76045f4124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

          id: 4,
          linkUrl: "zestawy",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.category.map(({ id, ...rest }) => (
          <DirectoryItem key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default Directory;
