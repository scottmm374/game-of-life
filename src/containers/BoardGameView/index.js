import React from 'react';
import ControlView from '../ControlsView';
import PresetPanelView from '../PresetPanelView';
import RulesView from '../RulesView/index';

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
    <>
      <canvas ref={canvasRef} width={width} height={height} onClick={onClick} />
      <ControlView
        stop={stopGame}
        start={startGame}
        clear={clearBoard}
        gen={gen}
      />
      <PresetPanelView handlePresets={handlePresets} />
      <RulesView />
    </>
  );
};

export default BoardGameView;
