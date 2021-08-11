import { deliveryRestAuth } from './apiConstants';
import instance from './http';

// import { updateToken } from '../../../core/auth/autorization';

// export async function registration(Userdata) {
//   const response = await axios
//   .post(`${deliveryPathRegistration}`, Userdata)
//   .catch((err) => Promise.reject(new Error(err)));
//   console.log('response', response);
//   return response;
// }

export interface ILoginResponseData {
  accessToken: string;
}

export interface ICredentialsData {
  email: string;
  password: string;
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

export const authLogin = async (
  data: ICredentialsData
): Promise<ILoginResponseData> => {
  const response = await instance.post<ILoginResponseData>(
    `${deliveryRestAuth}/login`,
    data
  );

  return response.data;
};
// TODO: revisar
export const logout = async (): Promise<IMeResponseData> => {
  const response = await instance.get<IMeResponseData>(
    `${deliveryRestAuth}/logout`
  );

  return response.data;
};

// /rest-auth/logout/
// Calls Django logout method and delete the Token object
// POST
// /rest-auth/logout/
// Calls Django logout method and delete the Token object
// POST
// /rest-auth/password/change/
// Calls Django Auth SetPasswordForm save method.
// POST
// /rest-auth/password/reset/
// Calls Django Auth PasswordResetForm save method.
// POST
// /rest-auth/password/reset/confirm/
// Password reset e-mail link is confirmed, therefore
// POST
// /rest-auth/registration/
// POST
// /rest-auth/registration/verify-email/
// GET
// /rest-auth/user/
// Reads and updates UserModel fields
// PUT
// /rest-auth/user/
// Reads and updates UserModel fields
// PATCH
// /rest-auth/user/
// Reads and updates UserModel fields
