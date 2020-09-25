import { useEffect, useState, useRef } from "react";
import Presets from "../utils/presets";

export const width = 625;
export const height = 625;
export const cell_size = 25;

function useAnimate() {
  const canvasRef = useRef(null);

  const [gen, setGen] = useState(0);
  const [nextGrid, setNextGrid] = useState(Presets("cloverleaf"));
  console.table(nextGrid, "nextgrid");
  // console.log(gen, "gen");

  const COLS = Math.floor(width / cell_size);
  const ROWS = Math.floor(height / cell_size);

  const [initialGrid] = useState(
    new Array(COLS).fill(null).map(() => new Array(ROWS).fill(0))
  );

  // console.table(presetGrid);

  useEffect(() => {
    // const canvas = document.getElementById("canvas");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function render(grid, context) {
      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];

          context.beginPath();

          context.rect(col * cell_size, row * cell_size, cell_size, cell_size);

          if (cell === 1) {
            context.fillStyle = "#2590da";
          } else {
            context.fillStyle = "#313131";
          }
          context.fill();
          context.lineWidth = 1;
          context.strokeStyle = "#e67212";
          context.stroke();
        }
      }
    }
    // clear canvas before next render
    ctx.clearRect(0, 0, height, width);
    // Change when I have presets done
    render(nextGrid, ctx);
  }, [nextGrid, gen]);

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
