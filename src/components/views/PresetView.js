import React from "react";
import clover from "../../assets/clover_leaf.png";
import styled from "styled-components";
import { Button } from "reactstrap";
// import Presets from "../";

const NewImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;

const NewButton = styled(Button)`
  width: 115px;
  height: 37px;
  background-color: #313131;
  color: #e03c8a;
`;

const PresetView = (props) => {
  return (
    <div>
      <div className="presets">
        <div className="preset-buttons">
          <NewImg alt="cloverleaf" src={clover} />
          <NewButton onClick={props.handlePresets} value="hammerhead">
            Choose
          </NewButton>
        </div>
        <div>
          <NewImg alt="blinker" src={clover} />
          <NewButton onClick={props.handlePresets} value="blinker">
            Choose
          </NewButton>
        </div>
        <div>
          <NewImg alt="beacon" src={clover} />
          <NewButton onClick={props.handlePresets} value="beacon">
            Choose
          </NewButton>
        </div>
        <div>
          <NewImg alt="fillin" src={clover} />
          <NewButton onClick={props.handlePresets} value="fillin">
            Choose
          </NewButton>
        </div>
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
};

export default PresetView;
