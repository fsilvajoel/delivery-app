import { apiUrl } from '../apiConstants';
import { instance } from '../http';
import { IPartnerData, IPaymentMethodsData } from './type';

export const getAllDataPartner = async () => {
  const response = await instance.get<IPartnerData>(
    `${apiUrl}/parceiros/zeferino/dados/`
  );

  return response.data;
};
export const getPaymentMethodsPartner = async () => {
  const response = await instance.get<any>(
    `${apiUrl}/parceiros/zeferino/paymentsmethods/`
  );
  // console.log('payment', response);
  return response.data;
};
