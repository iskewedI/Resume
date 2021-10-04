import React from 'react';
import { makeStyles } from '@material-ui/core';

export const COLUMN_POSITION = {
  LEFT: 0,
  RIGHT: 1,
};

const useStyles = makeStyles({
  container: {
    textAlign: props =>
      props.columnPosition === COLUMN_POSITION.LEFT ? 'left' : 'right',
    alignSelf: 'center',
    opacity: '100% !important',
    zIndex: 100,
    color: 'white',
    margin: '0 10px',
  },
  title: {
    textShadow: '-3px 4px 9px black',
  },
  valuesContainer: {
    textShadow: '-3px 4px 9px #2d2d2d',
  },
});

const InspectionProperty = ({
  title,
  values = [],
  columnPosition = COLUMN_POSITION.LEFT,
}) => {
  const classes = useStyles({ columnPosition });

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.valuesContainer}>
        {values.map(value => (
          <p>{value}</p>
        ))}
      </div>
    </div>
  );
};

export default InspectionProperty;
