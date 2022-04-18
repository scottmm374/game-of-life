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
          <Navbar expand='md'>
            <NavbarText>Conways Game of Life</NavbarText>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='https://www.linkedin.com/in/scottmm374/'>
                  <i className='fa-brands fa-linkedin-in' target='blank'></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/scottmm374'>
                  <i className='fa-brands fa-github-alt' target='blank'></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='mailto:scottmm374@gmail.com'>
                  <i className='fas fa-envelope' target='blank'></i>
                </NavLink>
              </NavItem>
            </Nav>
            {/* <NavbarText>Conways Game of Life</NavbarText> */}

            {/* <NavItem>
              <a href='https://github.com/scottmm374' target='blank'>
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
              <a href='https://www.linkedin.com/in/scottmm374/' target='blank'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href='mailto:scottmm374@gmail.com'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            */}
          </Navbar>
        </Container>
      </header>
    </>
  );
};

export default Header;
