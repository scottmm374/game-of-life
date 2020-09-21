import React, { useState } from "react";

const cell_size = 25;
const height = 250;
const width = 250;
const rows = height / cell_size;
const cols = width / cell_size;

function CellGrid() {
  const [grid] = useState(
    new Array(cols).fill(null).map(() => new Array(rows).fill(0))
  );

  // copy of grid
  const newGrid = grid.map((array) => [...array]);
  let neighbors = 0;

  for (let col = 0; col < height; col++) {
    for (let row = 0; row < width; row++) {
      const cell = grid[col][row];

      for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 1; j++) {
          if (i === 0 || j === 0) {
            continue;
          }
          const x_cood = col + i;
          const y_cood = row + j;
          if (x_cood >= 0 && y_cood >= 0 && x_cood < cols && y_cood < rows) {
            const alive = grid[col + 1][row + 1];
            neighbors += alive;
          }

          if (cell === 1 && neighbors < 2) {
            newGrid[col][row] = 0;
          } else if (cell === 0 && neighbors >= 2 && neighbors <= 3) {
            newGrid[col][row] = 1;
          } else if (cell === 1 && neighbors >= 4) {
            newGrid[col][row] = 0;
          }
        }
      }
    }
  }

  return newGrid;
}

export default CellGrid;

// if (grid[col - 1][row - 1] === 1) {
//   neighbors = neighbors += 1;
// }
// if (grid[col][row - 1] === 1) {
//   neighbors = neighbors += 1;
// }
// if (grid[col + 1][row - 1] === 1) {
//   neighbors = neighbors += 1;
// }

// if (grid[col - 1][row] === 1) {
//   neighbors = neighbors += 1;
// }
// if (grid[col + 1][row] === 1) {
//   neighbors = neighbors += 1;
// }
// if (grid[col - 1][row + 1] === 1) {
//   neighbors = neighbors += 1;
// }
// if (grid[col][row + 1] === 1) {
//   neighbors = neighbors += 1;
// }
// if (grid[col + 1][row + 1] === 1) {
//   neighbors = neighbors += 1;
// }
