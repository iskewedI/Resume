import React, { useState } from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DirectionalArrow from './DirectionalArrow';
import { getNextItemInfiniteArray } from '../../logic/Utils';

const useStyles = makeStyles({
  arrow: {
    height: '50px',

    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
  },
  arrowLeft: {
    left: 0,
  },
  arrowRight: {
    right: 0,
  },
  arrowsContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
  },
  arrowContainer: {
    width: '30%',
    height: '100%',
    position: 'relative',
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
    const nextImage = getNextItemInfiniteArray(indexActive, direction, images);

    setIndexActive(nextImage);
  };
  return (
    <div className={classes.container}>
      {images.length > 1 && (
        <div className={classes.arrowsContainer}>
          <div
            className={classes.arrowContainer}
            onClick={() => handleImageChange('left')}
          >
            <DirectionalArrow
              direction='left'
              className={`${classes.arrow} ${classes.arrowLeft}`}
            />
          </div>
          <div
            className={classes.arrowContainer}
            onClick={() => handleImageChange('right')}
          >
            <DirectionalArrow
              direction='right'
              className={`${classes.arrow} ${classes.arrowRight}`}
            />
          </div>
        </div>
      )}
      <section>
        {images.map((image, index) => (
          <CardMedia
            key={`CardMedia-${tooltip}`}
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
