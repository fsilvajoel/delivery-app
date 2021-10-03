export const ACCESS_TOKEN = 'deliveryApp-accessToken';

export const getAccessToken = (): string | null =>
  localStorage.getItem(ACCESS_TOKEN);

export const clearAccessToken = (): void =>
  localStorage.removeItem(ACCESS_TOKEN);

export const setAccessToken = async (token: string): Promise<void> => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const clearAllLocalStorage = (): void => localStorage.clear();
