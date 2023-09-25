import axios from 'axios';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import Qs from 'qs';

axios.defaults.baseURL = '';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.paramsSerializer = (params) =>
  Qs.stringify(params, { arrayFormat: 'repeat' });

const calculatePercentage = (loaded: number, total = 0) =>
  Math.floor(loaded) / total;

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
