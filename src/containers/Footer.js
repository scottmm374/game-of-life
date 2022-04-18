import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col>
              <p>
                This version of Conways Game of Life created by{' '}
                <a href='https://github.com/scottmm374/game-of-life'>
                  Michelle Scott
                </a>{' '}
                @2020
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
