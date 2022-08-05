import React from 'react';
import { Container, Row, Col, ButtonGroup } from 'reactstrap';

const PresetView = (props) => {
  return (
    <>
      <Container>
        <div>
          <h4 className='titles-preset-rules'>Choose a Preset</h4>
        </div>

        <div className='button-containers'>
          <ButtonGroup>
            <button
              className='preset-button'
              onClick={props.handlePresets}
              value='thunderbird'
            >
              Thunderbird
            </button>

            <button
              button
              className='preset-button'
              onClick={props.handlePresets}
              value='quad_thunderbird'
            >
              Quad-Thunderbird
            </button>
            <button
              className='preset-button'
              onClick={props.handlePresets}
              value='infinite'
            >
              Infinite
            </button>
          </ButtonGroup>
        </div>
        <div className='button-containers'>
          <ButtonGroup>
            <button
              className='preset-button'
              onClick={props.handlePresets}
              value='gospers_glider_gun'
            >
              Gospers Glider Gun
            </button>
            <button
              className='preset-button'
              onClick={props.handlePresets}
              value='mash_up'
            >
              Mash-up
            </button>

            <button
              className='preset-button'
              onClick={props.handlePresets}
              value='random'
            >
              Random
            </button>
          </ButtonGroup>
        </div>
      </Container>
    </>
  );
};

export default PresetView;
