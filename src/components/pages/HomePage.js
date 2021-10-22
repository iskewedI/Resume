import { makeStyles, Typography } from '@material-ui/core';
import React, { Suspense, useState } from 'react';
import { getNextItemInfiniteArray } from '../../logic/Utils';
import InProgress from '../global/InProgress';
import ProfileImage from '../global/ProfileImage';
import Inspectionable from '../lab/Inspection/Inspectionable';
import Rocket from '../lab/Vehicles/Rocket/Rocket';
import Moon from '../lab/Moon';
import { Canvas } from '@react-three/fiber';
import GeometryLoading from '../global/GeometryLoading';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
  presentationTitle: {
    color: '#8a8b96',
    '@media (max-width:1024px)': {
      fontSize: '3rem',
    },
  },
  presentationDescription: {
    color: '#8a8b96',
    '@media (max-width:1024px)': {
      fontSize: '1.5rem',
    },
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
      {window.matchMedia('(min-width: 768px)').matches && (
        <InProgress style={{ position: 'absolute', marginTop: '10px' }} />
      )}

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

      <Inspectionable
        properties={[
          {
            title: 'TOP Interests',
            values: [
              {
                title: 'Future Tech',
                descriptionComponent: (
                  <div style={{ color: '#afafaf' }}>Future tech is incredible man!</div>
                ),
              },
              {
                title: 'Space Exploration/Investigation',
                descriptionComponent: (
                  <div style={{ color: '#afafaf', maxHeight: '500px' }}>
                    <h5>Space Exploration/Investigation is incredible man!</h5>
                    <Canvas>
                      <Suspense fallback={<GeometryLoading />}>
                        <pointLight position={[10, 10, 10]} />
                        <Moon position={[0, 5, -25]} />
                        <Rocket position={[0, -15, -25]} />
                      </Suspense>
                    </Canvas>
                  </div>
                ),
              },
              {
                title: 'AI & Machine Learning',
                descriptionComponent: (
                  <div style={{ color: '#afafaf' }}>
                    AI and Machine Learning is incredible man!
                  </div>
                ),
              },
            ],
          },
          {
            title: 'Hobbies',
            values: [
              {
                title: 'Training',
                descriptionComponent: (
                  <div style={{ color: '#afafaf' }}>Training is incredible man!</div>
                ),
              },
              {
                title: 'Music',
                descriptionComponent: (
                  <div style={{ color: '#afafaf' }}>Music is incredible man!</div>
                ),
              },
            ],
          },
        ]}
      >
        <ProfileImage />
      </Inspectionable>
      {!window.matchMedia('(min-width: 768px)').matches && (
        <InProgress style={{ marginBottom: '30px' }} />
      )}
    </div>
  );
};

export default HomePage;
