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
        {/* <Row>
          <Col>
            <p className='titles-preset-rules'>Rules of Conways Game of Life</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='death-birth'>DEATH</p>
            <ul>
              <h6>If a cell is Alive it will die if:</h6>
              <li>If the cell has more then 3 neighbors.</li>
              <li>If the cell has less then 2 neighbors</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='death-birth'>BIRTH</p>

            <ul>
              <h6>If a cell is Dead it will be born if:</h6>
              <li>
                If the cell has exactly three neighbors, it will come to Life!
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default PresetView;
