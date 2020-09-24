import { useEffect, useState, useRef } from "react";
import Presets from "../utils/presets";
// import ControlPanel from "../ControlPanel";

function useAnimate() {
  const canvasRef = useRef(null);
  const [cell_size] = useState(25);

  const [gen, setGen] = useState(0);
  console.log(gen, "gen");

  const width = 625;
  const height = 625;
  const COLS = Math.floor(height / cell_size);
  const ROWS = Math.floor(width / cell_size);

  // represents canvas height/ width and cell size
  const [initialGrid] = useState(
    new Array(COLS).fill(null).map(() => new Array(ROWS).fill(0))
  );
  // console.table(initialGrid);
  // initialGrid[8][10] = 1;

  const [nextGrid, setNextGrid] = useState(Presets("blinker", 625, 625, 25));
  // console.table(presetGrid);

  useEffect(() => {
    // const canvas = document.getElementById("canvas");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function render(grid, context) {
      for (let col = 0; col < ROWS; col++) {
        for (let row = 0; row < COLS; row++) {
          const cell = grid[col][row];

          context.beginPath();

          context.rect(col * cell_size, row * cell_size, cell_size, cell_size);

          if (cell === 1) {
            context.fillStyle = "black";
          } else {
            context.fillStyle = "white";
          }
          context.fill();
          context.lineWidth = 1;
          context.strokeStyle = "#ff751a";
          context.stroke();
        }
      }
    }
    // clear canvas before next render
    ctx.clearRect(0, 0, height, width);
    // Change when I have presets done
    render(nextGrid, ctx);
  }, [nextGrid, gen, cell_size, COLS, ROWS]);

  return [
    canvasRef,
    cell_size,
    initialGrid,
    nextGrid,
    setNextGrid,
    gen,
    setGen,
    width,
    height,
  ];
}

export default useAnimate;
