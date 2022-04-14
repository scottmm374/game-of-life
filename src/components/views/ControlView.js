import React from 'react';
import { Container, Row, Col, ButtonGroup } from 'reactstrap';

const ControlView = (props) => {
  return (
    <Container>
      <Row>
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
          {/* </Col>
          <Col> */}
          <div className='gen'>
            <p>Generations: {props.gen}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ControlView;
