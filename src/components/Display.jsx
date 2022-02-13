import React from 'react';
import './Display.css';

export default props =>
  <div className="display">
    <div className='data-hora'>
      00:00 11/02/2022
    </div>

    <div className='dados'>
      {props.value}
    </div>
  </div>