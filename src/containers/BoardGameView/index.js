import React from 'react';
import ControlPanelView from '../ControlsView';
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
    <Container className='boardgame'>
      {/* <Row className='rules'>
        <Col>
          <RulesView />
        </Col>
      </Row> */}

      <Row className='game'>
        <Col>
          <CanvasView
            canvasRef={canvasRef}
            width={width}
            height={height}
            onClick={onClick}
          />
        </Col>
      </Row>
      <Row className=' panel'>
        <Col>
          <ControlPanelView
            gen={gen}
            stop={stopGame}
            start={startGame}
            clear={clearBoard}
            handlePresets={handlePresets}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BoardGameView;
