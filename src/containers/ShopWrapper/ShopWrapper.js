import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { cartActions } from '../../redux/modules/cart';
import ShopWrapperView from './ShopWrapperView';

const mapDispatchToProps = dispatch => ({
  receiveProducts: products => dispatch(cartActions.receiveProducts(products)),
});

export default withRouter(
  connect(
    null, // no mapStateToProps
    mapDispatchToProps
  )(ShopWrapperView)
);
