import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <ul className="navigation dashed-border">
    <li>
      <NavLink to="/">Home</NavLink>
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
);

export default Navigation;
