import React from 'react';
import HorizontalArrow from '../../misc/img/HorizontalArrow.svg';

const DirectionalArrow = ({ direction, handleClick, className }) => {
  const rotation = direction === 'left' ? 'rotate(180deg)' : '';

  return (
    <img
      src={HorizontalArrow}
      style={{ transform: rotation }}
      alt=''
      className={className}
      onClick={handleClick}
    />
  );
};

export default DirectionalArrow;
