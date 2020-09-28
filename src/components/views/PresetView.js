import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const PresetView = (props) => {
  return (
    <>
      <div className="preset-title">
        <h2>Choose a Preset</h2>
      </div>

      <div className="presets">
        <div className="preset-buttons">
          <div className="buttons">
            <div>
              <NewButton onClick={props.handlePresets} value="thunderbird">
                Thunderbird
              </NewButton>
            </div>
            <div>
              <NewButton onClick={props.handlePresets} value="quad_thunderbird">
                Quad-Thunderbird
              </NewButton>
            </div>

            <div>
              <NewButton onClick={props.handlePresets} value="infinite">
                Infinite
              </NewButton>
            </div>
          </div>
          <div className="buttons">
            <div>
              <NewButton onClick={props.handlePresets} value="gospers_glider_gun">
                Gospers Glider Gun
              </NewButton>
            </div>
            <div>
              <NewButton onClick={props.handlePresets} value="mash_up">
                Mash-up
              </NewButton>
            </div>
            <div>
              <NewButton onClick={props.handlePresets} value="random">
                Random
              </NewButton>
            </div>
          </div>
        </div>
        <div className="rules">
          <h3>Rules of Conways Game of Life</h3>

          <ul>
            <h5>DEATH</h5>
            <ul>
              <h6>If a cell is Alive it will die if:</h6>
              <li>If the cell has more then 3 neighbors.</li>
              <li>If the cell less than 2 neighbors</li>
            </ul>
          </ul>
          <ul>
            <h5>BIRTH</h5>

            <ul>
              <h6>If a cell is Dead it will be born if:</h6>
              <li>It has exactly three neighbors! (No more, no less)</li>
            </ul>
          </ul>
          <p>Thats it! Any other circumstances result in no change for the cell!</p>
        </div>
      </div>
    </>
  );
};

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
    // margin-top: 5px;
    box-shadow: 5px 4px 9px #e03c8a;
  }
`;
export default PresetView;
