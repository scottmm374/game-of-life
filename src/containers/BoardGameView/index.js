import React from 'react';
import ControlView from '../ControlsView';
import PresetPanelView from '../PresetPanelView';
import RulesView from '../RulesView/index';
import CanvasView from '../Canvas';
import { Container, Row, Col } from 'react-bootstrap';

const BoardGameView = ({
  canvasRef,
  width,
  height,
  onClick,
  controlSpeed,
  startGame,
  stopGame,
  clearBoard,
  gameRunning,
  handlePresets,
  gen,
  speed,
}) => {
  return (
    <Container fluid className='justify-content-center boardgame'>
      <Row>
        <Col>
          <RulesView />
        </Col>
      </Row>
      <Row>
        <Col>
          <PresetPanelView />
        </Col>
      </Row>
      <Row className='controls-and-game'>
        <Col xl={2} className='controls'>
          <ControlView
            stop={stopGame}
            start={startGame}
            clear={clearBoard}
            gen={gen}
          />
        </Col>
        <Col xl={10}>
          <CanvasView
            canvasRef={canvasRef}
            width={width}
            height={height}
            onClick={onClick}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BoardGameView;
