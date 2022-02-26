import "./Game.css";
import { useState } from "react";
import Board from "../Board";
import Winner from "../Winner";
import { calculateWinner } from "../../helper";

function Game() {
  const square = [null, null, null, null, null, null, null, null, null];

  const [board, setBoard] = useState(square);

  const [move, setMove] = useState(true);

  const winner = calculateWinner(board);

  function onClick(index) {
    if (winner || !board[index]) {
      let moveValue = null;
      if (move) {
        moveValue = "X";
      } else {
        moveValue = "O";
      }
      setMove(!move);

      const newBoard = [
        ...board.slice(0, index),
        moveValue,
        ...board.slice(index + 1),
      ];
      setBoard(newBoard);
    }
  }

  return (
    <div>
      <Board board={board} onClick={onClick} />
      <Winner text={winner} />
    </div>
  );
}

export default Game;

//Create State
//create a board const with an array
//Check if square is null and allow change from null to X or O
