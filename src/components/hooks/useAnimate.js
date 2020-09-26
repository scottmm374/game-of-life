import { useEffect, useState, useRef } from "react";
import Presets from "../utils/presets";

export const height = 80;
export const width = 80;
export const cell_size = 20;

export function useAnimate() {
  const canvasRef = useRef(null);

  const [gen, setGen] = useState(0);
  const [nextGrid, setNextGrid] = useState(
    Presets(" ", height, width, cell_size)
  );
  console.log(JSON.stringify(nextGrid));
  // console.log(gen, "gen");

  const ROWS = Math.floor(height / cell_size);
  const COLS = Math.floor(width / cell_size);

  const [initialGrid] = useState(
    new Array(ROWS).fill(null).map(() => new Array(COLS).fill(0))
  );

  // console.table(presetGrid);

  useEffect(() => {
    // const canvas = document.getElementById("canvas");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function render(grid, context) {
      for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
          const cell = grid[row][col];

          context.beginPath();

          context.rect(col * cell_size, row * cell_size, cell_size, cell_size);

          if (cell === 1) {
            context.fillStyle = "#2590da";
          } else {
            context.fillStyle = "#313131";
          }
          context.fill();
          context.lineWidth = 2;
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
