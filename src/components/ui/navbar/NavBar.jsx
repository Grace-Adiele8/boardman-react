import React, { useState } from "react";
import BaseButton from "../button/BaseButton";
import "./index.scss";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
// import menu from "../../../assets/svg/Menu.svg";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };

  return (
    <div className="nav-bar app-container">
      <div className="nav-bar__content app-container__section">
        <Logo />

        <div className={`nav-bar__content__links ${nav ? "active" : ""}`}>
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

          <div className="nav-bar__content__links__button">
            <BaseButton variant="secondary">Sign In</BaseButton>
            <BaseButton>Register</BaseButton>
          </div>
        </div>
        <button onClick={handleToggle} className={`menu ${nav ? "open" : ""}`}>
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.1" width="40" height="32" rx="5" fill="#0C204C" />
            <path
              className="line top"
              d="M11 22H29"
              stroke="#0C204C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="line middle"
              d="M11 16H29"
              stroke="#0C204C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="line bottom"
              d="M11 10H29"
              stroke="#0C204C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
