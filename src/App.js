import React from "react";
import "./App.css";
import Board from "./components/Board";
// import { Container, Row, Col } from "reactstrap";
import canvas from "./utils/useCanvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">Game of Life</header>
      <div className="boardGame">{/* <Board /> */}</div>
      {/* <canvas /> */}
    </div>
  );
}

export default App;
