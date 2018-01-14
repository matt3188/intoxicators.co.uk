import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
    </ul>
  );
};

export default Navigation;
