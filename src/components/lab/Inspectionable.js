import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Fade from 'react-bootstrap/Fade';
import InspectionProperty, { COLUMN_POSITION } from './InspectionProperty';

const useStyles = makeStyles({
  mainContainer: {
    display: 'inline-block',
    cursor: 'pointer',
    // '&:hover': {
    //   opacity: '25%',
    // },
    transition: 'opacity .5s',
    position: 'relative',
    margin: '2rem',
    boxShadow: '-3px 4px 11px 3px #171717',
  },
  childrenContainer: {
    opacity: isHover => (isHover ? '25%' : '100%'),
    filter: isHover => (isHover && 'blur(2px)') || '',
  },
  properties: {
    display: 'grid',
    position: 'absolute',
    width: '100%',
    height: '100%',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridAutoFlow: 'column',
  },
});

const getColumnPosition = index =>
  index < 3 ? COLUMN_POSITION.LEFT : COLUMN_POSITION.RIGHT;

const Inspeccionable = ({ properties = [{ title: '', values: [''] }], children }) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(lastHover => !lastHover);
  };

  const classes = useStyles(isHover);
  return (
    <div
      className={classes.mainContainer}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Fade in={isHover} timeout={2500}>
        <div className={classes.properties}>
          {properties.map((property, i) => (
            <InspectionProperty {...property} columnPosition={getColumnPosition(i)} />
          ))}
        </div>
      </Fade>

      <div className={classes.childrenContainer}>{children}</div>
    </div>
  );
};

export default Inspeccionable;
