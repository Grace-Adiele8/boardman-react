import React from "react";
import BaseButton from "../button/BaseButton";
import "./index.scss";
import Logo from "../logo/Logo";

function NavBar() {
  return (
    <div className="nav-bar app-container">
      <div className="nav-bar__content app-container__section">
        <div className="nav-bar__content__links">
          <Logo />
          <ul className="nav-links">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Escrow API</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Fees</a>
            </li>
          </ul>
        </div>
        <div className="nav-bar__content__button">
          <BaseButton variant="secondary">Sign In</BaseButton>
          <BaseButton>Register</BaseButton>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
