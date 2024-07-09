import axios from 'axios';

export const authenticated = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const unauthenticated = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// const refreshAccessToken = async (originalRequest: InternalAxiosRequestConfig) => {
//   const refreshToken = sessionStorage.getItem('rftk');
//   originalRequest.headers['Authorization-refresh'] = `Bearer ${refreshToken}`;
//   return await axios(originalRequest);
// };

authenticated.interceptors.request.use((config) => {
  config.headers['Authorization'] = localStorage.getItem('actk');
  return config;
});

authenticated.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  },
);
