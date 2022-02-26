import React from "react";
import Square from "../Square";
import css from "./board.module.css";

function Board({ board, onClick }) {
  return (
    <div className={css.BoardDiv}>
      {board.map((square, index) => {
        return (
          <Square
            className={css.Square}
            text={square}
            index={index}
            onClick={onClick}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Board;

//Board - create 9 squares on a board in a grid 3*3 - (create div and render 3 squares) - repeat 3 times
//create class names for each <Square> component
