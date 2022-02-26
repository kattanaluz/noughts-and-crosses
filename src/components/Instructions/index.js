import React, { useState } from "react";
import css from "./Instructions.module.css";

function Instructions() {
  const [state, setState] = useState(false);

  return (
    <div>
      <button
        className={css.instructionsButton}
        onClick={() => {
          setState(!state);
        }}
      >
        see instructions
      </button>
      {state ? (
        <p>
          Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil
          game for two players who take turns marking the spaces in a
          three-by-three grid with X or O. The player who succeeds in placing
          three of their marks in a horizontal, vertical, or diagonal row is the
          winner.
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Instructions;
