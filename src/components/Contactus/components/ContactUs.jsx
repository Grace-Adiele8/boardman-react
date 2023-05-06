import React from "react";
import "./index.scss";
import BaseButton from "../../ui/button/BaseButton";
import message from "../../../assets/svg/message.svg";
import Socials from "../../ui/socials/Socials";
import location from "../../../assets/svg/location.svg";
import locator from "../../../assets/svg/u_location-point.svg";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us__content">
        <div className="contact-us__content__help app-container">
          <div className="contact-us__content__help__text  app-container__section">
            <p className="contact-us__content__help__text__header">
              We’re here to help
            </p>
            <p className="contact-us__content__help__text__description">
              Contact us if you have any questions about our company or
              products. We will try to provide an answer within a few days.
            </p>
          </div>
          <div className="contact-us__content__contact__card">
            <form className="contact-us__content__contact__card__form">
              <label className="contact-us__content__contact__card__form__label">
                <p>Full name *</p>
                <input type="text" placeholder="Julia William" />
              </label>

              <label className="contact-us__content__contact__card__form__label">
                <p>Email *</p>
                <input type="email" placeholder="you@example.com" />
              </label>

              <label className="contact-us__content__contact__card__form__label">
                <p>Company *</p>
                <input type="text" placeholder="UI Designer" />
              </label>

              <label className="contact-us__content__contact__card__form__label">
                <p>Enter Message*</p>
                <textarea placeholder="How can we help you"></textarea>
              </label>
              <BaseButton className="base-button--primary contact-us__content__contact__card__form__button">
                <span>
                  <img src={message} alt="icon" />
                </span>
                Send Message
              </BaseButton>
            </form>
          </div>
        </div>
        <div className="contact-us__content__contact">
          <div className="contact-us__content__contact__image">
            <img src={location} alt="map" className="location" />
            <div className="contact-us__content__contact__image__background">
              <img src={locator} alt="icon" className="locator" />
              <div className="contact-us__content__contact__image__background__info">
                <p>Suite 406, Nawa Complex, Jahi, F.C.T, Abuja</p>
                <p>+234 814 600 7319</p>
                <p className="contact-info">support@boardmanapp.com</p>
              </div>
            </div>
          </div>
          <div className="contact-us__content__contact__socials">
            <Socials className="contact-socials" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
