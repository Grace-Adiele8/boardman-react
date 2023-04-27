import React from "react";
import shield1 from "../../../../assets/images/shield2.png";
import "./index.scss";

function HomePartners() {
  return (
    <div className="home-partners app-container">
      <div className="home-partners__content app-container__section">
        <div className="home-partners__content__text">
          <h3 className="home-partners__content__text__header">
            Transact with verified Partners
          </h3>
          <p className="home-partners__content__text__description">
            With Boardman, all partners are verified at the highest level
            especially for businesses. Also, you can run checks on Businesses
            via their business names or registration number. Find out company
            status, registration details, shareholder information, and much
            more.
          </p>
        </div>
        <img src={shield1} alt="shield" />
      </div>
    </div>
  );
}

export default HomePartners;
