import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Value from './Value';

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
  handleInspectionChange,
}) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleSelect = (id, title, children) => {
    handleInspectionChange({ title, children });
    setSelectedProperty(id);
  };

  const handleDragEnd = (title, children) => {
    handleInspectionChange({ title, children });
  };

  const classes = useStyles({ columnPosition });

  return (
    <div className={classes.container}>
      <h3 className={`${classes.title} unselectable-text`}>{title}</h3>
      <div className={classes.valuesContainer}>
        {values.map(({ title, descriptionComponent }, i) => (
          <Value
            key={`Value-${title}`}
            text={title}
            selected={i === selectedProperty}
            handleDragStart={() => handleSelect(i, title, descriptionComponent)}
            handleDragEnd={() => handleDragEnd(title, descriptionComponent)}
          />
        ))}
      </div>
    </div>
  );
};

export default InspectionProperty;
