import CreateStore from '~zustand/index';

type TLoginState = {
  isLogged: boolean;
};

const initialStore = {
  isLogged: false,
};

export const useLoginStore = CreateStore<TLoginState>(
  () => initialStore,
  'LoginStore'
);

export const setIsLogged = (state: boolean) => {
  useLoginStore.setState({ isLogged: state });
};
