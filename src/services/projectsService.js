import httpService from './httpService';

const apiEndpoint = '/projects';

export const getProjects = () => {
  return httpService.get(apiEndpoint);
};

export default {
  getProjects,
};
