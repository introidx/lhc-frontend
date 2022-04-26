import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="#default" className="logo">
        LHC
      </a>
      <div className="header-right">
        <a className="active" href="http://localhost:3000">
          Home
        </a>
        <a href="http://localhost:3000/test">Test</a>
        <a href="#Classes">Classes</a>
        <a href="#Profile">
          <span className="dot">P</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
