import React from 'react';
// import { Label } from "reactstrap";

const ControlView = (props) => {
  return (
    <div>
      <div className='control-buttons'>
        <button onClick={props.start}>Start</button>
        <button onClick={props.stop}>Stop</button>
        <button onClick={props.clear}>Clear</button>
        <h4>Generation: {props.gen}</h4>
      </div>
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
