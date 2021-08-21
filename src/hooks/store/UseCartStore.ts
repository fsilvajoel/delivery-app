import { IProductsInCart } from 'src/types/cart';
// eslint-disable-next-line import-helpers/order-imports
import CreateStore from '~zustand/index';

type TProductsState = {
  numberOfItens: number;
  cart: Array<IProductsInCart>;
};

const initialStore = {
  cart: [],
  numberOfItens: 0,
};

export const useCartStore = CreateStore<TProductsState>(
  () => initialStore,
  'cartStore'
);

export const setQuantityItens = (state: number) => {
  useCartStore.setState({ numberOfItens: state });
};

export const setProductsInCart = (state: Array<IProductsInCart>) => {
  useCartStore.setState({ cart: state });
};
