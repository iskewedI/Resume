import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Button } from '@material-ui/core';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const useStyles = makeStyles({
  container: {
    border: isReceiving => `1px solid ${isReceiving ? 'red' : 'grey'}`,
    margin: '2rem',
    // To fix a problem with the drag an drop, if it is not in front of the draggable item, it cannot be dragged
    zIndex: 101,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '.10fr .10fr .80fr',
    maxHeight: '600px',
    overflow: 'hidden',
  },
  title: {
    color: '#7daab1d4',
  },
  clearButton: {
    color: '#a5a0a2',
    opacity: '.6',
    '&:hover': {
      color: 'red',
      opacity: '1',
    },
    transition: 'opacity .7s ease',
  },
});

const DragReceiver = ({
  isReceiving,
  title,
  children,
  handleMouseEnter,
  handleMouseLeave,
  handleClear,
}) => {
  const classes = useStyles(isReceiving);

  const onClear = () => {
    handleClear();
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children && (
        <Button onClick={onClear}>
          <HighlightOffIcon className={classes.clearButton} />
        </Button>
      )}
      {title && <h3 className={classes.title}>{title}</h3>}
      {children}
    </div>
  );
};

export default DragReceiver;
