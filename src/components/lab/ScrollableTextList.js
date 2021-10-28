import React, { useMemo, useState } from 'react';
import { Typography } from '@material-ui/core';
import { getNextItemInfiniteArray } from '../../logic/Utils';

const ScrollableTextList = ({ list, classes }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(true);

  const handleScroll = useMemo(
    () => evt => {
      const { deltaX, deltaY } = evt;

      const movement = deltaX || deltaY;

      if (!movement || deltaX < -100 || deltaX > 100) return;

      let direction = movement < 0 ? 'left' : 'right';

      const nextTitle = getNextItemInfiniteArray(titleIndex, direction, list);

      setIsScrollable(false);
      setTimeout(() => setIsScrollable(true), 200);

      setTitleIndex(nextTitle);
    },
    [titleIndex, setIsScrollable, list]
  );

  return (
    <div>
      <Typography
        variant='h2'
        className={classes}
        onScroll={evt => isScrollable && handleScroll(evt)}
        onWheel={evt => isScrollable && handleScroll(evt)}
      >
        {list[titleIndex]}
      </Typography>
    </div>
  );
};

export default ScrollableTextList;
