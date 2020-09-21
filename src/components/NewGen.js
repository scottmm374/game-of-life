// import React, { useState } from "react";

// const canvas = document.querySelector("canvas");
// // const ctx = canvas.getContext("2d");

// const cell_size = 10;
// canvas.height = 800;
// canvas.width = 800;
// const ROWS = Math.floor(canvas.height / cell_size);
// const COLS = Math.floor(canvas.width / cell_size);

// function NewGen({ grid }) {
//   // grid[4][4] = 1;
//   // grid[4][5] = 1;
//   // grid[5][4] = 1;
//   // grid[5][5] = 1;

//   // copy of grid
//   const newGen = grid.map((array) => [...array]);

//   for (let col = 0; col < grid.length; col++) {
//     for (let row = 0; row < grid[col].length; row++) {
//       const cell = grid[col][row];
//       // console.log(cell);
//       let neighbors = 0;

//       for (let i = -1; i < 2; i++) {
//         for (let j = -1; j < 2; j++) {
//           if (i === 0 || j === 0) {
//             continue;
//           }
//           const x_cood = col + i;
//           const y_cood = row + j;
//           if (x_cood >= 0 && y_cood >= 0 && x_cood < COLS && y_cood < ROWS) {
//             // console.log("Things are good");
//             const alive = grid[col + 1][row + 1];
//             neighbors += alive;
//             // console.log(alive, "alive");
//           }
//         }
//       }

//       if (cell === 1 && neighbors < 2) {
//         console.log(cell, "cell");
//         newGen[col][row] = 0;
//         console.log(" Col and Row", newGen[col][row]);
//       } else if (cell === 0 && neighbors === 3) {
//         console.log(cell, "cell");
//         console.log("You Live");
//         newGen[col][row] = 1;
//         console.log(" Col and Row", newGen[col][row]);
//       } else if (cell === 1 && neighbors >= 4) {
//         console.log("You Die");
//         newGen[col][row] = 0;
//       }
//     }
//   }
//   console.table(newGen);
//   return newGen;
// }

// export default NewGen;
