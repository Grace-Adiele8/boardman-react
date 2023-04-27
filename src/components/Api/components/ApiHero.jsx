import React from "react";
import comingsoon from "../../../assets/svg/coming soon.svg";
import laptop from "../../../assets/svg/laptop.svg";
import "./index.scss";

function ApiHero() {
  return (
    <div className="api-hero">
      <div className="api-hero__content">
        <div className="api-hero__content__text">
          <p className="api-hero__content__text__description">
            Enable escrow payments on your website, market place, classified
            site, shopping cart or mobile apps.
          </p>
          <div className="api-hero__content__text__image">
            <img src={comingsoon} alt="image" />
          </div>
        </div>
        <div className="api-hero__content__network">
          <div className="api-hero__content__network__image">
            <img src={laptop} alt="image" />
          </div>
          <div className="api-hero__content__network__background"></div>
        </div>
      </div>
    </div>
  );
}

export default ApiHero;
