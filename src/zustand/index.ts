import { Draft } from 'immer';
import create, { StateCreator, State } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { immer } from './middlewares';

const CreateStore = <T extends State>(
  config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>,
  storeName?: string
) => create(devtools(immer(config), storeName));

export const createPersistStore = <T extends State>(
  config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>,
  storeName: string
) => create(devtools(persist<T>(immer(config), { name: storeName })));

export default CreateStore;
