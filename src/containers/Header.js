import React from 'react';
// import gameOfLife from '../images/gameOfLife.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedinIn } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <header>
        <div className='icon-wrapper'>
          <FontAwesomeIcon icon={faGithubAlt} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faEnvelope} />

          {/* <img id='header-img' src={gameOfLife} alt='gameOfLife' /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
