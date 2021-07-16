import React from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
// import { Label } from "reactstrap";

const ControlView = (props) => {
  return (
    <ButtonGroup className='controls d-flex justify-content-center'>
      <Button className='control-button' onClick={props.start}>
        Start
      </Button>

      <Button className='control-button' onClick={props.stop}>
        Stop
      </Button>

      <Button className='control-button' onClick={props.clear}>
        Clear
      </Button>
    </ButtonGroup>
  );
};

export default ControlView;

{
  /* <slider className='slider-speed'>
        <Label htmlFor='controlSpeed'>Speed</Label>
        <input
          type='range'
          min='50'
          max='1000'
          step='50'
          onChange={props.controlSpeed}
        />
      </slider> */
}
