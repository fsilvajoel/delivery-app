import { MenuItem as IMenuItem } from '~components/Menu/types';

import MenuItem from './components/items/MenuItem';

export const items: IMenuItem[] = [
  { label: 'Sobre', component: MenuItem, to: '#sobre' },
  { label: 'Beneficios', component: MenuItem, to: '#beneficios' },
  { label: 'Inscrição', component: MenuItem, to: '#inscricao' },
];
