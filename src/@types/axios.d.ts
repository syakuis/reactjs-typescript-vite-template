import axios from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    baseURL?: string;
  }
}

export default axios;
