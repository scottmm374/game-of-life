import React from "react";
import clover from "../../assets/clover_leaf.png";
import styled from "styled-components";

const NewImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;

// const NewContain = styled(Container)`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   border: solid 1px red;
// `;

function PresetView(props) {
  return (
    <div>
      <div className="presets">
        <NewImg onClick={props.handlePresets} value="cloverleaf" src={clover} />
        <NewImg onClick={props.handlePresets} value="blinker" src={clover} />
        <NewImg onClick={props.handlePresets} value="beehive" src={clover} />
        <NewImg src={clover} />
        <NewImg src={clover} />
        <NewImg src={clover} />
      </div>
      <div>
        <h3>Rules of Conways</h3>
        <ol>
          <li>Dont Die</li>
          <li>Dont Die</li>
          <li>Dont Die</li>
        </ol>
      </div>
    </div>
  );
}

export default PresetView;
