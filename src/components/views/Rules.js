import React from 'react';
// eslint-disable-next-line
import { Container, Row, Col, List } from 'reactstrap';

const Rules = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3 className='titles-preset-rules'>
              Rules of Conways Game of Life
            </h3>

            <main>
              <ul type='unstyled'>
                <h5 className='death-birth'>
                  {' '}
                  DEATH: If a cell is ALIVE it will DIE:
                </h5>
                <ul>
                  <li>The cell has more then 3 neighbors.</li>
                  <li>The cell has less then 2 neighbors</li>
                </ul>
                <h5 className='death-birth'>
                  {' '}
                  BIRTH: If a cell is DEAD it will be BORN if:
                </h5>
                <ul>
                  <li>
                    The cell has exactly three neighbors, it will come to Life!
                  </li>
                </ul>
              </ul>
            </main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rules;
