import React, { useEffect, useState, useRef } from "react";
import presets from "./presets";

const canvasWidth = 800;
const canvasHeight = 800;
const cell_size = 10;

const COLS = Math.floor(canvasHeight / cell_size);
const ROWS = Math.floor(canvasWidth / cell_size);
export function useCanvas() {
  const canvasRef = useRef(null);
  const [gen, setGen] = useState(0);

  // represents canvas height/ width and cell size
  const [initialGrid] = useState(
    new Array(COLS).fill(null).map(() => new Array(ROWS).fill(0))
  );

  //state for Presets, might move this
  const [presetGrid, setPresetGrid] = useState(presets("human"));

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext("2d");

    function render(grid, context) {
      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];

          context.beginPath();
          context.rect(col * cell_size, row * cell_size, cell_size, cell_size);

          if (cell) {
            context.fillStyle = "black";
          }
          context.fill();
          context.lineWidth = 2;
          context.strokeStyle = "#ff751a";
          context.stroke();
        }
      }
    }
    // clear canvas before next render
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    // Change when I have presets done
    render(initialGrid, ctx);
  }, [initialGrid]);

  return [
    gen,
    setGen,
    canvasRef,
    canvasWidth,
    canvasHeight,
    presetGrid,
    setPresetGrid,
  ];
}
