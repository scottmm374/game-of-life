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
        <Col xs={12}>
          <RulesView />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <PresetPanelView handlePresets={handlePresets} gen={gen} />
        </Col>
      </Row>
      <Row className='controls-and-game'>
        <Col xs={12} xl={2} className='controls'>
          <ControlView
            stop={stopGame}
            start={startGame}
            clear={clearBoard}
            gen={gen}
          />
        </Col>
        <Col xs={12} xl={10}>
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
