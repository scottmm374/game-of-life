import React from 'react';
import {
  Container,
  Row,
  Col,
  // eslint-disable-next-line
  Nav,
  // eslint-disable-next-line
  NavItem,
  // eslint-disable-next-line
  NavLink,
  // eslint-disable-next-line
  NavbarText,
  // eslint-disable-next-line
  Navbar,
} from 'reactstrap';
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line
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
