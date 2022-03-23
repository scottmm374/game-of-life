import React from 'react';
import { Label, Container, Row, Col, ButtonGroup } from 'reactstrap';

const ControlView = (props) => {
  return (
    <>
      <Container fluid>
        <Row className='button-containers'>
          <Col xl='6'>
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
          </Col>
          <Col xl='6'>
            <p className='gen'>Generations: {props.gen}</p>
          </Col>
        </Row>

        {/* </div> */}
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ControlView;
