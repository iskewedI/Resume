import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { getNextItemInfiniteArray } from '../../logic/Utils';
import InProgress from '../global/InProgress';

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
    const { deltaX, deltaY } = evt;

    const movement = deltaX || deltaY;

    if (!movement || deltaX < -100 || deltaX > 100) return;

    let direction = movement < 0 ? 'left' : 'right';

    const nextTitle = getNextItemInfiniteArray(titleIndex, direction, titles);

    setIsScrollable(false);
    setTimeout(() => setIsScrollable(true), 200);

    setTitleIndex(nextTitle);
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <InProgress style={{ position: 'absolute', marginTop: '10px' }} />
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
