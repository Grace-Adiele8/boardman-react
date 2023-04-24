import React from "react";
import Benefits from "./benefits";

function AboutBenefits() {
  return (
    <div className="about-benefits">
      <div className="about-benefits__content  app-container">
        <div className="about-benefits__content__info app-container__section">
          <h3 className="about-benefits__content__text">Your Benefits</h3>
        </div>
      </div>
      <div className="about-benefits__content__base">
        <Benefits />
      </div>
    </div>
  );
}

export default AboutBenefits;
