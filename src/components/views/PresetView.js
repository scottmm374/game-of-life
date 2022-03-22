import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const PresetView = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h3 className='preset-title'>Choose a Preset</h3>
          </Col>
        </Row>
        <Row className='button-containers'>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='rules-header'>Rules of Conways Game of Life</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className='rules-subtitle'>DEATH</h5>
            <ul>
              <h6>If a cell is Alive it will die if:</h6>
              <li>If the cell has more then 3 neighbors.</li>
              <li>If the cell has less then 2 neighbors</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className='rules-subtitle'>BIRTH</h5>

            <ul>
              <h6>If a cell is Dead it will be born if:</h6>
              <li>
                If the cell has exactly three neighbors, it will come to Life!
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresetView;
