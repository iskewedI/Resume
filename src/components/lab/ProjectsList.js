import React, { useEffect, useState } from 'react';
import ProjectGlance from './ProjectGlance';
import { makeStyles } from '@material-ui/core/styles';
import WithLoading from '../HOC/WithLoading';
import { getProjects } from '../../services/projectsService';

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
  const [hasError, setHasError] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await getProjects();

        setProjects(result.data);
        setLoaded(true);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };

    if (!isLoaded && !hasError) {
      fetchProjects();
    }
  }, [isLoaded, setLoaded, projects, setProjects]);

  return (
    <div className={classes.container}>
      {projects &&
        projects.map(
          ({ images, tooltip, name, description, siteCode, siteWeb }, index) => (
            <ProjectGlance
              key={`Project-${index}`}
              images={images}
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
