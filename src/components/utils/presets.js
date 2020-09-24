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

  if (choice === "cloverleaf") {
    presetGrid[12][4] = 1;
    presetGrid[14][4] = 1;

    presetGrid[10][5] = 1;
    presetGrid[11][5] = 1;
    presetGrid[12][5] = 1;
    presetGrid[14][5] = 1;
    presetGrid[15][5] = 1;
    presetGrid[16][5] = 1;

    presetGrid[9][6] = 1;
    presetGrid[13][6] = 1;
    presetGrid[17][6] = 1;

    presetGrid[9][7] = 1;
    presetGrid[11][7] = 1;
    presetGrid[15][7] = 1;
    presetGrid[17][7] = 1;

    presetGrid[10][8] = 1;
    presetGrid[11][8] = 1;
    presetGrid[13][8] = 1;
    presetGrid[15][8] = 1;
    presetGrid[16][8] = 1;

    presetGrid[10][10] = 1;
    presetGrid[11][10] = 1;
    presetGrid[13][10] = 1;
    presetGrid[15][10] = 1;
    presetGrid[16][10] = 1;

    presetGrid[9][11] = 1;
    presetGrid[11][11] = 1;
    presetGrid[15][11] = 1;
    presetGrid[17][11] = 1;

    presetGrid[9][12] = 1;
    presetGrid[13][12] = 1;
    presetGrid[16][12] = 1;

    presetGrid[10][13] = 1;
    presetGrid[11][13] = 1;
    presetGrid[12][13] = 1;
    presetGrid[14][13] = 1;
    presetGrid[15][13] = 1;
    presetGrid[16][13] = 1;

    presetGrid[12][14] = 1;
    presetGrid[14][14] = 1;
  }

  if (choice === "beacon") {
    presetGrid[12][7] = 1;
    presetGrid[13][7] = 1;
    presetGrid[12][8] = 1;
    presetGrid[13][8] = 1;
    presetGrid[14][9] = 1;
    presetGrid[15][9] = 1;
    presetGrid[14][10] = 1;
    presetGrid[15][10] = 1;
  }
  // console.table(presetGrid);
  return presetGrid;
}
