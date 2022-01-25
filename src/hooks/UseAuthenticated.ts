/* eslint-disable import/order */
import { authLogin, ICredentialsData } from '~services/Api/auth';
import { instance } from '~services/Api/http';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

import { setIsLogged } from './store/UseLoginStore';

export const ACCESS_TOKEN = 'deliveryApp-accessToken';
export const UseAuthenticated = async (info: ICredentialsData) => {
  const { 'deliveryApp-accessToken': token } = parseCookies();
  if (token) {
    setIsLogged(true);
  }
  try {
    const response = await authLogin(info);
    setCookie(undefined, ACCESS_TOKEN, response, {
      maxAge: 604800 * 1, // semana * qtdSemanas
    });
    instance.defaults.headers.Authorization = `Token ${token}`;
  } catch (error) {
    console.log('erro', error);
    return false;
  }
  return true;
};
export const UseExit = async () => {
  destroyCookie(undefined, 'deliveryApp-accessToken');
};
