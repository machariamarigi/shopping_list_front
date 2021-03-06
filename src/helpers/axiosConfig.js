import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://shopping-listy-api.herokuapp.com/api/v1/',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem('authorization');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default axiosConfig;
