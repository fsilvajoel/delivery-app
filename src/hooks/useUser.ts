import { authLogin, ICredentialsData } from '~services/Api/auth';
import { setAccessToken } from '~services/localStorage/auth';

export const UseLogin = async (info: ICredentialsData) => {
  const response = await authLogin(info);
  setAccessToken(response);
};
