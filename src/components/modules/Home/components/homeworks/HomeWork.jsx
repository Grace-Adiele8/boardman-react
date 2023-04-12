import React from "react";
import bookings from "../../../../../assets/svg/bookings.svg";
import curvedarrow from "../../../../../assets/svg/curvedarrow.svg";
import "./index.scss";

function HomeWork({ image1, image2, header, description }) {
  return (
    <div className="home-work">
      <div className="home-work__content ">
        <div className="home-work__content__images">
          <img src={image1} alt="pictures" className="image sell" />
          <img src={image2} alt="pictures" className="image buy" />
          <div className="home-work__content__bookings">
            <img src={bookings} alt="text" />
            <img src={curvedarrow} alt="icon" />
          </div>
        </div>

        <div className="home-work__content__text">
          <h3 className="home-work__content__text__header">{header}</h3>
          <p className="home-work__content__text__description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeWork;
