import React from "react";
import Benefits from "./benefits";

function AboutBenefits() {
  return (
    <div className="about-benefits">
      <div className="about-benefits__content">
        <p className="about-benefits__content__text app-container">
          Your Benefits
        </p>
        <Benefits />
      </div>
    </div>
  );
}

export default AboutBenefits;
