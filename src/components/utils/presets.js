export default function Presets(choice) {
  const canvasHeight = 625;
  const canvasWidth = 625;
  const cell_size = 25;
  const COLS = Math.floor(canvasWidth / cell_size);
  const ROWS = Math.floor(canvasHeight / cell_size);

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
  }

  if (choice === "blinker") {
    presetGrid[16][15] = 1;
    presetGrid[16][16] = 1;
    presetGrid[16][17] = 1;
  }

  // console.table(presetGrid);
  return presetGrid;
}
