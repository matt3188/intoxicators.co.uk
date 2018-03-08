import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShadowWrapper from 'utils/ShadowWrapper/ShadowWrapper';

import { Alert, Button } from 'reactstrap';
import { FaUser, FaSignOut } from 'react-icons/lib/fa/';

import * as AuthService from 'utils/AuthService/AuthService';

import logo from './text-logo.png';
import './header.css';

class HeaderView extends Component {
  handleLoginClick = () => {
    AuthService.login();
    this.props.loginRequest();
  };

  handleLogoutClick = () => {
    this.props.logoutSuccess();
    AuthService.logout();
    this.props.history.push({ pathname: '/' });
  };

  goToProfile = () => {
    this.props.history.push({ pathname: '/profile' });
  };

  render() {
    const { auth } = this.props;
    return (
      <ShadowWrapper>
        <Link to="/">
          <img src={logo} className="text-logo" alt="Intoxicators logo" />
        </Link>
        {auth.isAuthenticated ? (
          <div>
            <Button className="mr-2" onClick={this.goToProfile}>
              <FaUser />
            </Button>
            <Button onClick={this.handleLogoutClick}>
              <FaSignOut />
            </Button>
          </div>
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

export default HeaderView;
