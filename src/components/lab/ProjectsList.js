import React, { useEffect, useState } from 'react';
import ProjectGlance from './ProjectGlance';
import { makeStyles } from '@material-ui/core/styles';
import WithLoading from '../HOC/WithLoading';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    gap: '2rem',
    placeContent: 'center',
    flexWrap: 'wrap',
    padding: '1rem',
  },
});

const ProjectList = ({ isLoaded, setLoaded }) => {
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

    if (!isLoaded) {
      fetchProjects();
    }
  }, [isLoaded, setLoaded, projects, setProjects]);

  return (
    <div className={classes.container}>
      {projects &&
        projects.map(({ imageUrl, tooltip, name, description, site }) => (
          <ProjectGlance
            images={[
              imageUrl,
              'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90ZW50aWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            ]}
            tooltip={tooltip}
            name={name}
            description={description}
            siteUrl={site}
          />
        ))}
    </div>
  );
};

export default WithLoading(ProjectList, 'Loading projects...');
