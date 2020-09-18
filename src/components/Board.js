import React from "react";

const Board = () => {
  const CELL_SIZE = 20;
  const WIDTH = 800;
  const HEIGHT = 600;
  return (
    <div
      className="board"
      style={{
        width: WIDTH,
        height: HEIGHT,
        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
      }}
    ></div>
  );
};

export default Board;
