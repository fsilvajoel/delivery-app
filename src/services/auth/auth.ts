export const ACCESS_TOKEN = '@deliveryApp-accessToken';

export const getAccessToken = (): string | null =>
  localStorage.getItem(ACCESS_TOKEN);

export const clearAccessToken = (): void =>
  localStorage.removeItem(ACCESS_TOKEN);

export const setAccessToken = (token: string): void =>
  localStorage.setItem(ACCESS_TOKEN, token);
