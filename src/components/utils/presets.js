export default function Presets(choice, height, width, cell_size) {
  const COLS = Math.floor(width / cell_size);
  const ROWS = Math.floor(height / cell_size);

  let presetGrid = new Array(COLS)
    .fill(null)
    .map(() => new Array(ROWS).fill(0));

  // let WIDTH = 0;
  // let HEIGHT = 0;
  // let x = 0;
  // let y = 0;

  if (choice === "beehive") {
    // WIDTH = 4;
    // HEIGHT = 7;
    // let x = Math.floor(COLS / 2 - WIDTH / 2);
    // let y = Math.floor(ROWS / 2 - HEIGHT / 2);

    presetGrid[10][11] = 1;
    presetGrid[10][12] = 1;
    presetGrid[11][10] = 1;
    presetGrid[11][13] = 1;
    presetGrid[12][11] = 1;
    presetGrid[12][12] = 1;
  }

  if (choice === "blinker") {
    presetGrid[16][15] = 1;
    presetGrid[16][16] = 1;
    presetGrid[16][17] = 1;
  }

  // console.table(presetGrid);
  return presetGrid;
}
