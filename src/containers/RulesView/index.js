import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RulesView = () => {
  return (
    <Container>
      <Row>
        <Col className='about-section '>
          <h2> About </h2>
          <p>
            The Game of Life originally created by John Conway is an infinite,
            two-dimenstional grid of cells, each of shich can only exist in one
            of two states, "Alive" or "Dead." Every cell interactcs with its
            neighbor, (the 8 cells immediatly sourounding the cell ).
          </p>
          <p>
            Can you keep your generations ticking? Try your own pattern on the
            board following the rules.
          </p>
          <p>Yeah really, thats it!</p>
        </Col>
        {/* <Col xs={12} md={4} className='rules-section'> */}
      </Row>
      <Row>
        <Col className='rules-section'>
          <h2> The Rules! </h2>
          <p>With each "Birth or Death" the following happens:</p>
          {/* <Row> */}
          {/* <Col> */}
          <h6>When a cell is Dead it will be "Born"</h6>

          <ul>
            <li>If the cell has exactly three neighbors</li>
          </ul>
          {/* </Col> */}
          {/* </Row> */}
          {/* <Row> */}
          {/* <Col> */}
          <h6>When a cell is "Alive" it will "DIE"</h6>
          <ul>
            <li>If the cell has more then 3 neighbors.</li>
            <li>If the cell has less then 2 neighbors</li>
          </ul>
        </Col>
        {/* </Row> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
};

export default RulesView;
