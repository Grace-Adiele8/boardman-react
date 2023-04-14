import React from "react";
import BaseButton from "../../../../ui/button/BaseButton";

import arrow from "../../../../../assets/svg/right arrow.svg";
import HomeHeroBase from "./HomeHeroBase";
import "./index.scss";
import check from "../../../../../assets/images/shield.png";
import parcel from "../../../../../assets/images/parcel.png";
import country from "../../../../../assets/images/country.png";
import arrowdown from "../../../../../assets/images/arrow-down.jpg";

function HomeHero() {
  return (
    <div className="home-hero app-container hero">
      <div className="home-hero__content app-container__section">
        <div className="home-hero__content__text">
          <h1 className="hero-header">
            Protect your payments with a fully digital escrow{" "}
          </h1>
          <p className="hero-description">
            Boardman helps buyers and sellers engage in business that requires
            payments without the risks of chargebacks
          </p>
          <BaseButton className="home-hero__content__text__button">
            Get Started{" "}
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </BaseButton>
          <div className="home-hero__content__text__base">
            <HomeHeroBase
              icon={check}
              text="As a trusted third party, Boardman holds funds until the terms of a transaction are completed"
            />
            <HomeHeroBase
              icon={check}
              text="Boardman releases funds upon fully confirm the terms of a transaction as resolved"
            />
          </div>
        </div>
        <div className="home-hero__content__card rectangle">
          <p className="home-hero__content__card__text">I am</p>
          <div className="home-hero__content__card__slider tab-slider">
            <p className="tab-slider__text tab-active"> buying </p>
            <p className="tab-slider__text"> selling</p>
          </div>
          <div className="home-hero__content__card__input">
            <div className="home-hero__content__card__input__icon">
              <img src={parcel} alt="icon" />
            </div>
            <input
              type="text"
              placeholder="Enter product e.g iPhone, car, gold..."
            />
          </div>
          <div className="home-hero__content__card__option">
            <p>For</p>
            <div className="home-hero__content__card__input">
              <div className="home-hero__content__card__input__icon">
                <img src={country} alt="icon" />
              </div>
              <input type="text" placeholder="Enter amount" />
            </div>
            <div className="home-hero__content__card__option__currency">
              <p>USD</p>
              <img src={arrowdown} alt="icon" />
            </div>
          </div>
          <BaseButton className="home-hero__content__card__button">
            Create Transaction
          </BaseButton>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
