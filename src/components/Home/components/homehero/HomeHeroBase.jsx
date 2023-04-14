import React from "react";
import "./index.scss";

function HomeHeroBase({ icon, text }) {
  return (
    <div className="home-base">
      <div className="home-base__icon">
        <img src={icon} alt="icon" />
      </div>
      <p className="home-base__description">{text}</p>
    </div>
  );
}

export default HomeHeroBase;
