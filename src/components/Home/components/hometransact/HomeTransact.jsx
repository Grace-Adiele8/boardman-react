import React from "react";
import "./index.scss";
import Transactions from "./Transactions";
import { transactions } from "./constants";

function HomeTransact() {
  return (
    <div className="home-transact app-container">
      <div className="home-transact__content app-container__section">
        <h2 className="home-transact__content__header">Transact With Ease</h2>
        <p className="home-transact__content__description">
          Boardman can be used to pay for just about anything, from goods,
          services by importers, exporters, traders, marketplaces, trade
          partners.
        </p>
        <div className="home-transact__content__transactions">
          {transactions.map((transaction, index) => (
            <Transactions
              key={index}
              icon={transaction.icon}
              header={transaction.header}
              description={transaction.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeTransact;
