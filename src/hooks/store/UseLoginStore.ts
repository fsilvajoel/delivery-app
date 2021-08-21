import CreateStore from '~zustand/index';

type TLoginState = {
  key: string;
};

const initialStore = {
  key: '',
};

export const useLoginStore = CreateStore<TLoginState>(
  () => initialStore,
  'LoginStore'
);

export const setHomeStore = (state: any) => {
  useLoginStore.setState({ key: state });
};
