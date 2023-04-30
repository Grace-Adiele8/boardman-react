import React from "react";
import developer from "../../../assets/svg/developer.svg";
import protecting from "../../../assets/svg/protecting.svg";
import "./index.scss";

function ApiAbout() {
  return (
    <div className="api-about app-container">
      <div className="api-about__content app-container__section">
        <div className="api-about__content__card  content-card">
          <div className="api-about__content__card__text">
            <p className="api-about__content__card__text__header">
              Built for developers, by developers
            </p>
            <p className="api-about__content__card__text__description">
              Any business can integrate the safety and security of escrow
              payments to their platform as simply as common payment methods
              such as Paystack, Flutterwave and so on.{" "}
            </p>
          </div>
          <div className="api-about__content__card__text__image">
            <img src={developer} alt="image" />
          </div>
        </div>
        <div className="api-about__content__card  content">
          <div className="api-about__content__card__text">
            <p className="api-about__content__card__text__header">
              Protecting both buyers and sellers
            </p>
            <p className="api-about__content__card__text__description">
              Using escrow, buyers get to inspect the goods or services before
              accepting them, protecting the buyer. Likewise, sellers are
              protected from counterparty risk by no chargeback, ever.{" "}
            </p>
          </div>
          <div className="api-about__content__card__text__image">
            <img src={protecting} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiAbout;
