import React, { useEffect, useState } from "react";
import CellGrid from "./Cell";

const cell_size = 10;
const boardWidth = 60;
const boardHeight = 60;
const cols = Math.floor(boardWidth / cell_size);
const rows = Math.floor(boardHeight / cell_size);

export function Board() {
  const [initialGrid] = useState(
    new Array(cols)
      .fill(null)
      .map(() => new Array(rows).fill(Math.round(Math.random())))
  );

  useEffect(() => {
    function createBoard(grid) {
      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];

          console.log(cell ? "alive" : null);
        }
      }
    }
    createBoard(initialGrid);
  }, [initialGrid]);

  console.log(initialGrid, "initialGrid");

  return (
    <div className="cell">
      {/* need to map the grid in I think */}
      <CellGrid grid={initialGrid} />
    </div>
  );
}
