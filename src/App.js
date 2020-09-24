import React from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import { Container, Row, Col } from "reactstrap";
import PresetView from "./components/views/PresetView";
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

function App() {
  return (
    <NewContainer>
      <NewRow>
        <NewCol lg>
          <ControlPanel />
        </NewCol>
        <Col md>
          <PresetView />
        </Col>
      </NewRow>
    </NewContainer>
  );
}

export default App;
