import { EBreakpoints } from '~enums/breakpoints';
import { ELinkTarget } from '~enums/linkTarget';
import { EPlacement } from '~enums/placement';

import { ContextRenderer } from './context-renderer';
import { IContext } from './context-types';

export interface MenuItem {
  id?: number;
  to: string;
  label: string;

  target?: ELinkTarget;
  contextRenderer?: ContextRenderer;
  component: (props: any) => JSX.Element;
}

export interface IMenuItemProps {
  label?: MenuItem['label'];
  context: IContext;
}

export interface MenuProps {
  className?: string;
  eventCategory: string;

  isScrolled?: boolean;

  desktopBreakpoint?: EBreakpoints;

  drawerClassName?: string;
  drawerClosable?: boolean;
  drawerPlacement?: EPlacement;
  menuItemClassName?: string;

  itemsRight: (MenuItem | JSX.Element)[];
  itemsCenter: (MenuItem | JSX.Element)[];
  itemsLeft: (MenuItem | JSX.Element)[];
  itemsDrawer: (MenuItem | JSX.Element)[];

  onChangeContext?: (context: IContext) => void;
}
