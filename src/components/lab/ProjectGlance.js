import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardMediaList from './CardMediaList';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 180,
  },
  actions: {
    justifyContent: 'center',
  },
});

const getValidUrl = (web, code) => {
  if (web) {
    if (web !== window.location.href) {
      return web;
    }
  }
  if (code) {
    return code;
  }
};

const ProjectGlance = ({
  images = [],
  tooltip,
  name,
  description,
  siteWeb,
  siteCode,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMediaList images={images} commonClasses={classes.media} tooltip={tooltip} />
        <CardContent
          onClick={() =>
            setTimeout(() => window.open(getValidUrl(siteWeb, siteCode), '_blank'), 300)
          }
        >
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size='small' color='primary' href={siteCode} target='_blank'>
          See code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectGlance;
