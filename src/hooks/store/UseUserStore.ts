// eslint-disable-next-line import-helpers/order-imports
import { createPersistStore } from '~zustand/index';

interface IUserState {
  name: string;
  id: number;
  lastName: string;
  phone: string;
  AddressId: number;
}

const initialStore = {
  name: '',
  lastName: '',
  phone: '',
  id: -1,
  AddressId: -1,
};

export const useUserStore = createPersistStore<IUserState>(
  () => initialStore,
  'cartStore'
);

export const setIdUser = (state: any) => {
  useUserStore.setState({
    id: state,
  });
};
