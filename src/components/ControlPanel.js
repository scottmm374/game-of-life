import React, { useState, useRef } from "react";
import ControlView from "./views/ControlView";
import { useAnimate } from "./hooks/useAnimate";
import NewGen from "./NewGen";
import Presets from "./utils/presets";
import PresetView from "./views/PresetView";

function ControlPanel() {
  const interval = useRef(null);
  const [gameRunning, setGameRunning] = useState(false);
  const [speed, setSpeed] = useState(50);

  const [canvasRef, cell_size, initialGrid, nextGrid, setNextGrid, gen, setGen, width, height] = useAnimate();

  function updateGrid() {
    setNextGrid((grid) => NewGen(grid, height, width, cell_size));
    setGen((prevGen) => prevGen + 1);
  }

  // handles the function, clicking on grid.
  function handleClick(e) {
    stopGame();
    let mousePos = getCoodinates(e, canvasRef, cell_size);

    const currentCood = {
      x: mousePos.x,
      y: mousePos.y,
    };

    const newGrid = nextGrid.map((row, key) => {
      if (key === currentCood.y / cell_size) {
        return row.map((col, col_key) => {
          if (col_key === currentCood.x / cell_size) {
            return col === 0 ? 1 : 0;
          } else {
            return col;
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
    setGameRunning(true);
    interval.current = setInterval(() => requestAnimationFrame(updateGrid), speed);
  }

  function clearBoard() {
    stopGame();
    setNextGrid(initialGrid);
    setGen(0);
  }

  function handlePresets(e) {
    stopGame();
    setNextGrid(Presets(e.target.value, height, width, cell_size));

    setGen(0);
  }

  function controlSpeed(e) {
    stopGame();
    setSpeed(e.target.value);
    startGame();
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
    <>
      <div className="game">
        <div className="boardgame">
          <div>
            <canvas ref={canvasRef} id="canvas" width={width} height={height} onClick={handleClick} />
          </div>
          <div className="controls">
            <ControlView controlSpeed={controlSpeed} startGame={startGame} stopGame={stopGame} clearBoard={clearBoard} gameRunning={gameRunning} handlePresets={handlePresets} gen={gen} />
          </div>
        </div>
        <div className="App">
          <PresetView handlePresets={handlePresets} />
        </div>
      </div>
    </>
  );
}

export default ControlPanel;
