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
    presetGrid[10][11] = 1;
    presetGrid[10][12] = 1;
    presetGrid[11][10] = 1;
    presetGrid[11][13] = 1;
    presetGrid[12][11] = 1;
    presetGrid[12][12] = 1;
  } else if (choice === "blinker") {
    presetGrid[16][15] = 1;
    presetGrid[16][16] = 1;
    presetGrid[16][17] = 1;
    console.log(presetGrid, "inside blinker");
  }

  // console.table(presetGrid);
  return presetGrid;
}
