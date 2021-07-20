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
        .map(({ name, description, id, html_url, homepage }, index) => ({
          name,
          tooltip: `Image of ${name}`,
          imageUrl: `https://picsum.photos/500/300?random=${index}`,
          description,
          id,
          siteCode: html_url,
          siteWeb: homepage,
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
        projects.map(
          ({ imageUrl, tooltip, name, description, siteCode, siteWeb }, index) => (
            <ProjectGlance
              key={`Project-${index}`}
              images={[imageUrl, `https://picsum.photos/500/500?random=${index + 1 * 2}`]}
              tooltip={tooltip}
              name={name}
              description={description}
              siteCode={siteCode}
              siteWeb={siteWeb}
            />
          )
        )}
    </div>
  );
};

export default WithLoading(ProjectList, 'Loading projects...');
