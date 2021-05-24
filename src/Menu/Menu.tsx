/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable react-hooks/exhaustive-deps */
import { Drawer } from 'antd';
import { MenuItem, MenuProps } from '~components/Menu/types';
import { useElementScroll } from '~hooks/useScroll';
import { useWindowWidthChange } from '~hooks/useWindowChange';
import { gtmButtonClass } from '~constants/gtmButtonClass';

import { EPlacement } from '~enums/placement';
import { EBreakpoints } from '~enums/breakpoints';
import { isBoolean } from '~utils/isBoolean';
import isEmpty from 'lodash.isempty';
import { useState, useLayoutEffect, useEffect } from 'react';

import DrawerToggler from './components/DrawerToggler';
import Logo from './components/Logo';
import { IContext, MenuContext } from './context-types';
import scss from './Menu.module.scss';

const MIN_SCROLL = 0;

const isSameScrollContext = (windowScroll: any, isScrolled: any) => {
  let scrollToReturn = null;
  if (windowScroll > MIN_SCROLL) scrollToReturn = !isScrolled;
  if (windowScroll === MIN_SCROLL) scrollToReturn = isScrolled;

  return scrollToReturn;
};

const isReactElement = (obj: any): obj is JSX.Element => obj.$$typeof;

const shouldRender = (item: MenuItem, context: IContext): item is MenuItem =>
  !item.contextRenderer || item.contextRenderer?.canRender(context);

function Menu(props: MenuProps) {
  const contentLeftClass = [scss.contentLeft];
  const contentRightClass = [scss.contentRight];
  const containerClass = [scss.container];
  const itemLinkClass = [scss.itemLink, gtmButtonClass];
  const menuItemClass = [scss.menuItem, props.menuItemClassName];

  const [isDesktop, setIsDesktop] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = (status: boolean) => () => setShowDrawer(status);

  const renderMenuItem = (item: MenuItem, context: IContext) => (
    <li className={menuItemClass.join(' ')} key={item.id}>
      <a
        href={item.to}
        target={item.target}
        onClick={toggleDrawer(false)}
        className={itemLinkClass.join(' ')}
        data-gtm-event-label={item.label}
        data-gtm-event-action="clique-menu"
        data-gtm-event-category={props.eventCategory}
      >
        <item.component label={item.label} context={context} />
      </a>
    </li>
  );

  const renderItems = (
    items: (MenuItem | JSX.Element)[],
    breakpoint: IContext['breakpoint']
  ) => (
    <ul className={scss.itemList}>
      {items.map((item, index) => {
        const context = { isScrolled, breakpoint };
        let element = null;

        if (!isReactElement(item) && shouldRender(item, context)) {
          element = renderMenuItem(item, context);
        }

        if (isReactElement(item)) {
          element = (
            <li key={item!.props!.id} className={menuItemClass.join(' ')}>
              {item}
            </li>
          );
        }

        return element;
      })}
    </ul>
  );

  const renderLeftContent = (breakpoint: IContext['breakpoint']) => (
    <div className={contentLeftClass.join(' ')}>
      {renderItems(props.itemsLeft, breakpoint)}
    </div>
  );

  const renderCenterContent = (breakpoint: IContext['breakpoint']) => (
    <div className={scss.contentCenter}>
      {renderItems(props.itemsCenter, breakpoint)}
    </div>
  );

  const renderRightContent = (breakpoint: IContext['breakpoint']) => (
    <div className={contentRightClass.join(' ')}>
      {renderItems(props.itemsRight, breakpoint)}
    </div>
  );

  const renderDrawerContent = (breakpoint: IContext['breakpoint']) => (
    <div className={scss.drawerContent}>
      {renderItems(props.itemsDrawer, breakpoint)}
    </div>
  );

  const renderMobileMenu = () => (
    <>
      <div className={scss.mobile}>
        {(!isEmpty(props.itemsLeft) || !isEmpty(props.itemsCenter)) &&
          renderLeftContent('mobile')}
        {!isEmpty(props.itemsCenter) && renderCenterContent('mobile')}
        {(!isEmpty(props.itemsRight) || !isEmpty(props.itemsCenter)) &&
          renderRightContent('mobile')}
      </div>

      <Drawer
        placement={props.drawerPlacement}
        closable={props.drawerClosable}
        visible={showDrawer}
        bodyStyle={{ padding: 0 }}
        className={props.drawerClassName}
        onClose={toggleDrawer(false)}
      >
        {renderDrawerContent('mobile')}
      </Drawer>
    </>
  );

  const renderDesktopMenu = () => (
    <div className={scss.desktop}>
      {(!isEmpty(props.itemsLeft) || !isEmpty(props.itemsCenter)) &&
        renderLeftContent('desktop')}
      {!isEmpty(props.itemsCenter) && renderCenterContent('desktop')}
      {(!isEmpty(props.itemsRight) || !isEmpty(props.itemsCenter)) &&
        renderRightContent('desktop')}
    </div>
  );

  useLayoutEffect(() => {
    setIsDesktop(
      window.innerWidth >= (props.desktopBreakpoint || EBreakpoints.from1024)
    );
  }, []);

  useWindowWidthChange(() => {
    setIsDesktop(
      window.innerWidth >= (props.desktopBreakpoint || EBreakpoints.from1024)
    );
  });

  if (process.browser) {
    useElementScroll(window, (scrollY) => {
      if (
        !isBoolean(props.isScrolled) &&
        isSameScrollContext(scrollY, isScrolled)
      ) {
        setIsScrolled(!!scrollY);
      }
    });
  }

  useEffect(() => {
    const breakpoint = isDesktop ? 'desktop' : 'mobile';

    if (props.onChangeContext)
      props.onChangeContext({ breakpoint, isScrolled });
  }, [isScrolled, isDesktop]);

  useEffect(() => {
    if (isBoolean(props.isScrolled)) {
      setIsScrolled(props.isScrolled);
    }
  }, [props.isScrolled]);

  if (isDesktop) containerClass.push(scss.containerDesktop);
  if (props.className) containerClass.push(props.className);
  if (
    !isEmpty(props.itemsCenter) ||
    isEmpty(props.itemsLeft) ||
    isEmpty(props.itemsRight)
  ) {
    contentLeftClass.push(scss.full);
    contentRightClass.push(scss.full);
  }

  return (
    <MenuContext.Provider value={[showDrawer, setShowDrawer]}>
      <nav className={containerClass.join(' ')}>
        {isDesktop ? renderDesktopMenu() : renderMobileMenu()}
      </nav>
    </MenuContext.Provider>
  );
}

Menu.defaultProps = {
  itemsCenter: [],
  itemsRight: [],
  itemsLeft: [],
  itemsDrawer: [],
  eventCategory: '',
  drawerPlacement: EPlacement.LEFT,
  drawerClosable: false,
} as MenuProps;

export { Logo, DrawerToggler };

export default Menu;
