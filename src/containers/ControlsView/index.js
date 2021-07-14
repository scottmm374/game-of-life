import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Label } from "reactstrap";

const ControlView = (props) => {
  return (
    <Container className='controls'>
      <Row>
        <Col xl={2}>
          <Row>
            <Col>
              <button className='control-button' onClick={props.start}>
                Start
              </button>
            </Col>
          </Row>

          <Row>
            <Col>
              <button className='control-button' onClick={props.stop}>
                Stop
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className='control-button' onClick={props.clear}>
                Clear
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
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
