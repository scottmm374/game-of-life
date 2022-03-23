import React from 'react';
import { Label, Container, Row, Col, ButtonGroup } from 'reactstrap';

const ControlView = (props) => {
  return (
    <>
      <Container fluid>
        <p className='titles-preset-rules'>Controls</p>
        <Row className='button-containers'>
          <Col>
            <ButtonGroup>
              <button className='control-button' onClick={props.startGame}>
                Start
              </button>
              <button className='control-button' onClick={props.stopGame}>
                Stop
              </button>
              <button className='control-button' onClick={props.clearBoard}>
                Clear
              </button>
            </ButtonGroup>
            <div className='gen'>
              <p>Generations: {props.gen}</p>
            </div>
          </Col>
          {/* </Row>

        <Row>
          <Col>
            <slider className='slider-speed'>
              <Label htmlFor='controlSpeed'>Speed </Label>
              <input
                type='range'
                min='50'
                max='5000'
                step='50'
                onChange={props.controlSpeed}
              />
            </slider>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default ControlView;
