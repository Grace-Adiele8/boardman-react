import React from "react";
import arrow from "../../../../assets/svg/right arrow.svg";

function AboutHero() {
  return (
    <div className=" about-hero app-container">
      <div className=" about-hero__content app-container__section">
        <div className="about-hero__content__text">
          <h1 className="about-hero__content__text__header">
            Sed conseq mi ligula, a sagittis metus interdum sit amet.
          </h1>
          <p className="about-hero__content__text__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed conseq
            mi ligula, a sagittis metus interdum sit amet.{" "}
          </p>
          <BaseButton className="about-hero__content__text__button">
            Get Started
            <span>
              <img src={arrow} alt="arrow" />
            </span>
          </BaseButton>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
