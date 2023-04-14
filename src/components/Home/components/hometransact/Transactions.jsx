import React from "react";

import "./index.scss";

function Transactions({ icon, header, description }) {
  return (
    <div className="transactions">
      <div className="transactions__content">
        <div className="transactions__content__icon">
          <img src={icon} alt="icon" />
        </div>
        <h2 className="transactions__content__header">{header}</h2>
        <p className="transactions__content__description">{description} </p>
      </div>
    </div>
  );
}

export default Transactions;
