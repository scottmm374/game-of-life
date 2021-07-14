import React from 'react';
import gameOfLife from '../../assets/gameOfLife.png';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='header'>
      <Navbar className='justify-content-center'>
        <img id='header-img' src={gameOfLife} alt='gameOfLife' />
      </Navbar>
    </div>
  );
};

export default Header;
