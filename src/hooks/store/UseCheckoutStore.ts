// eslint-disable-next-line import-helpers/order-imports
import CreateStore from '~zustand/index';

interface ICheckoutState {
  name: string;
  id: number;
  lastName: string;
  phone: string;
  AddressToSendId: number;
}

const initialStore = {
  name: '',
  lastName: '',
  phone: '',
  id: -1,
  AddressToSendId: -1,
};

export const useCheckoutStore = CreateStore<ICheckoutState>(
  () => initialStore,
  'cartStore'
);

export const setAddressToSend = (state: number) => {
  useCheckoutStore.setState({
    AddressToSendId: state,
  });
};
