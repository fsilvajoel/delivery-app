import CreateStore from '~zustand/index';

type THit10State = {
  hit: boolean;
};

const initialStore = {
  hit: false,
};

export const useStoreM10 = CreateStore<THit10State>(
  () => initialStore,
  'Hit10Store'
);

export const setStoreHitTeen = () => {
  useStoreM10.setState({ hit: true });
};
