import React, { useState, useRef } from "react";
import ControlView from "./views/ControlView";

const cell_size = 25;

function ControlPanel(props) {
  const interval = useRef(null);
  const [gameRunning, setGameRunning] = useState(false);

  function updateGrid() {
    props.setPresetGrid((prev) => props.NewGenGrid(prev));
    props.setGen((prevGen) => prevGen + 1);
  }

  function handleClick(e) {
    stopGame();
    let mousePos = getCoodinates(e, props.canvasRef, props.cell_size);

    const currentCood = {
      x: e.clientX - mousePos.left - ((e.clientX - mousePos.left) % cell_size),
      y:
        e.clientY - mousePos.right - ((e.clientY - mousePos.right) % cell_size),
    };
    console.log(currentCood);

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

  function stopGame() {
    console.log("stop");
    setGameRunning(false);
    clearInterval(interval.current);
  }

  function startGame() {
    console.log("start");
    setGameRunning(true);
    interval.current = setInterval(() => requestAnimationFrame(updateGrid));
  }

  function clearBoard() {
    console.log("clear");
    stopGame();
    props.setPresetGrid(props.initialGrid);
    props.setGen(0);
  }

  function handleConfig(e) {
    stopGame();
    props.setPresetGrid(props.initialGrid);
    props.Presets(
      e.target.value,
      props.canvasWidth,
      props.camvasHeight,
      props.cell_size
    );
    props.setGen(0);
  }

  // Mouse coodinates when Clicking
  function getCoodinates(e, canvasRef, cell_size) {
    let bound = props.canvasRef.current.getBoundingClientRect();
    const currentCood = {
      x: e.clientX - bound.left - ((e.clientX - bound.left) % cell_size),
      y: e.clientY - bound.right - ((e.clientY - bound.right) % cell_size),
    };
    return currentCood;
  }

  return (
    <div>
      <ControlView
        handleClick={handleClick}
        startGame={startGame}
        stopGame={stopGame}
        clearBoard={clearBoard}
      />
    </div>
  );
}

export default ControlPanel;
