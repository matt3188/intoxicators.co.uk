import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <ul className="navigation">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/calendar">Calendar</Link>
    </li>
  </ul>
  );

export default Navigation;
