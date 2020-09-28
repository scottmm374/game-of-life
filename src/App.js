import React from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Game of Life</h1>
      </header>

      <ControlPanel />

      <footer>
        <h5>@ Michelle Scott 2020</h5>
      </footer>
    </div>
  );
}

export default App;
