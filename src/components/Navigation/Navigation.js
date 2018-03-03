import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaClose } from 'react-icons/lib/fa';
import PhoneBreakpoint from 'utils/Responsive/PhoneBreakpoint';

import './navigation.css';

const Navigation = props => (
  <div className="navigation-container">
    <PhoneBreakpoint>
      <div className="header header-navigation">
        <FaClose className="nav-toggle" width="25" height="25" onClick={props.clickHandler} />
      </div>
    </PhoneBreakpoint>
    <ul className="navigation dashed-border">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/members">Our Members</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/calendar">Calendar</NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
