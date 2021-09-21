/* eslint-disable camelcase */

import { deliveryRestAuth } from './apiConstants';
import instance from './http';

export interface ICredentialsData {
  email: string;
  password: string;
}

export interface IRegistersData {
  first_name: string;
  last_name: string;
  email: string;
  password1: string;
  password2: string;
  legal_identity: string;
  document_number: string;
  phone: string;
}

// TODO: ajustar retorno
export interface IMeResponseData {
  id: string;
  email: string;
  name: string;
}

export const authMe = async (): Promise<IMeResponseData> => {
  const response = await instance.get<IMeResponseData>('/rest-auth/user/');
  return response.data;
};

export const authLogin = async (data: ICredentialsData): Promise<string> => {
  const response = await instance.post<string>(
    `${deliveryRestAuth}/login/`,
    data
  );

  console.log('responseAPI', response);
  return response.data;
};

export const register = async (
  data: IRegistersData
): Promise<IRegistersData> => {
  const response = await instance.post(
    `${deliveryRestAuth}/registration/`,
    data
  );

  console.log('responseAPI', response);
  return response.data;
};
// TODO: revisar
export const logout = async (): Promise<IMeResponseData> => {
  const response = await instance.get<IMeResponseData>(
    `${deliveryRestAuth}/logout`
  );

  return response.data;
};
