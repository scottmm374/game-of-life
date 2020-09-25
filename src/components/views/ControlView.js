import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const NewDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  border: 1px solid yellow;
`;

const ControlView = (props) => {
  return (
    <div>
      <NewDiv>
        {/* <span className="control-buttons"> */}
        <Button color="success" onClick={props.startGame}>
          Start
        </Button>
        <Button color="success" onClick={props.stopGame}>
          Stop
        </Button>
        <Button color="success" onClick={props.clearBoard}>
          Clear
        </Button>
      </NewDiv>
      <NewDiv>
        <Button
          value="cloverleaf"
          color="success"
          onClick={props.handlePresets}
        >
          Beehive
        </Button>
      </NewDiv>
    </div>
  );
};

export default ControlView;
