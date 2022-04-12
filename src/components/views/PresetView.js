import React from 'react';
import { Container, Row, Col, ButtonGroup } from 'reactstrap';

const PresetView = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <p className='titles-preset-rules'>Choose a Preset</p>
          </Col>
        </Row>
        <Row className='button-containers'>
          <Col>
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
          </Col>
        </Row>
        <Row className='button-containers'>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresetView;
