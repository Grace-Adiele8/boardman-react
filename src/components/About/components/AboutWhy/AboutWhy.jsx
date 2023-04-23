import React from "react";
import WhyCard from "./WhyCard";
import "./index.scss";

function AboutWhy() {
  return (
    <div className="about-why">
      <div className="about-why__content">
        <div className="about-why__content__text">
          <p className="about-why__content__text__why">Why use Boardman</p>
          <p className="about-why__content__text__description">
            We’re your right trading advocate
          </p>
        </div>
        {cards.map((card, index) => (
          <WhyCard />
        ))}
      </div>
    </div>
  );
}

export default AboutWhy;
