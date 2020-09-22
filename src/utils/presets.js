export default function Presets(choice) {
  const canvasHeight = 625;
  const canvasWidth = 625;
  const cell_size = 25;
  const COLS = Math.floor(canvasWidth / cell_size);
  const ROWS = Math.floor(canvasHeight / cell_size);

  let presetGrid = new Array(COLS)
    .fill(null)
    .map(() => new Array(ROWS).fill(0));
  // let WIDTH = 0;
  // let HEIGHT = 0;
  // let X = 0;
  // let Y = 0;

  if (choice === "beehive") {
    presetGrid[10][11] = 1;
    presetGrid[10][12] = 1;
    presetGrid[11][10] = 1;
    presetGrid[11][13] = 1;
    presetGrid[12][11] = 1;
    presetGrid[12][12] = 1;

    // WIDTH = 4;
    // HEIGHT = 7;
    // // cell_size = 20;
    // X = Math.floor(COLS / 2 - WIDTH / 2);
    // Y = Math.floor(ROWS / 2 - HEIGHT / 2);
    // presetGrid[X + 1][Y + 1] = 1;
    // presetGrid[X + 1][Y + 3] = 1;
    // presetGrid[X + 1][Y + 6] = 1;
    // presetGrid[X + 2][Y] = 1;
    // presetGrid[X + 2][Y + 2] = 1;
    // presetGrid[X + 2][Y + 3] = 1;
    // presetGrid[X + 2][Y + 4] = 1;
    // presetGrid[X + 2][Y + 5] = 1;
    // presetGrid[X + 3][Y + 1] = 1;
    // presetGrid[X + 3][Y + 3] = 1;
    // presetGrid[X + 3][Y + 6] = 1;
  }
  return presetGrid;
}
