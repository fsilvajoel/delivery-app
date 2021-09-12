import { createContext, useContext } from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  UseMutateAsyncFunction,
} from 'react-query';

import {
  authLogin,
  authMe,
  ICredentialsData,
  ILoginResponseData,
  IMeResponseData,
} from 'src/services/Api/auth';
import {
  setAccessToken,
  clearAccessToken,
  getAccessToken,
} from 'src/services/auth/auth';

interface IUserContext {
  user: IMeResponseData | undefined;
  isLoading: boolean;
  login: UseMutateAsyncFunction<
    ILoginResponseData,
    unknown,
    ICredentialsData,
    unknown
  >;
  logout(): void;
}
interface IUserContextProvider {
  children: React.ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUser = (): IUserContext => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserContextProvider');
  }

  return context;
};

export const UserContextProvider: React.FC<IUserContextProvider> = ({
  children,
}) => {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery('user', authMe, {
    enabled: false,
    // enabled: !!getAccessToken(),
  });

  const { mutateAsync: login } = useMutation(authLogin, {
    onSuccess: ({ accessToken }: ILoginResponseData) => {
      setAccessToken(accessToken);
      queryClient.invalidateQueries('user');
    },
  });

  const logout = (): void => {
    clearAccessToken();
    queryClient.setQueryData('user', null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
