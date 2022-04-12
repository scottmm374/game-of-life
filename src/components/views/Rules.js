import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Rules = () => {
  return (
    <>
      <Container>
        <Row>
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
        </Row>
      </Container>
    </>
  );
};

export default Rules;
