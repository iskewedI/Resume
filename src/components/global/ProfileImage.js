import React from 'react';
import { makeStyles } from '@material-ui/core';

import Image from '../../misc/img/Me.png';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
  image: {
    maxHeight: '600px',
    borderRadius: '2%',
    width: '100%',
  },
});

const ProfileImage = ({ styles = {} }) => {
  const classes = useStyles();

  return (
    <img
      className={classes.image}
      style={styles}
      src={Image}
      alt='Profile Image'
      draggable={false}
    />
  );
};

export default ProfileImage;
