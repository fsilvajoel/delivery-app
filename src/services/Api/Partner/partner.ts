import { apiUrl } from '../apiConstants';
import { instance } from '../http';
import { IPartnerData } from './type';

export const getAllDataPartner = async () => {
  const response = await instance.get<IPartnerData>(
    `${apiUrl}/parceiros/zeferino/dados/`
  );

  return response.data;
};
