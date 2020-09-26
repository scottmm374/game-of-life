export default function Presets(choice, height, width, cell_size) {
  // const width = 60;
  // const height = 40;
  // const cell_size = 20;
  const COLS = Math.floor(width / cell_size);
  const ROWS = Math.floor(height / cell_size);

  let presetGrid = new Array(ROWS)
    .fill(null)
    .map(() => new Array(COLS).fill(0));

  // let WIDTH = 0;
  // let HEIGHT = 0;
  // let offsetX = 0;
  // let offsetY = 0;

  if (choice === "beehive") {
    presetGrid[10][11] = 1;
    presetGrid[10][12] = 1;
    presetGrid[11][10] = 1;
    presetGrid[11][13] = 1;
    presetGrid[12][11] = 1;
    presetGrid[12][12] = 1;
  } else if (choice === "blinker") {
    // height = 625;
    // width = 625;
    // cell_size = 25;

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
  } else if (choice === "random") {
    presetGrid = new Array(ROWS)
      .fill(null)
      .map(() =>
        new Array(COLS).fill(null).map(() => Math.floor(Math.random() * 2))
      );
  } else if (choice === "beacon") {
    // WIDTH = 4;
    // HEIGHT = 4;
    // offsetX = Math.floor(COLS / 2 - WIDTH / 2);
    // offsetY = Math.floor(COLS / 2 - WIDTH / 2);
    // presetGrid[offsetX][offsetY] = 1;
    // presetGrid[offsetX][+1] = 1;
    // presetGrid[offsetX + 1][offsetY] = 1;
    // presetGrid[offsetX + 1][offsetY + 1] = 1;
    // presetGrid[offsetX + 2][offsetY + 2] = 1;
    // presetGrid[offsetX + 2][offsetY + 3] = 1;
    // presetGrid[offsetX + 3][offsetY + 2] = 1;
    // presetGrid[offsetX + 3][offsetY + 3] = 1;
  }

  // console.log(JSON.stringify(presetGrid));
  return presetGrid;
}
