import axios from 'axios';

// import { getAccessToken } from '../localStorage/auth';
import { apiUrl } from './apiConstants';

const instance = axios.create({ baseURL: apiUrl });

// instance.interceptors.request.use((config) => {
//   const token = getAccessToken();

//   return {
//     ...config,
//     headers: {
//       ...config.headers,
//       Authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const publicRoutes = ['/login'];
//     const isNotUnauthorizedError = error?.response?.status !== 401;
//     const isPublicRoute = publicRoutes.includes(window.location.pathname);

//     if (isNotUnauthorizedError || isPublicRoute) {
//       return Promise.reject(error);
//     }

//     window.location.href = '/login';
//   }
// );

export default instance;
