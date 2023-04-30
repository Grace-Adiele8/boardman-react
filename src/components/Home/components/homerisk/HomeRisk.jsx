import React from "react";
import Risk from "./Risk";
import "./index.scss";

function HomeRisk() {
  return (
    <div className="home-risk">
      <div className="home-risk__content">
        <div className="home-risk__content__text app-container__section">
          <h1 className="home-risk__content__text__header app-container">
            We eliminate risk equally for buyers and sellers
          </h1>
        </div>

        <div className="home-risk__content__risk">
          <Risk />
        </div>
      </div>
    </div>
  );
}

export default HomeRisk;
