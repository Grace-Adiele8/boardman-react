import React from "react";

function BaseInput({ className = "", placeholder }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={` base-input--${className}`}
      />
    </div>
  );
}

export default BaseInput;
