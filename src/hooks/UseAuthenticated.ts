/* eslint-disable import/order */
import { useEffect } from 'react';

import { authLogin, ICredentialsData } from '~services/Api/auth';
import { instance } from '~services/Api/http';
import { ACCESS_TOKEN } from '~services/localStorage/auth';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

import { setIsLogged } from './store/UseLoginStore';

export const UseAuthenticated = async (info: ICredentialsData) => {
  const { 'deliveryApp-accessToken': token } = parseCookies();
  if (token) {
    setIsLogged(true);
    console.log('retorna dados do usuário n:', token);
    // getAllUserData().then(response =>{setStateUser}) pega infos do usuário e no response seta
  }
  const response = await authLogin(info);
  try {
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
