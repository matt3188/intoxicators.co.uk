import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

import ProductData from 'utils/ProductData';
import CartAPI from 'utils/CartAPI';

class ShopWrapperView extends Component {
  componentWillMount() {
    ProductData.init();

    CartAPI.getProductData();
  }

  render() {
    return (
      <div className="shop">
        <pre>Hello World</pre>
      </div>
    );
  }
}
export default ShopWrapperView;
