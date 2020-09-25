import React, { useState, useRef } from "react";
import ControlView from "./views/ControlView";
import { useAnimate } from "./hooks/useAnimate";
import NewGen from "./NewGen";
import Presets from "./utils/presets";
import PresetView from "./views/PresetView";

function ControlPanel() {
  const interval = useRef(null);
  const [gameRunning, setGameRunning] = useState(false);
  const [speed] = useState(500);

  const [
    canvasRef,
    cell_size,
    initialGrid,
    nextGrid,
    setNextGrid,
    gen,
    setGen,
    width,
    height,
  ] = useAnimate();

  function updateGrid() {
    setNextGrid((grid) => NewGen(grid, height, width, cell_size));
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

    const newGrid = nextGrid.map((row, key) => {
      if (key === currentCood.x / cell_size) {
        return row.map((item, col_key) => {
          if (col_key === currentCood.y / cell_size) {
            return item === 0 ? 1 : 0;
          } else {
            return item;
          }
        });
      } else {
        return row;
      }
    });
    setNextGrid(newGrid);
  }

  function stopGame() {
    setGameRunning(false);
    clearInterval(interval.current);
  }

  function startGame() {
    console.log("start");
    setGameRunning(true);
    interval.current = setInterval(
      () => requestAnimationFrame(updateGrid),
      speed
    );
  }

  function clearBoard() {
    console.log("clear");
    stopGame();
    setNextGrid(initialGrid);
    setGen(0);
  }

  function handlePresets(e) {
    stopGame();
    setNextGrid(Presets(e.target.value, height, width, cell_size));

    setGen(0);
  }

  // Mouse coodinates when Clicking
  function getCoodinates(e, canvasRef, cell_size) {
    let bound = canvasRef.current.getBoundingClientRect();
    const currentCood = {
      x: e.clientX - bound.left - ((e.clientX - bound.left) % cell_size),
      y: e.clientY - bound.top - ((e.clientY - bound.top) % cell_size),
    };
    return currentCood;
  }

  return (
    <div>
      <div className="boardgame">
        <canvas
          ref={canvasRef}
          id="canvas"
          width={width}
          height={height}
          onClick={handleClick}
        />
      </div>
      <div>
        <ControlView
          startGame={startGame}
          stopGame={stopGame}
          clearBoard={clearBoard}
          gameRunning={gameRunning}
          handlePresets={handlePresets}
          gen={gen}
        />
        <PresetView
          // startGame={startGame}
          // stopGame={stopGame}
          // clearBoard={clearBoard}
          handlePresets={handlePresets}
          // gameRunning={gameRunning}
          // gen={gen}
        />
      </div>
    </div>
  );
}

export default ControlPanel;
