import React from 'react';
import { Container, Row, Col, ButtonGroup } from 'reactstrap';

const ControlView = (props) => {
  return (
    <>
      <ButtonGroup>
        <i class='fa-solid fa-circle-play' onClick={props.startGame}></i>
        <i class='fa-solid fa-circle-pause' onClick={props.stopGame}></i>
        <i class='fa-solid fa-arrows-rotate' onClick={props.clearBoard}></i>
        {/* <button className='control-button' onClick={props.stopGame}>
          Stop
        </button>
        <button className='control-button' onClick={props.clearBoard}>
          Clear
        </button> */}
      </ButtonGroup>

      {/* </Col>
          <Col> */}

      <div className='gen'>
        <p>Generations: {props.gen}</p>
      </div>
    </>
  );
};

export default ControlView;
