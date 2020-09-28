import React from "react";

const PresetView = (props) => {
  return (
    <>
      <div className="preset-title">
        <h3>Choose a Preset</h3>
      </div>

      <div className="presets">
        <div className="preset-button-container">
          <div className="buttons">
            <div>
              <button className="preset-button" onClick={props.handlePresets} value="thunderbird">
                Thunderbird
              </button>
            </div>
            <div>
              <button button className="preset-button" onClick={props.handlePresets} value="quad_thunderbird">
                Quad-Thunderbird
              </button>
            </div>

            <div>
              <button className="preset-button" onClick={props.handlePresets} value="infinite">
                Infinite
              </button>
            </div>
          </div>
          <div className="buttons">
            <div>
              <button className="preset-button" onClick={props.handlePresets} value="gospers_glider_gun">
                Gospers Glider Gun
              </button>
            </div>
            <div>
              <button className="preset-button" onClick={props.handlePresets} value="mash_up">
                Mash-up
              </button>
            </div>
            <div>
              <button className="preset-button" onClick={props.handlePresets} value="random">
                Random
              </button>
            </div>
          </div>
        </div>
        <div className="rules">
          <h3 className="rules-header">Rules of Conways Game of Life</h3>

          {/* <ul> */}
          <h5 className="rules-subtitle">DEATH</h5>
          <ul>
            <h6>If a cell is Alive it will die if:</h6>
            <li>If the cell has more then 3 neighbors.</li>
            <li>If the cell less than 2 neighbors</li>
          </ul>
          {/* </ul> */}
          {/* <ul> */}
          <h5 className="rules-subtitle">BIRTH</h5>

          <ul>
            <h6>If a cell is Dead it will be born if:</h6>
            <li>It has exactly three neighbors! (No more, no less)</li>
          </ul>
          {/* </ul> */}
          {/* <p>Thats it! Any other circumstances result in no change for the cell!</p> */}
        </div>
      </div>
    </>
  );
};

export default PresetView;
