import React from "react";
import "./index.scss";
import facebook from "./../../../assets/svg/facebook.svg";
import twitter from "../../../assets/svg/twitter.svg";
import linkedin from "../../../assets/svg/linkedin.svg";
import instagram from "../../../assets/svg/instagram.svg";

function Socials({ className = "" }) {
  return (
    <ul className={`socials ${className}`}>
      <li>
        <a href="/">
          <img src={facebook} alt="socials" className="socials__icon" />
        </a>
      </li>
      <li>
        <a href="/">
          <img src={twitter} alt="socials" className="socials__icon" />
        </a>
      </li>
      <li>
        <a href="/">
          <img src={linkedin} alt="socials" className="socials__icon" />
        </a>
      </li>
      <li>
        <a href="/">
          <img src={instagram} alt="socials" className="socials__icon" />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
