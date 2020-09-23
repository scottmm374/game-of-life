import React from "react";
import { Button, Dropdown } from "reactstrap";

const ControlView = (props) => {
  return (
    <div>
      <span>
        <Button color="success" onClick={props.startGame}>
          Start
        </Button>
        <Button color="success" onClick={props.stopGame}>
          Stop
        </Button>
        <Button color="success" onClick={props.clearBoard}>
          Clear
        </Button>
      </span>
    </div>
  );
};

export default ControlView;
