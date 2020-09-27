import React from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Game of Life</h1>
      </header>

      <div className="boardgame">
        <ControlPanel />
      </div>
      <footer>
        <h5>@ Michelle Scott 2020</h5>
      </footer>
    </div>
  );
}

export default App;
