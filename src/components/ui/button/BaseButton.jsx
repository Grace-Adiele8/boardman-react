import React from "react";
import "./index.scss";

function BaseButton({ className = "", children, variant = "primary" }) {
  return (
    <button className={`base-button--${variant} ${className} `}>
      {children}
    </button>
  );
}

export default BaseButton;
