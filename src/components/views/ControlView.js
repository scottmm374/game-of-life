import React from 'react';
import { Container, Row, Col, ButtonGroup } from 'reactstrap';

const ControlView = (props) => {
  return (
    <Container>
      <Row style={{ 'align-items': 'baseline' }}>
        <Col>
          <ButtonGroup>
            <i
              className='fa-solid fa-circle-play'
              onClick={props.startGame}
            ></i>
            <i
              className='fa-solid fa-circle-pause'
              onClick={props.stopGame}
            ></i>
            <i
              className='fa-solid fa-arrows-rotate'
              onClick={props.clearBoard}
            ></i>
          </ButtonGroup>
        </Col>
        <Col className='gen'>
          <h4>Generations: {props.gen}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default ControlView;
