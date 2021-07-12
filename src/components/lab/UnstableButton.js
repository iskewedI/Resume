import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import CircleSVG from '../../misc/img/Circle.svg';

const UnstableButton = ({ onClick, children }) => {
  const [clicked, setClicked] = useState(false);
  const [circleStyles, setCircleStyles] = useState({
    width: '200px',
    transitionDuration: 1.5,
    display: 'fixed',
  });

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setCircleStyles({ width: '400%' });
      setTimeout(
        () => setCircleStyles({ display: 'none' }),
        circleStyles.transitionDuration * 1000
      );
    }, 50);

    onClick();
  };

  if (!clicked)
    return (
      <Button
        className='zoom-in-target'
        variant='contained'
        color='secondary'
        style={{ width: '200px' }}
        onClick={handleClick}
      >
        Start
      </Button>
    );

  return (
    <React.Fragment>
      <img
        className='zoom-in'
        style={{
          display: circleStyles.display,
          width: circleStyles.width,
          transitionDuration: circleStyles.transitionDuration,
        }}
        src={CircleSVG}
      />
      {children}
    </React.Fragment>
  );
};

export default UnstableButton;
