import React from 'react';
import Gear from '../../misc/img/Gear.svg';

const InProgress = ({ logoWidth = 64, style }) => {
  return (
    <div style={style}>
      <img width={logoWidth} src={Gear} alt='' />
      <h5 style={{ padding: 3, color: '#8a8b96', opacity: '.5' }}>Work In progress...</h5>
    </div>
  );
};

export default InProgress;
