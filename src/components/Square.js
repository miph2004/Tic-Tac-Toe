import React from "react";

const Square = ({ value, onClick }) => {
  const animation = `${value}-animation`;

  return (
    <button className="squares" onClick={onClick}>
      <p class={animation}>{value}</p>
    </button>
  );
};
export default Square;
