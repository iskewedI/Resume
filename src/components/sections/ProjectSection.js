import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import ProjectsList from '../lab/ProjectsList';

const useStyles = makeStyles({
  header: {
    color: '#8a8b96',
    textTransform: 'uppercase',
    fontWeight: 400,
  },
});

const ProjectSection = () => {
  const classes = useStyles();

  return (
    <div style={{ textAlign: 'center' }}>
      <LightSpeed left>
        <Typography className={classes.header} variant='h1'>
          Projects
        </Typography>
      </LightSpeed>
      <Fade bottom>
        <ProjectsList />
      </Fade>
    </div>
  );
};

export default ProjectSection;
