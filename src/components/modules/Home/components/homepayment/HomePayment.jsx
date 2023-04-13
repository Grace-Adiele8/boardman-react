import React from "react";
import "./index.scss";
import PaymentCard from "./PaymentCard";
import calendar from "../../../../../assets/svg/calendar.svg";
import approved from "../../../../../assets/svg/approved.svg";

function HomePayment() {
  return (
    <div className="home-payment app-container">
      <div className="home-payment__content app-container__section">
        <div className="home-payment__content__text">
          <h2 className="home-payment__content__text__header">
            Milestone Payments
          </h2>
          <p className="home-payment__content__text__description">
            With Boardman, you can pay for goods and services and have funds
            released at certain points in time, subject to approvals. Use
            Boardman to ensure that funds are only released when you’re happy
            with each step!.
          </p>
        </div>
        <div className="home-payment__content__card">
          <PaymentCard
            icon={calendar}
            header="Time/Date based disbursement"
            description="Funds are only released at certain points in time, set while you created your transaction."
          />
          <PaymentCard
            icon={approved}
            header="Approval based disbursement"
            description="Funds are only released after the necessary approvals have been given."
          />
        </div>
      </div>
    </div>
  );
}

export default HomePayment;
