import axios from 'axios';

import { deliveryAddress, deliveryparner } from '../apiConstants';
import { instance } from '../http';
import { IAddressData } from './types';

export const getAllUserAddress = async () => {
  const response = await instance.get<any>(`${deliveryAddress}`, {
    // params: { city: 'Santa Maria' },
  });
  return response.data;
};

export const discoveryInfoAdress = async (cep: string) => {
  const response = await axios.get<string>(
    `https://viacep.com.br/ws/${cep}/json/`
  );
  return response.data;
};

export const registerUserAddress = async (data: IAddressData) => {
  const response = await instance.post<string>(`${deliveryAddress}`, data);
  return response.data;
};

export const getIsDeliveryAddress = async () => {
  const response = await instance.get(`/parceiros/zeferino/districttax/`);
  return response.data;
};
