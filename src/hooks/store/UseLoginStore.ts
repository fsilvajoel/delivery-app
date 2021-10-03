import CreateStore from '~zustand/index';

type TLoginState = {
  // key: string;
  isLogged: boolean;
};

const initialStore = {
  // key: '',
  isLogged: false,
};

export const useLoginStore = CreateStore<TLoginState>(
  () => initialStore,
  'LoginStore'
);

// export const setHomeStore = (state: any) => {
//   useLoginStore.setState({ key: state });
// };

export const setIsLogged = (state: boolean) => {
  useLoginStore.setState({ isLogged: state });
};
