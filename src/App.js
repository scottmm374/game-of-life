import React from "react";
import "./App.css";
// import { Container, Row, Col } from "reactstrap";
import { Board } from "./components/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">Game of Life</header>
      <div className="board">
        <Board />
      </div>
    </div>
  );
}

export default App;
