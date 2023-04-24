import React from "react";
import "./index.scss";
import { benefits } from "./constants";
import BaseButton from "../../../ui/button/BaseButton";
import arrow from "../../../../assets/svg/right arrow.svg";

function Benefits() {
  return (
    <>
      {benefits?.map((benefit, index) => (
        <div className="benefits" key={index}>
          <div className="benefits__base">
            <div className="benefits__base__content">
              <div className="benefits__base__content__image">
                <img src={benefit.image} alt="image" />
              </div>
              <div className="benefits__base__content__text">
                <p className="benefits__base__content__text__header">
                  {benefit.title}
                </p>
                <p className="benefits__base__content__text__description">
                  {benefit.description}
                </p>
                <BaseButton className="base-button--primary benefits__base__content__text__button">
                  Get Started
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>{" "}
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Benefits;
