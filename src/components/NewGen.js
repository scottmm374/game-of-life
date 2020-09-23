import React from "react";
import ControlPanel from "./ControlPanel";

const canvasWidth = 625;
const canvasHeight = 625;
const cell_size = 25;

const COLS = Math.floor(canvasHeight / cell_size);
const ROWS = Math.floor(canvasWidth / cell_size);

function NewGenGrid(grid) {
  // copy of grid
  const newGenGrid = grid.map((array) => [...array]);
  console.table(newGenGrid);

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      // console.log(cell);
      let neighbors = 0;

      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 || j === 0) {
            continue;
          }
          const x_cood = col + i;
          const y_cood = row + j;
          if (x_cood >= 0 && y_cood >= 0 && x_cood < COLS && y_cood < ROWS) {
            // console.log("Things are good");
            const alive = grid[x_cood][y_cood];
            neighbors += alive;
            console.log(alive, "alive");
          }
        }
      }

      if (cell === 1 && neighbors < 2) {
        // console.log(cell, "less then 2");
        newGenGrid[col][row] = 0;
        // console.log(" less then 2 should be 0", newGenGrid[col][row]);
      } else if (cell === 0 && neighbors === 3) {
        // console.log(cell, "dead cell has 3 neightbors");
        newGenGrid[col][row] = 1;
        // console.log(" Should be 1", newGenGrid[col][row]);
      } else if (cell === 1 && neighbors >= 4) {
        // console.log(cell, "too many neightbors");
        newGenGrid[col][row] = 0;
        // console.log(" Should be 0", newGenGrid[col][row]);
      }
    }
  }
  // console.table(newGenGrid);
  return newGenGrid;
}

export default NewGenGrid;
