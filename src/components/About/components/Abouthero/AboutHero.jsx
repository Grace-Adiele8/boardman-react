import React from "react";
import arrow from "../../../../assets/svg/right arrow.svg";
import BaseButton from "../../../ui/button/BaseButton";
import heroimage from "../../../../assets/svg/About Image.svg";
import "./index.scss";

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
          <BaseButton className="base-button--primary">
            Get Started
            <span>
              <img src={arrow} alt="arrow" />
            </span>{" "}
          </BaseButton>
        </div>
        <div className="about-hero__content__image rectangle">
          <div className="about-image">
            <img src={heroimage} alt="hero image" />
          </div>
          <div className="about-hero__content__image__description">
            <p className="image-description">
              Laoreet porttitor hendrerit arcu congue nec. Ultrices sapien nisi
              cras leo urna purus scelerisque. Viverra commodo vitae
              pellentesque mattis imperdiet morbi orci posuere dui. Auctor sit
              quis arcu tristique{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
