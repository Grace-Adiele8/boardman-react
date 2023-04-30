import React from "react";
import "./index.scss";
import Logo from "../logo/Logo";
import Socials from "../socials/Socials";

function Footer() {
  return (
    <div className="footer app-container">
      <div className="footer__content">
        <div className="footer__content__links">
          {" "}
          <div className="footer__content__links__about">
            <Logo />
            <h2 className="footer__content__links__about__header">
              About Boardman
            </h2>
            <p className="footer__content__links__about__description">
              Engage in business that requires payments without the risks of
              chargebacks.
            </p>
          </div>
          <div className="footer__content__links__page">
            <p className="title">Support</p>
            <ul className="links">
              <li className="link">
                {" "}
                <a href="/">Help</a>
              </li>
              <li className="link">
                {" "}
                <a href="/">FAQs</a>
              </li>
              <li className="link">
                {" "}
                <a href="/">Contact Us</a>
              </li>
              <li className="link">
                {" "}
                <a href="/">Payment Options</a>
              </li>
            </ul>
          </div>
          <div className="footer__content__links__page company">
            <p className="title">Company</p>
            <ul className="links">
              <li className="link">
                {" "}
                <a href="/">About Us</a>
              </li>
              <li className="link">
                {" "}
                <a href="/">Why Us</a>
              </li>
              <li className="link">
                {" "}
                <a href="/">Insurance</a>
              </li>
              <li className="link">
                {" "}
                <a href="/">Virtual Warehouse</a>
              </li>
            </ul>
          </div>
          <div className="footer__content__links__page">
            <p className="title">Legal</p>

            <ul className="links">
              <li className="link">
                {" "}
                <a href="/">Privacy Policy</a>
              </li>
              <li className="link">
                {" "}
                <a href="/">Terms of Service</a>
              </li>
              <li className="link">
                {" "}
                <a href="/">AML Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__content__bottom">
          <p>© 2021 Boardman Technologies Ltd. All rights reserved.</p>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Footer;
