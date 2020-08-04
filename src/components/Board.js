import React from "react";
import Square from "./Square";

const Board = (props) => {
  return (
    <div className="board">
      {props.square.map((square, i) => (
        <Square key={i} value={square} onClick={() => props.onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
