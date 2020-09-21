// import { render } from "@testing-library/react";
// import React, { useEffect, useState } from "react";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const cell_size = 10;
canvas.width = 800;
canvas.height = 800;
const COLS = canvas.width / cell_size;
const ROWS = canvas.height / cell_size;

function Board() {
  return new Array(COLS)
    .fill(null)
    .map(() =>
      new Array(ROWS).fill(null).map(() => Math.floor(Math.random() * 2))
    );
}

let grid = Board();

requestAnimationFrame(updateGrid);

function updateGrid() {
  grid = newGenGrid(grid);
  renderGrid(grid);
  requestAnimationFrame(updateGrid);
}

function newGenGrid(grid) {
  // copy of grid
  const newGen = grid.map((array) => [...array]);

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
            const alive = grid[col + 1][row + 1];
            neighbors += alive;
            // console.log(alive, "alive");
          }
        }
      }

      if (cell === 1 && neighbors < 2) {
        console.log(cell, "cell");
        newGen[col][row] = 0;
        console.log(" Col and Row", newGen[col][row]);
      } else if (cell === 0 && neighbors === 3) {
        console.log(cell, "cell");
        console.log("You Live");
        newGen[col][row] = 1;
        console.log(" Col and Row", newGen[col][row]);
      } else if (cell === 1 && neighbors >= 4) {
        console.log("You Die");
        newGen[col][row] = 0;
      }
    }
  }
  console.table(newGen);
  return newGen;
}

function renderGrid(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];

      ctx.beginPath();
      ctx.rect(col * cell_size, row * cell_size, cell_size, cell_size);
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      // ctx.stroke()
    }
  }
}

// return <></>;
// }

export default Board;

//   return (
//     <>
//       {grid.map((cell) => (
//         <div>
//           {/* <CellGrid grid={grid} /> */}
//           {/* {grid.map((cell) => ( */}
//           <div className="cell" style={{ color: "white" }} key={Date.now()}>
//             {cell}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
