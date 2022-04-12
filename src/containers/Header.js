import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Container fluid>
      <header>
        <Row>
          {/* <Col className='color-picker'>
            <button className='color-button blue'></button>
            <button className='color-button pink'></button>
            <button className='color-button orange'></button>
          </Col> */}
          <Col>
            <div className='icon-wrapper'>
              <a href='https://github.com/scottmm374' target='blank'>
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
              <a href='https://www.linkedin.com/in/scottmm374/' target='blank'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href='mailto:scottmm374@gmail.com'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </Col>
        </Row>
      </header>
    </Container>
  );
};

export default Header;
