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
          <Row>
            <Col>
              <i
                href='https://www.linkedin.com/in/scottmm374/'
                className='fa-brands fa-linkedin-in'
                target='blank'
              ></i>

              <i
                href='https://github.com/scottmm374'
                className='fa-brands fa-github-alt'
                target='blank'
              ></i>
              <i
                href='mailto:scottmm374@gmail.com'
                className='fas fa-envelope'
                target='blank'
              ></i>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
