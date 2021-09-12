import { authLogin, logout, authMe } from '~services/Api/auth';
import { setAccessToken, getAccessToken } from '~services/auth/auth';

export const useLogin = (info) => {
  const response = authLogin(info);
  // setAccessToken(response);
  console.log('resposta', response);
};
// const useLogout = () => {};
// const useUser = () => {};
