/* eslint-disable import/no-extraneous-dependencies */
import { createContext } from 'react';

export interface IContext {
  isScrolled: boolean;
  breakpoint: 'desktop' | 'mobile';
}

export const MenuContext = createContext<any>({});
