import React from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <div className="boardgame">
        <ControlPanel />
      </div>
    </div>
  );
}

export default App;
