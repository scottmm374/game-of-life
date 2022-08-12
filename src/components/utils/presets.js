export default function Presets(choice, height, width, cell_size) {
  const COLS = Math.floor(width / cell_size);
  const ROWS = Math.floor(height / cell_size);

  let presetGrid = new Array(ROWS)
    .fill(null)
    .map(() => new Array(COLS).fill(0));

  if (choice === 'gospers_glider_gun') {
    // ! Fix
    presetGrid[27][5] = 1;
    presetGrid[27][6] = 1;
    presetGrid[28][5] = 1;
    presetGrid[28][6] = 1;

    presetGrid[27][15] = 1;
    presetGrid[28][15] = 1;
    presetGrid[29][15] = 1;
    presetGrid[26][16] = 1;
    presetGrid[30][16] = 1;
    presetGrid[25][17] = 1;
    presetGrid[25][18] = 1;
    presetGrid[31][17] = 1;
    presetGrid[31][18] = 1;
    presetGrid[28][19] = 1;
    presetGrid[26][20] = 1;
    presetGrid[30][20] = 1;
    presetGrid[27][21] = 1;
    presetGrid[28][21] = 1;
    presetGrid[29][31] = 1;
    presetGrid[28][22] = 1;

    presetGrid[25][25] = 1;
    presetGrid[25][26] = 1;
    presetGrid[26][25] = 1;
    presetGrid[26][26] = 1;
    presetGrid[27][25] = 1;
    presetGrid[27][26] = 1;
    presetGrid[24][27] = 1;
    presetGrid[24][29] = 1;
    presetGrid[23][29] = 1;
    presetGrid[28][27] = 1;
    presetGrid[28][29] = 1;
    presetGrid[29][29] = 1;

    presetGrid[25][39] = 1;
    presetGrid[25][40] = 1;
    presetGrid[26][39] = 1;
    presetGrid[26][40] = 1;
  } else if (choice === 'quad_thunderbird') {
    // TOP
    presetGrid[10][25] = 1;
    presetGrid[10][26] = 1;
    presetGrid[10][27] = 1;
    presetGrid[12][26] = 1;
    presetGrid[13][26] = 1;
    presetGrid[14][26] = 1;

    // Bottom
    presetGrid[39][25] = 1;
    presetGrid[40][25] = 1;
    presetGrid[41][25] = 1;
    presetGrid[43][24] = 1;
    presetGrid[43][25] = 1;
    presetGrid[43][26] = 1;

    // Left
    presetGrid[25][7] = 1;
    presetGrid[26][7] = 1;
    presetGrid[27][7] = 1;
    presetGrid[26][9] = 1;
    presetGrid[26][10] = 1;
    presetGrid[26][11] = 1;

    // Right
    presetGrid[25][39] = 1;
    presetGrid[25][40] = 1;
    presetGrid[25][41] = 1;
    presetGrid[24][43] = 1;
    presetGrid[25][43] = 1;
    presetGrid[26][43] = 1;
  } else if (choice === 'infinite') {
    presetGrid[26][8] = 1;
    presetGrid[26][9] = 1;
    presetGrid[26][10] = 1;
    presetGrid[26][11] = 1;
    presetGrid[26][12] = 1;
    presetGrid[26][13] = 1;
    presetGrid[26][14] = 1;
    presetGrid[26][15] = 1;

    presetGrid[26][17] = 1;
    presetGrid[26][18] = 1;
    presetGrid[26][19] = 1;
    presetGrid[26][20] = 1;
    presetGrid[26][21] = 1;

    presetGrid[26][25] = 1;
    presetGrid[26][26] = 1;
    presetGrid[26][27] = 1;

    presetGrid[26][33] = 1;
    presetGrid[26][34] = 1;
    presetGrid[26][35] = 1;
    presetGrid[26][36] = 1;
    presetGrid[26][37] = 1;
    presetGrid[26][38] = 1;
    presetGrid[26][39] = 1;

    presetGrid[26][41] = 1;
    presetGrid[26][42] = 1;
    presetGrid[26][43] = 1;
    presetGrid[26][44] = 1;
    presetGrid[26][45] = 1;
  } else if (choice === 'thunderbird') {
    presetGrid[25][24] = 1;
    presetGrid[25][25] = 1;
    presetGrid[25][26] = 1;
    presetGrid[26][25] = 1;
    presetGrid[27][25] = 1;
    presetGrid[28][25] = 1;
  } else if (choice === 'mash_up') {
    // Top Left
    presetGrid[4][6] = 1;
    presetGrid[4][7] = 1;
    presetGrid[4][8] = 1;
    presetGrid[4][12] = 1;
    presetGrid[4][13] = 1;
    presetGrid[4][14] = 1;
    presetGrid[6][4] = 1;
    presetGrid[6][9] = 1;
    presetGrid[6][11] = 1;
    presetGrid[6][16] = 1;
    presetGrid[7][4] = 1;
    presetGrid[7][9] = 1;
    presetGrid[7][11] = 1;
    presetGrid[7][16] = 1;
    presetGrid[8][4] = 1;
    presetGrid[8][9] = 1;
    presetGrid[8][11] = 1;
    presetGrid[8][16] = 1;
    presetGrid[9][6] = 1;
    presetGrid[9][7] = 1;
    presetGrid[9][8] = 1;
    presetGrid[9][12] = 1;
    presetGrid[9][13] = 1;
    presetGrid[9][14] = 1;
    presetGrid[11][6] = 1;
    presetGrid[11][7] = 1;
    presetGrid[11][8] = 1;
    presetGrid[11][12] = 1;
    presetGrid[11][13] = 1;
    presetGrid[11][14] = 1;
    presetGrid[12][4] = 1;
    presetGrid[12][9] = 1;
    presetGrid[12][11] = 1;
    presetGrid[12][16] = 1;
    presetGrid[13][4] = 1;
    presetGrid[13][9] = 1;
    presetGrid[13][11] = 1;
    presetGrid[13][16] = 1;
    presetGrid[14][4] = 1;
    presetGrid[14][9] = 1;
    presetGrid[14][11] = 1;
    presetGrid[14][16] = 1;
    presetGrid[16][6] = 1;
    presetGrid[16][7] = 1;
    presetGrid[16][8] = 1;
    presetGrid[16][12] = 1;
    presetGrid[16][13] = 1;
    presetGrid[16][14] = 1;

    // Bottom Left
    presetGrid[35][6] = 1;
    presetGrid[35][7] = 1;
    presetGrid[35][8] = 1;
    presetGrid[35][12] = 1;
    presetGrid[35][13] = 1;
    presetGrid[35][14] = 1;
    presetGrid[37][4] = 1;
    presetGrid[37][9] = 1;
    presetGrid[37][11] = 1;
    presetGrid[37][16] = 1;
    presetGrid[38][4] = 1;
    presetGrid[38][9] = 1;
    presetGrid[38][11] = 1;
    presetGrid[38][16] = 1;
    presetGrid[39][4] = 1;
    presetGrid[39][9] = 1;
    presetGrid[39][11] = 1;
    presetGrid[39][16] = 1;
    presetGrid[40][6] = 1;
    presetGrid[40][7] = 1;
    presetGrid[40][8] = 1;
    presetGrid[40][12] = 1;
    presetGrid[40][13] = 1;
    presetGrid[40][14] = 1;
    presetGrid[42][6] = 1;
    presetGrid[42][7] = 1;
    presetGrid[42][8] = 1;
    presetGrid[42][12] = 1;
    presetGrid[42][13] = 1;
    presetGrid[42][14] = 1;
    presetGrid[43][4] = 1;
    presetGrid[43][9] = 1;
    presetGrid[43][11] = 1;
    presetGrid[43][16] = 1;
    presetGrid[44][4] = 1;
    presetGrid[44][9] = 1;
    presetGrid[44][11] = 1;
    presetGrid[44][16] = 1;
    presetGrid[45][4] = 1;
    presetGrid[45][9] = 1;
    presetGrid[45][11] = 1;
    presetGrid[45][16] = 1;
    presetGrid[47][6] = 1;
    presetGrid[47][7] = 1;
    presetGrid[47][8] = 1;
    presetGrid[47][12] = 1;
    presetGrid[47][13] = 1;
    presetGrid[47][14] = 1;

    // Top RIght
    presetGrid[4][36] = 1;
    presetGrid[4][37] = 1;
    presetGrid[4][38] = 1;
    presetGrid[4][42] = 1;
    presetGrid[4][43] = 1;
    presetGrid[4][44] = 1;
    presetGrid[6][34] = 1;
    presetGrid[6][39] = 1;
    presetGrid[6][41] = 1;
    presetGrid[6][46] = 1;
    presetGrid[7][34] = 1;
    presetGrid[7][39] = 1;
    presetGrid[7][41] = 1;
    presetGrid[7][46] = 1;
    presetGrid[8][34] = 1;
    presetGrid[8][39] = 1;
    presetGrid[8][41] = 1;
    presetGrid[8][46] = 1;
    presetGrid[9][36] = 1;
    presetGrid[9][37] = 1;
    presetGrid[9][38] = 1;
    presetGrid[9][42] = 1;
    presetGrid[9][43] = 1;
    presetGrid[9][44] = 1;
    presetGrid[11][36] = 1;
    presetGrid[11][37] = 1;
    presetGrid[11][38] = 1;
    presetGrid[11][42] = 1;
    presetGrid[11][43] = 1;
    presetGrid[11][44] = 1;
    presetGrid[12][34] = 1;
    presetGrid[12][39] = 1;
    presetGrid[12][41] = 1;
    presetGrid[12][46] = 1;
    presetGrid[13][34] = 1;
    presetGrid[13][39] = 1;
    presetGrid[13][41] = 1;
    presetGrid[13][46] = 1;
    presetGrid[14][34] = 1;
    presetGrid[14][39] = 1;
    presetGrid[14][41] = 1;
    presetGrid[14][46] = 1;
    presetGrid[16][36] = 1;
    presetGrid[16][37] = 1;
    presetGrid[16][38] = 1;
    presetGrid[16][42] = 1;
    presetGrid[16][43] = 1;
    presetGrid[16][44] = 1;

    // Bottom Right
    presetGrid[35][36] = 1;
    presetGrid[35][37] = 1;
    presetGrid[35][38] = 1;
    presetGrid[35][42] = 1;
    presetGrid[35][43] = 1;
    presetGrid[35][44] = 1;
    presetGrid[37][34] = 1;
    presetGrid[37][39] = 1;
    presetGrid[37][41] = 1;
    presetGrid[37][46] = 1;
    presetGrid[38][34] = 1;
    presetGrid[38][39] = 1;
    presetGrid[38][41] = 1;
    presetGrid[38][46] = 1;
    presetGrid[39][34] = 1;
    presetGrid[39][39] = 1;
    presetGrid[39][41] = 1;
    presetGrid[39][46] = 1;
    presetGrid[40][36] = 1;
    presetGrid[40][37] = 1;
    presetGrid[40][38] = 1;
    presetGrid[40][42] = 1;
    presetGrid[40][43] = 1;
    presetGrid[40][44] = 1;
    presetGrid[42][36] = 1;
    presetGrid[42][37] = 1;
    presetGrid[42][38] = 1;
    presetGrid[42][42] = 1;
    presetGrid[42][43] = 1;
    presetGrid[42][44] = 1;
    presetGrid[43][34] = 1;
    presetGrid[43][39] = 1;
    presetGrid[43][41] = 1;
    presetGrid[43][46] = 1;
    presetGrid[44][34] = 1;
    presetGrid[44][39] = 1;
    presetGrid[44][41] = 1;
    presetGrid[44][46] = 1;
    presetGrid[45][34] = 1;
    presetGrid[45][39] = 1;
    presetGrid[45][41] = 1;
    presetGrid[45][46] = 1;
    presetGrid[47][36] = 1;
    presetGrid[47][37] = 1;
    presetGrid[47][38] = 1;
    presetGrid[47][42] = 1;
    presetGrid[47][43] = 1;
    presetGrid[47][44] = 1;

    // Center
    presetGrid[10][24] = 1;
    presetGrid[10][25] = 1;
    presetGrid[10][26] = 1;
    presetGrid[20][24] = 1;
    presetGrid[20][25] = 1;
    presetGrid[20][26] = 1;
    presetGrid[21][25] = 1;
    presetGrid[22][25] = 1;
    presetGrid[23][24] = 1;
    presetGrid[23][25] = 1;
    presetGrid[23][26] = 1;
    presetGrid[25][24] = 1;
    presetGrid[25][25] = 1;
    presetGrid[25][26] = 1;
    presetGrid[26][24] = 1;
    presetGrid[26][25] = 1;
    presetGrid[26][26] = 1;
    presetGrid[28][24] = 1;
    presetGrid[28][25] = 1;
    presetGrid[28][26] = 1;
    presetGrid[29][25] = 1;
    presetGrid[30][25] = 1;
    presetGrid[31][24] = 1;
    presetGrid[31][25] = 1;
    presetGrid[31][26] = 1;
    presetGrid[41][24] = 1;
    presetGrid[41][25] = 1;
    presetGrid[41][26] = 1;

    // Lines

    presetGrid[20][10] = 1;
    presetGrid[21][10] = 1;
    presetGrid[22][10] = 1;

    presetGrid[29][10] = 1;
    presetGrid[30][10] = 1;
    presetGrid[31][10] = 1;

    presetGrid[20][40] = 1;
    presetGrid[21][40] = 1;
    presetGrid[22][40] = 1;

    presetGrid[29][40] = 1;
    presetGrid[30][40] = 1;
    presetGrid[31][40] = 1;
  } else if (choice === 'random') {
    presetGrid = new Array(ROWS)
      .fill(null)
      .map(() =>
        new Array(COLS).fill(null).map(() => Math.floor(Math.random() * 2))
      );
  }

  return presetGrid;
}
