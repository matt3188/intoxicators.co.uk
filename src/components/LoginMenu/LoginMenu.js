import React, { Component } from 'react';
import AuthService from 'utils/AuthService';
import ShadowWrapper from 'utils/ShadowWrapper/ShadowWrapper';

import { Alert, Button } from 'reactstrap';
import { FaUser, FaSignOut } from 'react-icons/lib/fa/';

class LoginMenu extends Component {
  constructor() {
    super();

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
  }

  handleLoginClick() {
    this.props.authService.login();
    this.props.loginRequest();
  }

  handleLogoutClick() {
    this.props.logoutSuccess();
    AuthService.logout();
    this.props.history.push({ pathname: '/' });
  }

  goToProfile() {
    this.props.history.push({ pathname: '/profile' });
  }

  render() {
    const { auth } = this.props;
    return (
      <ShadowWrapper>
        {auth.isAuthenticated ? (
          <ShadowWrapper>
            <Button onClick={this.goToProfile}>
              <FaUser />
            </Button>
            <Button onClick={this.handleLogoutClick}>
              <FaSignOut />
            </Button>
          </ShadowWrapper>
        ) : (
          <Button onClick={this.handleLoginClick}>
            <FaUser />
          </Button>
        )}
        {auth.error && <Alert color="danger">{JSON.stringify(auth.error)}</Alert>}
      </ShadowWrapper>
    );
  }
}

export default LoginMenu;
