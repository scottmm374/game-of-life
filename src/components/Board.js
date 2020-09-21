import React, { useEffect, useState } from "react";
// import CellGrid from "./Cell";

const cell_size = 25;
const height = 250;
const width = 250;
const cols = Math.floor(width / cell_size);
const rows = Math.floor(height / cell_size);

export function Board() {
  const [grid] = useState(
    new Array(cols).fill(null).map(() => new Array(rows).fill(0))
  );

  function createBoard(gridOption) {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {}
    }
  }

  createBoard(grid);

  console.log(grid, "initialGrid");

  return (
    <>
      {grid.map((cell) => (
        <div className="cell">{cell}</div>
      ))}
    </>
  );
}
