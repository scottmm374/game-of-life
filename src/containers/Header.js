import React from 'react';
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Navbar,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Row style={{ 'align-items': 'baseline' }}>
            <Col>
              <h1>Michelle's Game of Life</h1>
            </Col>
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
      </header>
    </>
  );
};

export default Header;
