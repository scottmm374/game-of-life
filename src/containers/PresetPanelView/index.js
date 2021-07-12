import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PresetView = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>Choose a Preset</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <button
            className='preset-button'
            onClick={props.handlePresets}
            value='thunderbird'
          >
            Thunderbird
          </button>
        </Col>
        <Col>
          <button
            button
            className='preset-button'
            onClick={props.handlePresets}
            value='quad_thunderbird'
          >
            Quad-Thunderbird
          </button>
        </Col>
      </Row>

      <Row>
        <Col>
          <button
            className='preset-button'
            onClick={props.handlePresets}
            value='infinite'
          >
            Infinite
          </button>
        </Col>
        <Col>
          <button
            className='preset-button'
            onClick={props.handlePresets}
            value='gospers_glider_gun'
          >
            Gospers Glider Gun
          </button>
        </Col>
      </Row>

      <Row>
        <Col>
          <button
            className='preset-button'
            onClick={props.handlePresets}
            value='mash_up'
          >
            Mash-up
          </button>
        </Col>
        <Col>
          <button
            className='preset-button'
            onClick={props.handlePresets}
            value='random'
          >
            Random
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default PresetView;
