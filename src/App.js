import React from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import styled from "styled-components";
import PresetView from "./components/views/PresetView";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Game of Life</h1>
      </header>

      <ControlPanel />
      {/* <PresetView /> */}

      <footer>
        <h5>@ Michelle Scott 2020</h5>
      </footer>
    </div>
  );
}

export default App;
