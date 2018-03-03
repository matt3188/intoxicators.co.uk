import React from 'react';
import { Link } from 'react-router-dom';
import LoginMenu from 'components/LoginMenu/LoginMenu';
import ShadowWrapper from 'utils/ShadowWrapper/ShadowWrapper';

import logo from './text-logo.png';

import './header.css';

const HeaderView = props => (
  <ShadowWrapper>
    <Link to="/">
      <img src={logo} className="text-logo" alt="Intoxicators logo" />
    </Link>
    <LoginMenu {...props} />
  </ShadowWrapper>
);

export default HeaderView;
