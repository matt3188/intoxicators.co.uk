import React from 'react';
import { Link } from 'react-router-dom';
import LoginMenu from 'components/LoginMenu/LoginMenu';

import logo from './text-logo.png';

import './header.css';

const HeaderView = props => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="text-logo" alt="Intoxicators logo" />
      </Link>
      <LoginMenu {...props} />
    </div>
  );
};

export default HeaderView;
