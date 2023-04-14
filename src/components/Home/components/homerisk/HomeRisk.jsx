import React from "react";
import Risk from "./Risk";
// import { risks } from "./constants";
import "./index.scss";

function HomeRisk() {
  return (
    <div className="home-risk">
      <div className="home-risk__content">
        <div className="home-risk__content__text app-container__section">
          <h1 className="home-risk__content__text__header">
            We eliminate risk equally for buyers and sellers
          </h1>
        </div>

        <div className="home-risk__content__risk">
          <Risk />
          {/* {risks.map((risk, index) => (
            <Risk
              key={index}
              image1={risk.image}
              header={risk.header}
              description={risk.description}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default HomeRisk;
