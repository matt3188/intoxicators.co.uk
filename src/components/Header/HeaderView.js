import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import AuthService from 'utils/AuthService';

import Navigation from 'components/Navigation/Navigation';
import logo from './text-logo.png';

import './header.css';

class HeaderView extends Component {
  constructor() {
    super();

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
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
              <img src={auth.profile.picture} height="40px" alt="profile" />
              <span>Welcome, {auth.profile.nickname}</span>
              <Button onClick={this.handleLogoutClick}>Logout</Button>
            </div>
          ) : (
            <Button onClick={this.handleLoginClick}>Login</Button>
          )}
          {auth.error && <p>{JSON.stringify(auth.error)}</p>}
        </div>
        <Navigation />
      </div>
    );
  }
}

export default HeaderView;
