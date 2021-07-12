import React from 'react';
import { Container, Card } from 'react-bootstrap';

const RulesView = () => {
  return (
    <Container fluid>
      <Card.Body>
        <Card.Title>
          Rules of Conways Game of Life
          <Card.Subtitle>Birth</Card.Subtitle>
          <Card.Text>
            <ul>
              <h6>If a cell is Dead it will be born if:</h6>
              <li>
                If the cell has exactly three neighbors, it will come to Life!
              </li>
            </ul>
          </Card.Text>
          <Card.Subtitle>Death</Card.Subtitle>
          <Card.Text>
            <ul>
              <h6>If a cell is Alive it will die if:</h6>
              <li>If the cell has more then 3 neighbors.</li>
              <li>If the cell has less then 2 neighbors</li>
            </ul>
          </Card.Text>
        </Card.Title>
      </Card.Body>
      {/* <h3 className="rules-header">Rules of Conways Game of Life</h3>

          <h5 className="rules-subtitle">DEATH</h5>
          <ul>
            <h6>If a cell is Alive it will die if:</h6>
            <li>If the cell has more then 3 neighbors.</li>
            <li>If the cell has less then 2 neighbors</li>
          </ul>
          <h5 className="rules-subtitle">BIRTH</h5>

          <ul>
            <h6>If a cell is Dead it will be born if:</h6>
            <li>If the cell has exactly three neighbors, it will come to Life!</li>
          </ul> */}
    </Container>
  );
};

export default RulesView;
