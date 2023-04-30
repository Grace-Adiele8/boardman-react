import React from "react";

import "./index.scss";

function Transactions({ icon, header, description }) {
  return (
    <div className="transactions-content">
      <div className="transactions-content__icon">
        <img src={icon} alt="icon" />
      </div>
      <h2 className="transactions-content__header">{header}</h2>
      <p className="transactions-content__description">{description} </p>
    </div>
  );
}

export default Transactions;
