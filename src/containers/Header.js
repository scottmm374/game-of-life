import React from 'react';
import gameOfLife from '../images/gameOfLife.png';

const Header = () => {
  return (
    <>
      <header>
        <img id='header-img' src={gameOfLife} alt='gameOfLife' />
      </header>
    </>
  );
};

export default Header;
