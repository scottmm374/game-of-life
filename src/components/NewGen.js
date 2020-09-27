export default function NewGen(grid, height, width, cell_size) {
  // copy of grid
  const newGenGrid = grid.map((array) => [...array]);

  console.log(JSON.stringify(newGenGrid));

  for (let row = 1; row < grid.length - 1; row++) {
    for (let col = 1; col < grid[0].length - 1; col++) {
      let neighbors = 0;

      // check if in bounds, Then add up neighbors
      if (row >= 0 && col >= 0 && row < grid.length && col < grid[0].length) {
        // console.log(`[${row}][${col}] alive value: ${grid[row][col]}`);

        neighbors += grid[row - 1][col - 1];
        neighbors += grid[row][col - 1];
        neighbors += grid[row + 1][col - 1];

        neighbors += grid[row - 1][col];
        neighbors += grid[row + 1][col];

        neighbors += grid[row - 1][col + 1];
        neighbors += grid[row][col + 1];
        neighbors += grid[row + 1][col + 1];
      }

      // console.log(`[${row}][${col}] num neighbors: ${neighbors}`);
      // Game Rules for Dead/Alive
      const cell = grid[row][col];
      if (cell === 1 && neighbors <= 1) {
        newGenGrid[row][col] = 0;
      } else if (cell === 0 && neighbors === 3) {
        newGenGrid[row][col] = 1;
      } else if (cell === 1 && neighbors >= 4) {
        newGenGrid[row][col] = 0;
      }
    }
  }

  return newGenGrid;
}
