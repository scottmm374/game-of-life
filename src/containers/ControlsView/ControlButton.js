import React from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
// import { Label } from "reactstrap";

const ControlButtons = (props) => {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center buttons'>
          <button className='control-button' onClick={props.start}>
            Start
          </button>
          <button className='control-button' onClick={props.stop}>
            Stop
          </button>

          <button className='control-button' onClick={props.clear}>
            Clear
          </button>
        </Col>
        {/* <Col>
          <slider className='slider-speed'>
            <label htmlFor='controlSpeed'>Speed: {props.speed}</label>
            <input
              type='range'
              min='10'
              max='300'
              step='10'
              onChange={props.controlSpeed}
            />
          </slider>
        </Col> */}
      </Row>
    </Container>
  );
};

export default ControlButtons;
