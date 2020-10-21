import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_ROOT_URI
  ? process.env.REACT_APP_BACKEND_ROOT_URI
  : 'https://api.bridgegood.dev';

export default function newAxios(token) {
  return axios.create(token ? getAxiosConfigWithAuth(token) : getAxiosConfig());
}

function getAxiosConfig() {
  return {
    baseURL: baseURL,
    headers: {},
  };
}

function getAxiosConfigWithAuth(token) {
  const config = getAxiosConfig();
  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: 'Bearer ' + token, // add 'Bearer ' at the beginning??
    },
  };
}
