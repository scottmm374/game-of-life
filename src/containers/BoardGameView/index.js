import React from 'react';
import ControlView from '../ControlsView';
import PresetPanelView from '../PresetPanelView';
import RulesView from '../RulesView/index';
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
    <Container fluid>
      <Row>
        <Col>
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            onClick={onClick}
          />
          <ControlView
            stop={stopGame}
            start={startGame}
            clear={clearBoard}
            gen={gen}
          />
        </Col>
        <Col>
          <PresetPanelView handlePresets={handlePresets} />
          <RulesView />
        </Col>
      </Row>
    </Container>
  );
};

export default BoardGameView;
