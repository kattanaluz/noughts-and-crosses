import React from "react";

function Square({ onClick, text, index, className }) {
  return (
    <div>
      <button
        index={index}
        onClick={() => {
          onClick(index);
        }}
        className={className}
      >
        {text}
      </button>
    </div>
  );
}

export default Square;
