import CreateStore from '~zustand/index';

type THomeState = {
  itens: number;
  multiple10: boolean;
};

const initialStore = {
  itens: 0,
  multiple10: false,
};

export const useHomeStore = CreateStore<THomeState>(
  () => initialStore,
  'HomeStore'
);

export const setItens = (state: any) => {
  useHomeStore.setState({ itens: state });
};
export const setHit10 = () => {
  useHomeStore.setState({ multiple10: true });
};
