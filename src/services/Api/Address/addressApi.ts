import axios from 'axios';
import { IAddress } from '~components/Address/ModalFormAddress/types';

import { deliveryAddress, deliveryparner } from '../apiConstants';
import { instance } from '../http';

export const getAllUserAddress = async () => {
  const response = await instance.get<string>(`${deliveryAddress}`, {
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

export const registerUserAddress = async (data: IAddress) => {
  const response = await instance.post<string>(`${deliveryAddress}`, data);
  return response.data;
};

export const getIsDeliveryAddress = async () => {
  const response = await instance.get(`${deliveryparner}zeferino/districttax/`);
  return response.data;
};
