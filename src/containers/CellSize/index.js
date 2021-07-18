import React from 'react';

const CellSize = (props) => {
  return (
    <>
      <label>
        <input
          type='radio'
          value='10'
          name='radio-btn'
          onClick={props.handlePresets}
        />
        10
      </label>
      <label>
        <input
          type='radio'
          value='20'
          name='radio-btn'
          onClick={props.handlePresets}
        />
        20
      </label>
      <label>
        <input
          type='radio'
          value='50'
          name='radio-btn'
          onClick={props.handlePresets}
        />
        50
      </label>
    </>
  );
};

export default CellSize;
