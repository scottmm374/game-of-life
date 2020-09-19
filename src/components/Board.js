import React, { useState } from "react";
import Cell from "./Cell";

const cell = 20;
const boardWidth = 800;
const boardHeight = 600;
// const COLS = Math.floor(boardWidth / cell);
// const ROWS = Math.floor(boardHeight / cell);

export function Board() {
  // const [generation, setGeneration] = useState(0);

  // const [newGrid, setNewGrid] = useState();

  return (
    <div>
      <Cell />
    </div>
  );
}
