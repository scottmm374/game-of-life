import React from "react";
// import thunderbird from "../../assets/thunderbird.png";
// import quad_thunderbird from "../../assets/quad_thunderbird.png";
// import infinite from "../../assets/infinite.png";
// import mash_up from "../../assets/mash_up.png";
// import gospers_glider_gun from "../../assets/gospers_glider_gun.png";
import styled from "styled-components";
import { Button } from "reactstrap";
// import Presets from "../";

// const NewImg = styled.img`
//   height: 60px;
//   width: 60px;
//   border-radius: 5px;
// `;

const NewButton = styled(Button)`
  margin: 10px;
  width: 200px;
  height: 37px;
  background-color: #313131;
  color: #e67212;
  border: 1px solid #e67212;
  box-shadow: 5px 4px 9px #e67212;
  &:hover {
    color: #e03c8a;
    border: 1px solid #e03c8a;
    background-color: #313131;
    margin-top: 5px;
    box-shadow: 5px 4px 9px #e03c8a;
  }
`;

const PresetView = (props) => {
  return (
    <>
      <div className="presets">
        <div className="preset-buttons">
          <h2>Choose a Preset</h2>
          <div className="buttons">
            <div>
              {/* <NewImg alt="thunderbird" src={thunderbird} /> */}
              <NewButton onClick={props.handlePresets} value="thunderbird">
                Thunderbird
              </NewButton>
            </div>
            <div>
              {/* <NewImg alt="quad_thunderbird" src={quad_thunderbird} /> */}
              <NewButton onClick={props.handlePresets} value="quad_thunderbird">
                Quad-Thunderbird
              </NewButton>
            </div>

            <div>
              {/* <NewImg alt="infinite" src={infinite} /> */}
              <NewButton onClick={props.handlePresets} value="infinite">
                Infinite
              </NewButton>
            </div>
          </div>
          <div className="buttons">
            <div>
              {/* <NewImg alt="gospers_glider_gun" src={gospers_glider_gun} /> */}
              <NewButton onClick={props.handlePresets} value="gospers_glider_gun">
                Gospers Glider Gun
              </NewButton>
            </div>
            <div>
              {/* <NewImg alt="mash_up" src={mash_up} /> */}
              <NewButton onClick={props.handlePresets} value="mash_up">
                Mash-up
              </NewButton>
            </div>
            <div>
              {/* <NewImg alt="mash_up" src={mash_up} /> */}
              <NewButton onClick={props.handlePresets} value="random">
                Random
              </NewButton>
            </div>
          </div>
        </div>
        <div className="rules">
          <h3>Rules of Conways Game of Life</h3>
          <h5>DEATH</h5>
          <ul>
            <h6>If a cell is Alive it will die if:</h6>
            <li>If the cell has more then 3 neighbors.</li>
            <li>If the cell less than 2 neighbors</li>
          </ul>
          <h5>BIRTH</h5>
          <ul>
            <h6>If a cell is Dead it will be born if:</h6>
            <li>It has exactly three neighbors! (No more, no less)</li>
          </ul>
          <p>Thats it! Any other circumstances result in no change for the cell!</p>
        </div>
      </div>
    </>
  );
};

export default PresetView;
