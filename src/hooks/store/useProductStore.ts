import { IProducts } from 'src/types/products';
// eslint-disable-next-line import-helpers/order-imports
import CreateStore from '~zustand/index';

type TProductsState = {
  currentCategory: number;
  productsInCurrentCategory: Array<IProducts>;
};

const initialStore = {
  currentCategory: -1,
  productsInCurrentCategory: [],
};

export const useProductStore = CreateStore<TProductsState>(
  () => initialStore,
  'productStore'
);

export const setCategorySelected = (state: number) => {
  useProductStore.setState({ currentCategory: state });
};
export const setProductsInCurrentCategory = (state: Array<IProducts>) => {
  useProductStore.setState({ productsInCurrentCategory: state });
};
