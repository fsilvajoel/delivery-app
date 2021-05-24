/* eslint-disable import-helpers/order-imports */
/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import { MenuContext } from '~components/Menu/context-types';

import scss from './DrawerToggler.module.scss';
import { IDrawerTogglerProps } from './types';

function DrawerToggler(props: IDrawerTogglerProps) {
  const drawerTogglerClass = [scss.container];

  const [showDrawer, setShowDrawer] = useContext(MenuContext);

  if (props.className) drawerTogglerClass.push(props.className);

  return (
    <button
      type="button"
      className={drawerTogglerClass.join(' ')}
      onClick={() => setShowDrawer(true)}
    >
      {props.children}
    </button>
  );
}

export default DrawerToggler;
