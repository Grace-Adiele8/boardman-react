import React from "react";
import tick from "../../../../assets/svg/tick.svg";
import { risks } from "./constants";

function Risk() {
  return (
    <>
      {risks?.map((risk, index) => (
        <div className="risk" key={index}>
          <div className="risk__content">
            <div className="risk__content__images">
              <img src={risk.image} alt="image" />
            </div>
            <div className="risk__content__text">
              <h2 className="risk__content__text__title">{risk.header}</h2>

              <div className="risk__content__text__descriptions">
                {risk.descriptions.map((description, index) => (
                  <p key={index}>
                    <span>
                      <img src={tick} alt="icon" />
                    </span>
                    {description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Risk;
