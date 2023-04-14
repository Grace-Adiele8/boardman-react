import React from "react";
import "./index.scss";

function PaymentCard({ icon, header, description }) {
  return (
    <div className="payment-card">
      <div className="payment-card__content">
        <img src={icon} alt="icon" />
        <div className="payment-card__content__text">
          <h2 className="payment-card__content__text__header">{header}</h2>
          <p className="payment-card__content__text__description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
