import React from "react";
import "./index.scss";
import { prices } from "./constant";

function pricing() {
  return (
    <>
      {prices?.map((price, index) => (
        <div className="pricing" key={index}>
          <div className="pricing-content">
            <p className="pricing-content__header">
              <span>
                <img src={price.image} alt="icon" />
              </span>
              {price.title}
            </p>
          </div>

          <div className="pricing-content__title" key={index}>
            {price.headers?.map((header, index) => (
              <p
                className="title"
                key={index}
                data-wide={price.headers.length < 4}
              >
                {header}
              </p>
            ))}
          </div>

          <div className="pricing-content__price">
            {price.data?.map((amount, index) => (
              <div className="pricing-content__price__data" key={index}>
                {amount?.map((col, index) => (
                  <p className="data" data-wide={amount.length < 4} key={index}>
                    {col}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default pricing;
