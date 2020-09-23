import React from "react";
import ControlPanel from "../ControlPanel";
import { Container, Row, Col } from "reactstrap";
import ControlView from "./ControlView";
import PresetView from "./PresetView";

function Board() {
  return (
    <Container>
      <Row>
        <Col lg>
          <div className="boardgame">
            <ControlPanel />
          </div>
        </Col>
        <Col md>
          <PresetView />
        </Col>
      </Row>
    </Container>
  );
}

export default Board;
