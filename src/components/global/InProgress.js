import React from 'react';
import AnimatedGear from '../../misc/img/Animated_Gear.svg';

const InProgress = ({ logoWidth = 64, style }) => {
  return (
    <div style={style}>
      <img width={logoWidth} src={AnimatedGear} alt='' />
      <h5 style={{ padding: 3, color: '#8a8b96', opacity: '.5' }}>Work In progress...</h5>
    </div>
  );
};

export default InProgress;
