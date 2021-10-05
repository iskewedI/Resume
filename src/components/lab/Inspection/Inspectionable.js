import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Fade from 'react-bootstrap/Fade';
import Property, { COLUMN_POSITION } from './Property';
import DragReceiver from './DragReceiver';

const useStyles = makeStyles({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '5rem',
    margin: '2rem',
  },
  inspectionableContainer: {
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'opacity .5s',
    position: 'relative',
    margin: '2rem',
    boxShadow: '-3px 4px 11px 3px #171717',
    gridColumn: '2',
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

const Inspeccionable = ({
  properties = [{ title: '', values: [{ title: '', descriptionComponent: null }] }],
  children,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [mouseState, setMouseState] = useState({
    isInDrag: false,
    dragIndex: null,
  });
  const [inspection, setInspection] = useState({
    selectingOption: false,
    slots: [
      {
        empty: true,
        title: null,
        children: null,
      },
      {
        empty: true,
        title: null,
        children: null,
      },
    ],
  });

  const handleHover = () => {
    if (!inspection.selectingOption && !inspection.slots.find(slot => !slot.empty)) {
      setIsHover(lastHover => !lastHover);
    }
  };

  const handleInspection = ({ title, children }) => {
    setInspection(lastInspection => {
      const slots = lastInspection.slots;
      if (mouseState.isInDrag) {
        slots[mouseState.dragIndex] = { title, empty: false, children };
      }

      return {
        selectingOption: true,
        slots,
      };
    });
  };

  const handleReceiverClear = index => {
    setInspection(lastInspection => {
      const { slots } = lastInspection;
      slots[index] = { empty: true, title: null, children: null };

      const allCleared = slots.every(slot => slot.empty);
      if (allCleared) {
        setIsHover(false);
        setMouseState({ isInDrag: false, dragIndex: null });
      }

      return {
        ...lastInspection,
        selectingOption: !allCleared,
        slots,
      };
    });
  };

  const classes = useStyles(isHover);
  return (
    <div className={classes.gridContainer}>
      {(inspection.selectingOption || !inspection.slots[0].empty) && (
        <DragReceiver
          isReceiving={false}
          {...inspection.slots[0]}
          handleMouseEnter={() => setMouseState({ isInDrag: true, dragIndex: 0 })}
          handleMouseLeave={() => setMouseState({ isInDrag: false, dragIndex: null })}
          handleClear={() => handleReceiverClear(0)}
        />
      )}
      <div
        className={classes.inspectionableContainer}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Fade in={isHover} timeout={2500}>
          <div className={classes.properties}>
            {properties.map((property, i) => (
              <Property
                key={`Property-${i}`}
                {...property}
                columnPosition={getColumnPosition(i)}
                handleInspectionChange={handleInspection}
              />
            ))}
          </div>
        </Fade>
        <div className={classes.childrenContainer}>{children}</div>
      </div>
      {(inspection.selectingOption || !inspection.slots[1].empty) && (
        <DragReceiver
          isReceiving={false}
          {...inspection.slots[1]}
          handleMouseEnter={() => setMouseState({ isInDrag: true, dragIndex: 1 })}
          handleMouseLeave={() => setMouseState({ isInDrag: false, dragIndex: null })}
          handleClear={() => handleReceiverClear(1)}
        />
      )}
    </div>
  );
};

export default Inspeccionable;
