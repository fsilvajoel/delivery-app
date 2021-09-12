import { IProductsInCart } from 'src/types/cart';
// eslint-disable-next-line import-helpers/order-imports
import CreateStore from '~zustand/index';

type TProductsState = {
  numberOfItens: number;
  totalPrice: number;
  cart: Array<IProductsInCart>;
};

const initialStore = {
  cart: [],
  totalPrice: 0,
  numberOfItens: 0,
};

export const useCartStore = CreateStore<TProductsState>(
  () => initialStore,
  'cartStore'
);

export const setQuantityItens = () => {
  useCartStore.setState((prevState) => ({
    numberOfItens: prevState.cart.length,
  }));
};

export const setProductsInCart = (state: IProductsInCart) => {
  useCartStore.setState((prevState) => ({
    cart: [...prevState.cart, state],
    totalPrice: prevState.totalPrice + state.quantity * state.unitaryValue,
  }));
  setQuantityItens();
};
export const removeProductsInCart = (id) => {
  useCartStore.setState((prevState) => {
    const prevCart = prevState.cart;
    prevCart.splice(id, 1);
    return { cart: prevCart };
  });
};
