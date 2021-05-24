import { IMenuItemProps } from '~components/Menu/types';

import scss from './MenuItem.module.scss';

function MenuItem(props: IMenuItemProps) {
  return (
    <div className={scss.itemContainer}>
      <span className={scss.item}>{props.label}</span>
      <hr className={scss.line} />
    </div>
  );
}

export default MenuItem;
