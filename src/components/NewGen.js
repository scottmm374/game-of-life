function NewGen(grid, width, height, cell_size) {
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

          if (
            x_cood >= 0 &&
            y_cood >= 0 &&
            x_cood < Math.floor(height / cell_size) &&
            y_cood < Math.floor(width / cell_size)
          ) {
            // console.log("Things are good");
            const alive = grid[x_cood][y_cood];
            neighbors += alive;
          }
        }
      }

      // Game logic for Dead/Alive

      if (grid[col][row] === 1 && neighbors <= 1) {
        newGenGrid[col][row] = 0;
      } else if ((grid[col][row] === 0 && neighbors === 3) || neighbors === 2) {
        newGenGrid[col][row] = 1;
      } else if (grid[col][row] === 1 && neighbors >= 4) {
        newGenGrid[col][row] = 0;
      }
    }
  }
  // console.table(newGenGrid);
  return newGenGrid;
}

export default NewGen;
