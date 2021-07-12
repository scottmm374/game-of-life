import React from 'react';
// import { Label } from "reactstrap";

const ControlView = (props) => {
  return (
    <div>
      <button className='control-button' onClick={props.start}>
        Start
      </button>
      <button className='control-button' onClick={props.stop}>
        Stop
      </button>
      <button className='control-button' onClick={props.clear}>
        Clear
      </button>
      <h4>Generation: {props.gen}</h4>
      {/* <slider className='slider-speed'>
        <Label htmlFor='controlSpeed'>Speed</Label>
        <input
          type='range'
          min='50'
          max='1000'
          step='50'
          onChange={props.controlSpeed}
        />
      </slider> */}
    </div>
  );
};

export default ControlView;
