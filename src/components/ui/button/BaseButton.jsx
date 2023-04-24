import React from "react";
import "./index.scss";

function BaseButton({ className = "", children, variant = "primary", icon }) {
  return (
    <button className={`base-button--${variant} ${className} `}>
      {children}
      {icon ? (
        <span>
          <img src={icon} alt="" />
        </span>
      ) : null}
    </button>
  );
}

export default BaseButton;
