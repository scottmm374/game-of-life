import React from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import PresetView from "./components/views/PresetView";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <div className="boardgame">
        <ControlPanel />
      </div>
      <div>
        <PresetView />
      </div>
    </div>
  );
}

export default App;
