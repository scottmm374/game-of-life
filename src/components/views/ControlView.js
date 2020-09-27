import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const NewDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin-left: 150px;
`;

const NewDecor = styled.h4`
  margin-top: 10px;
 border-bottom: 2px solid #e03c8a;
}
 `;

const NewButton = styled(Button)`
  width: 115px;
  height: 37px;
  background-color: #313131;
  color: #e03c8a;
  border: 1px solid #e03c8a;
  box-shadow: 5px 4px 9px #e03c8a;
  &:hover {
    color: #e67212;
    border: 1px solid #e67212;
    background-color: #313131;
    margin-top: 5px;
    box-shadow: 5px 4px 9px #e67212;
  }
`;

const ControlView = (props) => {
  return (
    <div>
      <NewDiv>
        <NewButton onClick={props.startGame}>Start</NewButton>
        <NewButton onClick={props.stopGame}>Stop</NewButton>
        <NewButton onClick={props.clearBoard}>Clear</NewButton>
        <NewDecor>Generation: {props.gen}</NewDecor>
      </NewDiv>
    </div>
  );
};

export default ControlView;
