import React from "react";
import ControlPanel from "../ControlPanel";
import { Container, Row, Col } from "reactstrap";
import ControlView from "./ControlView";
import PresetView from "./PresetView";
import styled from "styled-components";

const NewContainer = styled(Container)`
  border: 1px solid green;
`;

const NewRow = styled(Row)`
  border: 1px solid blue;
`;

const NewCol = styled(Col)`
  border: 1px solid orange;
`;

function Board() {
  return (
    <NewContainer>
      <NewRow>
        <NewCol lg>
          {/* <div className="boardgame"> */}
          <ControlPanel />
          {/* </div> */}
        </NewCol>
        <Col md>
          <PresetView />
        </Col>
      </NewRow>
    </NewContainer>
  );
}

export default Board;
