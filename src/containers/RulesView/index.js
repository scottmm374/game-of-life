import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RulesView = () => {
  return (
    <Container className='rules'>
      <Row>
        <Col>
          <Row>
            <Col>
              <h2> The Rules! </h2>
              <p>
                The Game of Life originally created by John Conway is an
                infinite, two-dimenstional grid of cells, each of shich can only
                exist in one of two states, "Alive" or "Dead." Every cell
                interactcs with its neighbor, (the 8 cells immediatly
                sourounding the cell ).
              </p>
              <p>With each "birth or 'death" the follwing happens:</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>When a cell is Dead it will be "Born"</p>

              <ul>
                <li>If the cell has exactly three neighbors</li>
              </ul>
            </Col>
            <Col>
              <p>When a cell is "Alive" it will "DIE"</p>
              <ul>
                <li>If the cell has more then 3 neighbors.</li>
                <li>If the cell has less then 2 neighbors</li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                Can you keep your generations ticking? Try your own pattern on
                the board following the rules.
              </p>
              <p>Yeah really, thats it!</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RulesView;
