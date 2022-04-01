import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div class="header">
      <a href="#default" class="logo">
        LHC
      </a>
      <div class="header-right">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#test">Test</a>
        <a href="#Classes">Classes</a>
        <a href="#Profile">
          <span class="dot">P</span>
        </a>
      </div>
    </div>
  );
};

export default Header;