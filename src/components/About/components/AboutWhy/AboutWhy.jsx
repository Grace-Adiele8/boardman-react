import React from "react";
import WhyCard from "./WhyCard";
import "./index.scss";
import { cards } from "./constants";

function AboutWhy() {
  return (
    <div className="about-why app-container">
      <div className="about-why__content app-container__section">
        <div className="about-why__content__text">
          <p className="about-why__content__text__why">Why use Boardman</p>
          <p className="about-why__content__text__description">
            We’re your right trading advocate
          </p>
        </div>

        <div className="about-why__content__card">
          {cards.map((card, index) => (
            <WhyCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutWhy;
