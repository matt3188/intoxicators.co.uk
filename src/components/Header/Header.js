import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Auth from 'utils/Auth';

import Navigation from 'components/Navigation/Navigation';
import logo from './text-logo.png';

import './header.css';

const Header = () => (
  <div className="header">
    <Link to="/">
      <img src={logo} className="text-logo" alt="Intoxicators logo" />
    </Link>
    <div className="login">
      {!Auth.isAuthenticated && (
        <Button bsStyle="primary" className="btn-margin" onClick={Auth.login()}>
          Log In
        </Button>
      )}
      {Auth.isAuthenticated && (
        <Button bsStyle="primary" className="btn-margin" onClick={Auth.logout()}>
          Log Out
        </Button>
      )}
    </div>
    <Navigation />
  </div>
);

export default Header;
