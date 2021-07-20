import React, { useState } from 'react';
import { CardMedia, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DirectionalArrow from './DirectionalArrow';

const useStyles = makeStyles({
  arrowsContainer: {
    width: '100%',
    height: '65%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    height: '25%',
    opacity: '.8',
    transition: 'opacity .1s linear',
    '&:hover': {
      opacity: '1',
    },
  },
});

const CardMediaList = ({ images = [], commonClasses, tooltip }) => {
  const [indexActive, setIndexActive] = useState(0);

  const classes = useStyles();

  const handleImageChange = direction => {
    if (direction === 'left') {
      if (indexActive - 1 >= 0) {
        setIndexActive(indexActive - 1);
      }
    } else {
      if (indexActive + 1 < images.length) {
        setIndexActive(indexActive + 1);
      }
    }
  };
  return (
    <div>
      {images.length > 1 && (
        <div className={classes.arrowsContainer}>
          <DirectionalArrow
            direction='left'
            className={classes.arrow}
            handleClick={() => handleImageChange('left')}
          />
          <DirectionalArrow
            direction='right'
            className={classes.arrow}
            handleClick={() => handleImageChange('right')}
          />
        </div>
      )}
      <Fade in={true}>
        <CardMedia
          className={commonClasses}
          image={images[indexActive]}
          title={tooltip}
        />
      </Fade>
    </div>
  );
};

export default CardMediaList;
