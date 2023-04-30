import axios from 'axios';
import Qs from 'qs';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

axios.defaults.baseURL = import.meta.env.VITE_API_GATEWAY_HOST;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.withCredentials = true;
axios.defaults.paramsSerializer = (params) =>
  Qs.stringify(params, {arrayFormat: 'repeat'});

const calculatePercentage = (loaded, total) => Math.floor(loaded * 1.0) / total;

axios.defaults.onDownloadProgress = (e) => {
  const percentage = calculatePercentage(e.loaded, e.total);
  nprogress.set(percentage);
};

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err),
);

axios.interceptors.response.use(
  (res) => {
    nprogress.done(true);
    return res;
  },
  (err) => {
    nprogress.done(true);
    return Promise.reject(err);
  },
);
