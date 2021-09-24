import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;
  if (!expectedError) {
    console.error(error);
  }
  return Promise.reject(error); //Interceptor intercepts, run this function and then return the promise to where it was going.
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
