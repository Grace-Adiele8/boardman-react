import React from "react";
import ratings from "../../../../../assets/svg/star.svg";
import man from "../../../../../assets/images/man.png";
import airbnb from "../../../../../assets/svg/airbnb.svg";

import "./index.scss";

function HomeClient() {
  return (
    <div className="home-client app-container">
      <div className="home-client__content app-container__section">
        <img src={man} alt="client" />
        <div className="home-client__content__text">
          <h2 className="home-client__content__text__header">
            Clients Testimonials
          </h2>
          <img src={ratings} alt="icon" />
          <p className="home-client__content__text__description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
          </p>
          <div className="home-client__content__author">
            <div className="home-client__content__author__image">
              <img src={airbnb} alt="icon" />
            </div>
            <div className="home-client__content__author__text">
              <h3 className="home-client__content__author__text__header">
                David Herison
              </h3>
              <p className="home-client__content__author__text__title">
                Founder & CEO
              </p>
            </div>
          </div>
          <div className="home-client__content__story">
            <h4 className="home-client__content__story__header">Prev Story</h4>
            <h4 className="home-client__content__story__header">Next Story</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeClient;
