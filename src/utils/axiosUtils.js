import axios from 'axios';

const baseURL =
  process.env.BACKEND_ROOT_URI ?? 'https://bridgegood.herokuapp.com';

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
      authorization: token,
    },
  };
}
