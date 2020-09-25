export default function Presets(choice) {
  const width = 625;
  const height = 625;
  const cell_size = 25;
  const COLS = Math.floor(width / cell_size);
  const ROWS = Math.floor(height / cell_size);

  let presetGrid = new Array(COLS)
    .fill(null)
    .map(() => new Array(ROWS).fill(0));

  if (choice === "beehive") {
    presetGrid[10][11] = 1;
    presetGrid[10][12] = 1;
    presetGrid[11][10] = 1;
    presetGrid[11][13] = 1;
    presetGrid[12][11] = 1;
    presetGrid[12][12] = 1;
  } else if (choice === "blinker") {
    // presetGrid[4][4] = 1;
    // presetGrid[4][5] = 1;
    // presetGrid[4][6] = 1;
    presetGrid[15][16] = 1;
    presetGrid[16][16] = 1;
    presetGrid[17][16] = 1;
  } else if (choice === "cloverleaf") {
    presetGrid[9][6] = 1;
    presetGrid[9][7] = 1;
    presetGrid[9][11] = 1;
    presetGrid[9][12] = 1;

    presetGrid[10][5] = 1;
    presetGrid[10][8] = 1;
    presetGrid[10][10] = 1;
    presetGrid[10][13] = 1;

    presetGrid[11][5] = 1;
    presetGrid[11][7] = 1;
    presetGrid[11][8] = 1;
    presetGrid[11][10] = 1;
    presetGrid[11][11] = 1;
    presetGrid[11][13] = 1;

    presetGrid[12][4] = 1;
    presetGrid[12][5] = 1;
    presetGrid[12][13] = 1;
    presetGrid[12][14] = 1;

    presetGrid[13][6] = 1;
    presetGrid[13][8] = 1;
    presetGrid[13][10] = 1;
    presetGrid[13][12] = 1;

    presetGrid[14][4] = 1;
    presetGrid[14][5] = 1;
    presetGrid[14][13] = 1;
    presetGrid[14][14] = 1;

    presetGrid[15][5] = 1;
    presetGrid[15][7] = 1;
    presetGrid[15][8] = 1;
    presetGrid[15][10] = 1;
    presetGrid[15][11] = 1;
    presetGrid[15][13] = 1;

    presetGrid[16][5] = 1;
    presetGrid[16][8] = 1;
    presetGrid[16][10] = 1;
    presetGrid[16][13] = 1;

    presetGrid[17][6] = 1;
    presetGrid[17][7] = 1;
    presetGrid[17][11] = 1;
    presetGrid[17][12] = 1;
  }

  // console.table(presetGrid);
  return presetGrid;
}
