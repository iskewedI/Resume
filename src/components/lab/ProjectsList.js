import React, { useEffect, useState } from 'react';
import ProjectGlance from './ProjectGlance';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    gap: '2rem',
    placeContent: 'center',
    flexWrap: 'wrap',
  },
});

const ProjectList = () => {
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const fetchProjects = async () => {
      const results = await fetch('https://api.github.com/users/iskewedi/repos');

      const body = await results.json();

      const mapped = body
        .filter(project => project.description)
        .slice(0, 6)
        .map(({ name, description, id, html_url }) => ({
          name,
          tooltip: `Image of ${name}`,
          imageUrl:
            'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
          description,
          id,
          site: html_url,
        }));

      setProjects(mapped);
      setLoaded(true);
    };

    if (!loaded) {
      fetchProjects();
    }
  }, [projects, setProjects]);

  return (
    <div className={classes.container}>
      {projects &&
        projects.map(({ imageUrl, tooltip, name, description, site }) => (
          <ProjectGlance
            image={imageUrl}
            tooltip={tooltip}
            name={name}
            description={description}
            siteUrl={site}
          />
        ))}
    </div>
  );
};

export default ProjectList;
