import React from "react";
import suitable from "../../../../assets/svg/suitable.svg";

function benefits() {
  return (
    <div className="benefits">
      <div className="benefits-content">
        <img src={suitable} alt="image" />
        <div className="benefits-content__text">
          <p className="bednefits-content__text__header">
            Simple and inexpensive
          </p>
          <p>
            With Boardman, you can either instantly invite a counterparty to a
            transaction or simply create a payment link to request or send
            payment securely and cost-effectively. Boardman offers maximum
            security and an abstracted process within your control to ensure
            that the terms of your transaction are met.
          </p>
        </div>
      </div>
    </div>
  );
}

export default benefits;
