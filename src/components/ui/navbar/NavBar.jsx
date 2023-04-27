import React from "react";
import BaseButton from "../button/BaseButton";
import "./index.scss";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar app-container">
      <div className="nav-bar__content app-container__section">
        <div className="nav-bar__content__links">
          <Logo />
          <ul className="nav-links">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/API">Escrow API</Link>
            </li>
            <li>
              <Link to="/Contactus">Contact Us</Link>
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
