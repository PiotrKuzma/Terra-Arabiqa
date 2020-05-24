import React from "react";
import ShopInventory from "./shop.inventory";
import Preview from "../../components/preview/preview";

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
      <div className="shop">
        {collection.map(({ id, ...rest }) => (
          <Preview key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default Shop;
