import React from "react";
import { Link } from "react-router-dom";
import Navigation from "components/Navigation";
import logo from "images/text-logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="text-logo" alt="logo" />
      </Link>

      <Navigation />
    </div>
  );
};

export default Header;
