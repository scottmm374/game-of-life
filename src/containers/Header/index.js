import React from 'react'
import gameOfLife from "../assets/gameOfLife.png";
import { Navbar, Container } from 'react-bootstrap';

// TODO: Center Image, and Bar not sticky. 
const Header = () => {
    return (
        <Container fluid>
            <Navbar >
                <div className='.header'>
                <img id="header-img" src={gameOfLife} alt="gameOfLife" />
                </div>
                
            </Navbar>
        </Container>

    )
}

export default Header