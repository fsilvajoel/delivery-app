import { deliveryRestAuth } from './apiConstants';
import { instance } from './http';

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  documentNumber: number;
  legalIdentity: string;
}

export const getUserData = async () => {
  const response = await instance.get<any>(`${deliveryRestAuth}/user/`);
  return response.data;
};
// export const getUserData = async () => {
//   const response = await instance.get<any>(`${deliveryRestAuth}/user/`, {
//     params: { city: 'Santa Maria' },
//   });
//   return response.data;
// };
