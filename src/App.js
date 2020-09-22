import React from "react";
import "./App.css";
import Board from "./components/Board";
import { Container, Row, Col } from "reactstrap";
import canvas from "./utils/useCanvas";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col lg="8">
            <h1>Conways Game of Life</h1>
            <Board />
          </Col>
          <Col md="4">
            <h1>The Rules</h1>
          </Col>
        </Row>
        <Row>
          <h1>Where other things will go</h1>
        </Row>
      </Container>
    </div>
  );
}

export default App;
