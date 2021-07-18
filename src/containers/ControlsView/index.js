import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ControlButtons from './ControlButton';
import PresetMenu from './PresetMenu';

const ControlPanelView = ({
  start,
  stop,
  clear,
  speed,
  handlePresets,
  controlSpeed,
  gen,
}) => {
  return (
    <Container className='control-view'>
      <Row>
        <Col xs={12} md={4} className='d-flex justify-content-end'>
          <h4>Generations: {gen}</h4>
        </Col>

        <Col xs={12} md={4}>
          <ControlButtons
            start={start}
            stop={stop}
            clear={clear}
            controlSpeed={controlSpeed}
            speed={speed}
          />
        </Col>
        <Col xs={12} md={4}>
          <PresetMenu handlePresets={handlePresets} />
        </Col>
      </Row>
    </Container>
  );
};

export default ControlPanelView;
