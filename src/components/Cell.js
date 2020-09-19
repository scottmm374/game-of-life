import React, { useState } from "react";

const cell_size = 10;
const height = 60;
const width = 60;
const rows = height / cell_size;
const cols = width / cell_size;

function CellGrid({ grid }) {
  const newGrid = grid.map((arr) => [...arr]);

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];

      let neighbors = 0;

      for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 1; j++) {
          if (i === 0 || j === 0) {
            continue;
          }
          const x = col + i;
          const y = row + j;
          if (x >= 0 && y >= 0 && x < cols && y < rows) {
            let oldNeighbor = grid[col + i][row + j];
            neighbors += oldNeighbor;
          }

          if (cell === 1 && neighbors < 2) {
            newGrid[col][row] = 0;
          } else if (cell === 0 && neighbors === 3) {
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
