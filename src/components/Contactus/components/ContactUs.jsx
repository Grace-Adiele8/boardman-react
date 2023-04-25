import React from "react";
import "./index.scss";
import BaseButton from "../../ui/button/BaseButton";
import message from "../../../assets/svg/message.svg";

function ContactUs() {
  return (
    <div className="contact-us ">
      <div className="contact-us__content app-container">
        <div className="contact-us__content__text app-container__section">
          <p className="contact-us__content__text__header">
            We’re here to help
          </p>
          <p className="contact-us__content__text__description">
            Contact us if you have any questions about our company or products.
            We will try to provide an answer within a few days.
          </p>
        </div>
      </div>
      <div className="contact-us__content__card">
        <form className="contact-us__content__card__form">
          <label className="contact-us__content__card__form__label">
            <p>Full name *</p>
            <input type="text" placeholder="Julia William" />
          </label>

          <label className="contact-us__content__card__form__label">
            <p>Email *</p>
            <input type="email" placeholder="you@example.com" />
          </label>

          <label className="contact-us__content__card__form__label">
            <p>Company *</p>
            <input type="text" placeholder="UI Designer" />
          </label>

          <label className="contact-us__content__card__form__label">
            <p>Enter Message*</p>
            <textarea placeholder="How can we help you"></textarea>
          </label>
          <BaseButton className="base-button--primary contact-us__content__card__form__button">
            <span>
              <img src={message} alt="icon" />
            </span>
            Send Message
          </BaseButton>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
