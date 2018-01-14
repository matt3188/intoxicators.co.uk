import React from "react";
import { Link } from "react-router-dom";
import logo from "../text-logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="text-logo" alt="logo" />
      </Link>

      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
