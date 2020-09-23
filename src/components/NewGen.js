const canvasWidth = 625;
const canvasHeight = 625;
const cell_size = 25;

const COLS = Math.floor(canvasHeight / cell_size);
const ROWS = Math.floor(canvasWidth / cell_size);

function NewGenGrid(grid) {
  // copy of grid
  const newGenGrid = grid.map((array) => [...array]);

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
        newGenGrid[col][row] = 0;
        console.log(" Col and Row", newGenGrid[col][row]);
      } else if (cell === 0 && neighbors === 3) {
        console.log(cell, "cell");
        console.log("You Live");
        newGenGrid[col][row] = 1;
        console.log(" Col and Row", newGenGrid[col][row]);
      } else if (cell === 1 && neighbors >= 4) {
        console.log("You Die");
        newGenGrid[col][row] = 0;
      }
    }
  }
  console.table(newGenGrid);
  return newGenGrid;
}

export default NewGenGrid;
