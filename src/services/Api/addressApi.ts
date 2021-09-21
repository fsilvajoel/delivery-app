import axios from 'axios';

import { deliveryAddress } from './apiConstants';
import instance from './http';

interface IAddress {
  user: number;
  name: string;
  street: string;
  number: number;
  complement: string;
  reference: string;
  UF: string;
  city: string;
  cep: string;
  district: string;
}

export const getAllUserAddress = async () => {
  const response = await instance.get<string>(`${deliveryAddress}`, {
    params: { city: 'Santa Maria' },
  });
  return response.data;
};

export const discoveryInfoAdress = async (cep: number) => {
  const response = await axios.get<string>(
    `https://viacep.com.br/ws/${cep}/json/`
  );
  console.log('resposta', response);
};

export const registerUserAddress = async (data: IAddress) => {
  const response = await instance.post<string>(`${deliveryAddress}`, data);
  return response.data;
};

// export const getIsDeliveryAddress = async () => {};
