/* eslint-disable camelcase */
import { parseCookies } from 'nookies';

import { deliveryRestAuth } from './apiConstants';
import { instance } from './http';

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  phone: number;
  document_umber: number;
  legal_identity: string;
}
const { 'deliveryApp-accessToken': token } = parseCookies();

export const getUserData = async () => {
  if (token) {
    instance.defaults.headers.Authorization = `Token ${token}`;
  }
  const response = await instance.get<IUser>(`${deliveryRestAuth}/user/`);
  return response.data;
};
// export const getUserData = async () => {
//   const response = await instance.get<any>(`${deliveryRestAuth}/user/`, {
//     params: { city: 'Santa Maria' },
//   });
//   return response.data;
// };
