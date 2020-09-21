import React from "react";
import "./App.css";
// import { Container, Row, Col } from "reactstrap";
import canvas from "./utils/useCanvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">Game of Life</header>
      <canvas />
    </div>
  );
}

export default App;
