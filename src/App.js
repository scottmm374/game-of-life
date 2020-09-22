import React from "react";
import "./App.css";
import Board from "./components/Board";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      {/* <Container>
        <Row>
          <Col lg="8">
            <h3>Conways Game of Life</h3> */}
      <Board />
      {/* </Col>
          <Col md="4">
            <p>The Rules</p>
          </Col>
        </Row>
        <Row>
          <p>Where other things will go</p>
        </Row>
      </Container> */}
    </div>
  );
}

export default App;
