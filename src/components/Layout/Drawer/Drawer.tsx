import { CSSProperties, UIEvent, useEffect } from 'react';

import { IDrawerProps } from './types';

import scss from './Drawer.module.scss';

import CloseSVG from './images/close.svg';

function Drawer(props: IDrawerProps) {
  const drawerWrapperClass = [scss.drawerWrapper];
  const drawerContentClass = [scss.drawerContent];

  const onCloseDrawer = () => {
    if (props.onClose) props.onClose();
  };

  const onContentScroll = (event: UIEvent<HTMLDivElement>) => {
    if (props.onScroll) props.onScroll(event);
  };

  const getStyle = () => {
    const style: CSSProperties = {};

    if (props.theme === 'white') {
      style.filter = 'invert(1)';
    }

    return style;
  };

  useEffect(() => {
    document.body.style.overflow = '';

    if (props.open) {
      document.body.style.overflow = 'hidden';
    }
  }, [props.open]);

  if (props.open) {
    drawerWrapperClass.push(scss.drawerOpen);
    drawerContentClass.push(scss.drawerAnimation);
  }

  if (props.theme) drawerContentClass.push(scss[props.theme]);
  if (props.fullScreen) drawerContentClass.push(scss.fullScreen);
  if (props.direction) drawerContentClass.push(scss[props.direction]);
  if (props.className) drawerContentClass.push(props.className);

  return (
    <div className={drawerWrapperClass.join(' ')}>
      <div className={scss.drawerContainer} onClick={onCloseDrawer} aria-hidden="true" />
      <div
        className={drawerContentClass.join(' ')}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onScroll={onContentScroll}
        aria-hidden="true"
      >
        {props.closeButton && (
          <CloseSVG style={getStyle()} className={scss.close} onClick={onCloseDrawer} />
        )}
        {props.children}
      </div>
    </div>
  );
}

Drawer.defaultProps = {
  theme: 'black',
  direction: 'left',
} as IDrawerProps;

export default Drawer;
