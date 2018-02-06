import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from 'components/Navigation';
import logo from 'images/text-logo.png';

import { Button } from 'react-bootstrap';
import './header.css';

class Header extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    console.log(this.props.auth);
    this.props.auth.login();
  }

  handleLogoutClick = () => {
    this.props.auth.logout();
    this.props.history.push({ pathname: '/' });
  };

  renewToken() {
    this.props.auth.renewToken();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="header">
        <Link to="/">
          <img src={logo} className="text-logo" alt="Intoxicators logo" />
        </Link>
        <div className="login">
          {!isAuthenticated() && (
            <Button bsStyle="primary" className="btn-margin" onClick={this.login.bind(this)}>
              Log In
            </Button>
          )}
          {isAuthenticated() && (
            <Button bsStyle="primary" className="btn-margin" onClick={this.handleLogoutClick}>
              Log Out
            </Button>
          )}
        </div>
        <Navigation />
      </div>
    );
  }
}
export default Header;
