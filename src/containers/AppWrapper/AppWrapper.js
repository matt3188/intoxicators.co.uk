import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { authActions } from '../../redux/modules/auth';
import { navigationActions } from '../../redux/modules/navigation';
import AppView from './AppWrapperView';

const mapStateToProps = state => ({
  menuState: state.navigation.menuState,
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: profile => dispatch(authActions.loginSuccess(profile)),
  loginError: error => dispatch(authActions.loginError(error)),
  toggleMenu: () => dispatch(navigationActions.toggleMenu()),
  closeMenu: () => dispatch(navigationActions.closeMenu()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppView));
