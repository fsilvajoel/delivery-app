import { IOptionProps } from './types';

import scss from './Option.module.scss';

function Option(props: IOptionProps) {
  const containerClass = [scss.container];

  if (props.selected) containerClass.push(scss.selected);

  return (
    <div
      role="option"
      className={containerClass.join(' ')}
      aria-selected={props.selected}
      data-selected={props.selected}
    >
      {props.children}
    </div>
  );
}

export default Option;
