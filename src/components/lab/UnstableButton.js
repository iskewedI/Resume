import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import CircleSVG from '../../misc/img/Circle.svg';

const UnstableButton = ({ onClick, duration = 1, children }) => {
  const [clicked, setClicked] = useState(false);
  const [circleStyles, setCircleStyles] = useState({
    width: '300px',
    transitionDuration: 1.2,
    display: 'fixed',
  });

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setCircleStyles({ width: '450%' });

      setTimeout(() => {
        setCircleStyles({ display: 'none' });
      }, circleStyles.transitionDuration * 1000);
    }, 50);

    onClick();
  };

  return (
    <React.Fragment>
      {circleStyles.display !== 'none' && (
        <React.Fragment>
          <Button
            className='zoom-in-target'
            variant='contained'
            color='secondary'
            style={{
              width: '200px',
              position: 'absolute',
              transition: `${duration}s filter linear, ${duration} opacity linear`,
              filter: clicked ? 'blur(200px)' : '',
              opacity: clicked ? 0 : 1,
              zIndex: 99,
              display: circleStyles.display,
            }}
            onClick={handleClick}
          >
            Start
          </Button>

          {clicked && (
            <img
              className='zoom-in'
              style={{
                width: circleStyles.width,
                transitionDuration: circleStyles.transitionDuration,
                zIndex: 100,
              }}
              src={CircleSVG}
              alt=''
            />
          )}
        </React.Fragment>
      )}

      {children}
    </React.Fragment>
  );
};

export default UnstableButton;
