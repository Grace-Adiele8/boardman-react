import React from "react";
import HomeWork from "./HomeWork";
import "./index.scss";
import { steps } from "./constant";

function HomeWorks() {
  return (
    <div className="home-works">
      <div className="home-works__content">
        <div className="home-works__content__text  app-container">
          <h2 className="home-works__content__text__heading">How it works</h2>
        </div>
        <div className="home-works__content__payment">
          {steps.map((step, index) => (
            <HomeWork
              key={index}
              image1={step.image1}
              image2={step.image2}
              header={step.header}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeWorks;
