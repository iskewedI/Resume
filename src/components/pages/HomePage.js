import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { getNextItemInfiniteArray } from '../../logic/Utils';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
  presentationTitle: {
    color: '#8a8b96',
  },
  presentationDescription: {
    color: '#8a8b96',
  },
});

const titles = [
  'FullStack Developer',
  'Astronomy & Space lover',
  'Musical Artist',
  'Stock Investor',
];

const HomePage = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(true);

  const handleTitleScroll = evt => {
    const { deltaX } = evt;

    if (deltaX == 0 || deltaX < -100 || deltaX > 100) return;

    let direction = deltaX < 0 ? 'left' : 'right';

    const nextTitle = getNextItemInfiniteArray(titleIndex, direction, titles);

    setIsScrollable(false);
    setTimeout(() => setIsScrollable(true), 250);

    setTitleIndex(nextTitle);
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant='h1' className={classes.presentationTitle}>
        Joaquín Tornello
      </Typography>
      <div>
        <Typography
          variant='h2'
          className={classes.presentationDescription}
          onScroll={evt => isScrollable && handleTitleScroll(evt)}
          onWheel={evt => isScrollable && handleTitleScroll(evt)}
        >
          {titles[titleIndex]}
        </Typography>
      </div>
    </div>
  );
};

export default HomePage;
