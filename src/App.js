import React from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import gameOfLife from "./images/gameOfLife.png";

function App() {
  return (
    <div className="App">
      <header>
        <img id="header-img" src={gameOfLife} alt="gameOfLife" />
      </header>

      <ControlPanel />

      <footer>
        <p className="footer">
          This version of Conways Game of Life created by <a href="https://github.com/scottmm374/game-of-life">Michelle Scott</a> @2020
        </p>
      </footer>
    </div>
  );
}

export default App;
