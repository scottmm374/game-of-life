import React, { useState, useRef } from "react";
import ControlView from "./views/ControlView";
import useCanvas from "./hooks/useCanvas";
import NewGenGrid from "./NewGen";
import Presets from "./utils/presets";
// const cell_size = 25;

function ControlPanel() {
  const interval = useRef(null);
  const [gameRunning, setGameRunning] = useState(false);

  const [
    canvasRef,
    cell_size,
    initialGrid,
    presetGrid,
    setPresetGrid,
    gen,
    setGen,
  ] = useCanvas();

  function updateGrid() {
    setPresetGrid((prevGrid) => NewGenGrid(prevGrid));
    setGen((prevGen) => prevGen + 1);
  }

  function handleClick(e) {
    stopGame();
    let mousePos = getCoodinates(e, canvasRef, cell_size);

    const currentCood = {
      x: mousePos.x,
      y: mousePos.y,
    };
    console.log(currentCood, "coodinates");

    const newGrid = presetGrid.map((row, key) => {
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
    setPresetGrid(newGrid);
  }

  // function handleNext() {
  //   if (gameRunning) {
  //     stopGame();
  //   }
  //   updateGrid();
  // }
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
    setPresetGrid(initialGrid);
    setGen(0);
  }

  function handleConfig(e) {
    stopGame();
    setPresetGrid(initialGrid);
    Presets(e.target.value);
    setGen(0);
  }

  // Mouse coodinates when Clicking
  function getCoodinates(e, canvasRef, cell_size) {
    let bound = canvasRef.current.getBoundingClientRect();
    const currentCood = {
      x: e.clientX - bound.left - ((e.clientX - bound.left) % cell_size),
      y: e.clientY - bound.right - ((e.clientY - bound.right) % cell_size),
    };
    return currentCood;
  }

  return (
    <div>
      <div className="grid">
        <canvas
          ref={canvasRef}
          id="canvas"
          width="625px"
          height="625px"
          onClick={handleClick}
        />
      </div>
      <div>
        <ControlView
          startGame={startGame}
          stopGame={stopGame}
          clearBoard={clearBoard}
          handleConfig={handleConfig}
          gameRunning={gameRunning}
          // handleNext={handleNext}
          gen={gen}
        />
      </div>
    </div>
  );
}

export default ControlPanel;
