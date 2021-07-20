import React, { useState } from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DirectionalArrow from './DirectionalArrow';

const useStyles = makeStyles({
  arrowsContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
  },
  arrow: {
    height: '50px',
    opacity: '.6',
    transition: 'opacity .15s linear',
    '&:hover': {
      opacity: '1',
    },
  },
  container: {
    height: '200px',
    position: 'relative',
    filter: 'grayscale(.75)',
    '&:hover': {
      filter: 'grayscale(0)',
    },
    transition: '.35s filter ease',
  },
  sliderItem: {
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    transition: '1s ease',
  },
  sliderItemActive: {
    opacity: 1,
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
    <div className={classes.container}>
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
      <section>
        {images.map((image, index) => (
          <CardMedia
            key={`CardMedia-${index}`}
            className={`${commonClasses} ${classes.sliderItem} ${
              index === indexActive ? classes.sliderItemActive : ''
            }`}
            image={image}
            title={tooltip}
          />
        ))}
      </section>
    </div>
  );
};

export default CardMediaList;
