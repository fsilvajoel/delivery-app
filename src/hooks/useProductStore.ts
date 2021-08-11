import CreateStore from '~zustand/index';

type TProductsState = {
  currentCategory: string;
  // productsInCurrentCategory: Array<any>;
};

const initialStore = {
  currentCategory: '',
  // productsInCurrentCategory: {},
};

export const useProductStore = CreateStore<TProductsState>(
  () => initialStore,
  'productStore'
);

export const setCategorySelected = (state: string) => {
  useProductStore.setState({ currentCategory: state });
};
