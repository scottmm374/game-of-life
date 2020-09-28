import React from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import GoL from "./images/GoL.png";
import styled from "styled-components";

const HeadImg = styled.img`
  width: 50%;
  box-shadow: 13px 15px 9px #0000008c;
`;

function App() {
  return (
    <div className="App">
      <header>
        <HeadImg id="header-img" src={GoL} alt="GoL" />
        {/* <h1>Game of Life</h1> */}
      </header>

      <ControlPanel />

      <footer>
        <h5>@ Michelle Scott 2020</h5>
      </footer>
    </div>
  );
}

export default App;
