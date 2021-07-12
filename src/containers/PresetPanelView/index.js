import React from 'react';

const PresetView = (props) => {
  return (
    <>
      <div className='preset-title'>
        <h3>Choose a Preset</h3>
      </div>

      <div className='presets'>
        <div className='preset-button-container'>
          <div className='buttons'>
            <div>
              <button
                className='preset-button'
                onClick={props.handlePresets}
                value='thunderbird'
              >
                Thunderbird
              </button>
            </div>
            <div>
              <button
                button
                className='preset-button'
                onClick={props.handlePresets}
                value='quad_thunderbird'
              >
                Quad-Thunderbird
              </button>
            </div>

            <div>
              <button
                className='preset-button'
                onClick={props.handlePresets}
                value='infinite'
              >
                Infinite
              </button>
            </div>
          </div>
          <div className='buttons'>
            <div>
              <button
                className='preset-button'
                onClick={props.handlePresets}
                value='gospers_glider_gun'
              >
                Gospers Glider Gun
              </button>
            </div>
            <div>
              <button
                className='preset-button'
                onClick={props.handlePresets}
                value='mash_up'
              >
                Mash-up
              </button>
            </div>
            <div>
              <button
                className='preset-button'
                onClick={props.handlePresets}
                value='random'
              >
                Random
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PresetView;
