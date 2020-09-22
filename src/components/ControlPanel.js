import React, { useState, useRef } from "react";

// import newGenGrid from "./NewGen";

const cell_size = 25;

function ControlPanel(props) {
  const interval = useRef(null);
  const [gameRunning, setGameRunning] = useState(false);

  function updateGrid() {
    props.setPresetGrid((prev) => props.newGenGrid(prev));
    props.setGen((prevGen) => prevGen + 1);
  }

  function handleClick(e) {
    let cellPosition = props.canvasRef.current.getBoundingClientRect();
    const currentCood = {
      x:
        e.clientX -
        cellPosition.left -
        ((e.clientX - cellPosition.left) % cell_size),
      y:
        e.clientY -
        cellPosition.right -
        ((e.clientY - cellPosition.right) % cell_size),
    };
    const newGrid = props.presetGrid.map((row, key) => {
      if (key === currentCood.x / cell_size) {
        return row.map((cell, col_key) => {
          if (col_key === currentCood.y / cell_size) {
            return cell === 0 ? 1 : 0;
          } else {
            return cell;
          }
        });
      } else {
        return row;
      }
    });
    props.setPresetGrid(newGrid);
  }

  // function stopGame() {}

  // function startGame() {}

  // function clearBoard() {}

  return <div></div>;
}

// Mouse coodinates when Clicking
// function getCoodinates(e, canvasRef, cell_size) {
//   let bound = canvasRef.current.getBoundingClientRect();
//   const currentCood = {
//     x: e.clientX - bound.left - ((e.clientX - bound.left) % cell_size),
//     y: e.clientY - bound.right - ((e.clientY - bound.right) % cell_size),
//   };
//   return currentCood;
// }

export default ControlPanel;
