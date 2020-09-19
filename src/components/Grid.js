// import React from "react";

function CellGrid() {
  //   let cell_current = grid[x][y];
  const cell_size = 20;
  const height = 800;
  const width = 800;
  const rows = height / cell_size;
  const cols = width / cell_size;
  const x = 0;
  const y = 0;

  let neighbors = 0;

  let grid = new Array(cols).fill(null).map(() => new Array(rows).fill(0));
  let newGrid = new Array(cols).fill(null).map(() => new Array(rows).fill(0));

  let cell = grid[x][y];
  let newCell = newGrid[x][y];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      neighbors += cell[x + i][y + j];

      if (cell === 1 && neighbors < 2) {
        return newCell === 0;
      } else if (cell === 0 && neighbors === 3) {
        return newCell === 1;
      } else if (cell === 1 && neighbors >= 4) {
        return newCell === 0;
      }
    }
  }

  return grid;
}

export default CellGrid;
