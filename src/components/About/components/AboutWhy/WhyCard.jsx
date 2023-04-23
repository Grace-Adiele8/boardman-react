import React from "react";

function WhyCard({ icon, title, description }) {
  return (
    <div className="why-card">
      <div className="why-card__content">
        <div className="why-card__content__icon">
          <img src={icon} alt="icon" />
        </div>
        <h2 className="why-card__content__header">{title}</h2>
        <p className="why-card__content__description">{description}</p>
      </div>
    </div>
  );
}

export default WhyCard;
