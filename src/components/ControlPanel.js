import React, { useState, useRef } from 'react';
import BoardGameView from '../containers/BoardGameView/index';
import { useAnimate } from '../utils/useAnimate';
import { Container, Col, Row } from 'react-bootstrap';
import NewGen from './NewGen';
import Presets from '../utils/presets';

function ControlPanel() {
  const interval = useRef(null);
  const [gameRunning, setGameRunning] = useState(false);
  const [speed, setSpeed] = useState();

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
    stopGame();
    setGameRunning(true);
    interval.current = setInterval(
      () => requestAnimationFrame(updateGrid),
      speed
    );
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
    <div className='boardgame-component-control-panel'>
      {/* <Row>
        <Col> */}
      <BoardGameView
        canvasRef={canvasRef}
        width={width}
        height={height}
        onClick={handleClick}
        controlSpeed={controlSpeed}
        startGame={startGame}
        stopGame={stopGame}
        clearBoard={clearBoard}
        gameRunning={gameRunning}
        handlePresets={handlePresets}
        gen={gen}
        speed={speed}
      />
      {/* </Col>
      </Row> */}
    </div>
  );
}

export default ControlPanel;
