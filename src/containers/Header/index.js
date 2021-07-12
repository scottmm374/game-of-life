import React from 'react'
import gameOfLife from "../../assets/gameOfLife.png";
import { Navbar, Container } from 'react-bootstrap';

// TODO: Center Image, and Bar not sticky. 
const Header = () => {
    return (
        <header >
            <Navbar >
                
                <img id="header-img" src={gameOfLife} alt="gameOfLife" />
                
            </Navbar>
        </header>

    )
}

export default Header