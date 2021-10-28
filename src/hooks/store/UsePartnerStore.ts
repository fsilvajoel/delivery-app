// eslint-disable-next-line import-helpers/order-imports
import { IPaymentMethodsData } from '~services/Api/Partner/type';
import CreateStore from '~zustand/index';

interface IPartnerState {
  deliveryMethod: IPaymentMethodsData[];
}

const initialStore = {
  deliveryMethod: [],
};

export const useUserStore = CreateStore<IPartnerState>(
  () => initialStore,
  'cartStore'
);

export const setDeliveryMethod = (state: any) => {
  useUserStore.setState({
    deliveryMethod: state,
  });
};
