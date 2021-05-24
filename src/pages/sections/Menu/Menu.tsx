/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import MenuIcon from '~assets/icons/menu.svg';
import LogoAfya from '~assets/logos/afya-logo.svg';
import AppMenu, { DrawerToggler, Logo } from '~components/Menu';
import { IContext } from '~components/Menu/context-types';
import { MenuItem as IMenuItem } from '~components/Menu/types';
import { useState } from 'react';

import { items } from './data';
import scss from './Menu.module.scss';

function Menu() {
  const [context, setContext] = useState<IContext>({
    breakpoint: 'mobile',
    isScrolled: false,
  });

  const eventCategoryName = 'B2b_Pebmed';
  const menuClass = [scss.menu];
  const drawerLogo = (
    <Logo
      id="29"
      isDrawer
      image={<LogoAfya className={scss.logo} />}
      alt="medcel logo"
    />
  );
  let itemsLeft: (IMenuItem | JSX.Element)[] = [];
  let itemsCenter: any = [];
  let itemsRight: (IMenuItem | JSX.Element)[] = [
    <DrawerToggler key="drawer_b2b">
      <MenuIcon className={scss.togglerIcon} />
    </DrawerToggler>,
  ];

  if (context.breakpoint === 'mobile') {
    itemsLeft = [
      <Logo
        id="27"
        key="logo_b2b_desktop_left"
        image={<LogoAfya className={scss.logo} />}
        alt="medcel logo"
      />,
    ];

    if (context.isScrolled) {
      menuClass.push(scss.scrolled);
      itemsRight = [
        <DrawerToggler key="drawer_b2b_mobile">
          <MenuIcon className={scss.togglerIcon} />
        </DrawerToggler>,
      ];
    }
  }

  if (context.breakpoint === 'desktop') {
    itemsCenter = [];
    itemsLeft = [
      <Logo
        id="21"
        key="logo_b2b_desktop_left"
        image={<LogoAfya className={scss.logo} />}
        alt="medcel logo"
      />,
    ];

    itemsRight = [...items];

    if (context.isScrolled) {
      itemsLeft.shift();
      menuClass.push(scss.scrolled);
    }
  }

  return (
    <AppMenu
      itemsDrawer={[drawerLogo, ...items]}
      itemsRight={itemsRight}
      itemsCenter={itemsCenter}
      itemsLeft={itemsLeft}
      eventCategory={eventCategoryName}
      onChangeContext={setContext}
      className={menuClass.join(' ')}
    />
  );
}

export default Menu;
