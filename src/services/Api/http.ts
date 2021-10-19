import axios from 'axios';
import { parseCookies } from 'nookies';

import { apiUrl } from './apiConstants';

const { 'deliveryApp-accessToken': token } = parseCookies();

export const instance = axios.create({
  baseURL: apiUrl,
});

if (token) {
  instance.defaults.headers.Authorization = `Token ${token}`;
}

// export const instanceLogged = axios.create({
//   baseURL: apiUrl,
//   headers: {
//     Authorization: `Token ${token}`,
//   },
//   // 6c7666310cb49e31b5b30ce6998f6ddd0be62da9
// });

// instance.interceptors.request.use((config) => {
//   const token = token();

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
