import React, { useState, useRef } from "react";
import { useCanvas } from "../utils/useCanvas";

import { Button } from "reactstrap";
import useCanvas from "../utils/useCanvas";
import newGenGrid from "./NewGen";

function ControlPanel(props) {
  const interval = useRef(null);
  const [gameRunning, setGameRunning] = useState(false);

  function updateGrid() {
    props.setPresetGrid((prev) => props.newGenGrid(prev));
    props.setGen((prevGen) => prevGen + 1);
  }

  function handleClick(e) {
    let cellPosition = canvasRef.current.getBoundingClientRect();
    const currentCood = {
      x: e.clientX - bound.left - ((e.clientX - bound.left) % cell_size),
      y: e.clientY - bound.right - ((e.clientY - bound.right) % cell_size),
    };
  }

  function stopGame() {}

  function startGame() {}

  function clearBoard() {}

  return <div></div>;
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
