import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import AuthService from 'utils/AuthService';

import logo from './text-logo.png';

import './header.css';

class HeaderView extends Component {
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
      <div className="header">
        <Link to="/">
          <img src={logo} className="text-logo" alt="Intoxicators logo" />
        </Link>
        <div className="login">
          {auth.isAuthenticated ? (
            <div>
              <Button onClick={this.goToProfile}>My Profile</Button>
              <Button onClick={this.handleLogoutClick}>Logout</Button>
            </div>
          ) : (
            <Button onClick={this.handleLoginClick}>Login</Button>
          )}
          {auth.error && <p>{JSON.stringify(auth.error)}</p>}
        </div>
      </div>
    );
  }
}

export default HeaderView;
