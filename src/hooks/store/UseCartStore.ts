import { IProductsInCart } from 'src/types/cart';
// eslint-disable-next-line import-helpers/order-imports
import CreateStore, { createPersistStore } from 'src/zustand';

interface IProductsState {
  numberOfItens: number;
  totalPrice: number;
  isFrationed: boolean;
  cart: Array<IProductsInCart>;
}

interface ISelectItensStore {
  selectedQtdItens: number;
}

const initialStore = {
  cart: [],
  totalPrice: 0,
  numberOfItens: 0,
  selectedQtdItens: 0,
  isFrationed: false,
};
const initialSelectedStore = {
  selectedQtdItens: 0,
};

export const useCartStore = createPersistStore<IProductsState>(
  () => initialStore,
  'cartStore'
);

export const useSelectItensStore = CreateStore<ISelectItensStore>(
  () => initialSelectedStore,
  'selectedItensStore'
);

export const setQtdItens = (state: number) => {
  useSelectItensStore.setState({
    selectedQtdItens: state,
  });
};

export const getCartLength = () => useCartStore.getState().cart.length;

export const setQuantityItens = () => {
  useCartStore.setState((prevState) => ({
    numberOfItens: prevState.cart.length,
  }));
};

export const setIsFrationed = (state: boolean) => {
  useCartStore.setState({ isFrationed: state });
};

export const setProductsInCart = (state: IProductsInCart) => {
  useCartStore.setState((prevState) => ({
    cart: [...prevState.cart, state],
    totalPrice: prevState.totalPrice + state.quantity * state.unitary_value,
  }));
  setQuantityItens();
};
export const removeProductsInCart = (id: any) => {
  useCartStore.setState((prevState) => ({
    cart: prevState.cart.filter((i) => i.product !== id),
  }));
  setQuantityItens();
};
