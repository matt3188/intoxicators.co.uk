import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Navigation from 'components/Navigation/Navigation';
import logo from './text-logo.png';

import './header.css';

class Header extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    this.props.history.push({ pathname: '/' });
  }

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
            <Button bsStyle="primary" className="btn-margin" onClick={this.logout.bind(this)}>
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