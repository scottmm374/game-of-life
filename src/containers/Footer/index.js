import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer'>
      <footer>
        <p className='footer'>
          This version of Conways Game of Life created by{' '}
          <a href='https://github.com/scottmm374/game-of-life'>
            Michelle Scott
          </a>{' '}
          @2020
        </p>
      </footer>
    </div>
  );
};

export default Footer;
