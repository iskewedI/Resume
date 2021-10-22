import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

const useStyles = makeStyles({
  text: {
    color: selected => (selected ? 'white' : '#d6d3d3'),
  },
});

const Value = ({ text, selected, handleDragStart, handleDragEnd }) => {
  const classes = useStyles(selected);

  return (
    <Draggable onStart={handleDragStart} onStop={handleDragEnd} position={{ x: 0, y: 0 }}>
      <p className={`${classes.text} unselectable-text`}>{text}</p>
    </Draggable>
  );
};

export default Value;
