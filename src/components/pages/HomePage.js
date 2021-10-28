import { makeStyles, Typography } from '@material-ui/core';
import React, { Suspense } from 'react';
import InProgress from '../global/InProgress';
import ProfileImage from '../global/ProfileImage';
import Inspectionable from '../lab/Inspection/Inspectionable';
import Moon from '../lab/Moon';
import { Canvas } from '@react-three/fiber';
import GeometryLoading from '../global/GeometryLoading';
import ScrollableTextList from '../lab/ScrollableTextList';

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
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {window.matchMedia('(min-width: 768px)').matches && (
        <InProgress style={{ position: 'absolute', marginTop: '10px' }} />
      )}

      <Typography variant='h1' className={classes.presentationTitle}>
        Joaquín Tornello
      </Typography>

      <ScrollableTextList classes={classes.presentationDescription} list={titles} />

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
                    <div style={{ padding: '1rem' }}>
                      <h5 style={{ fontStyle: 'italic', textDecoration: '' }}>
                        I dream with humans travelling all across the galaxies, evolving
                        into an interstellar species.
                      </h5>
                    </div>

                    <Canvas>
                      <Suspense fallback={<GeometryLoading />}>
                        <pointLight position={[10, 10, 10]} />
                        <Moon position={[0, 5, -25]} />
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
