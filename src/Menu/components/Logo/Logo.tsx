import scss from './Logo.module.scss';
import { ILogoProps } from './types';

function Logo({ alt, image, isDrawer, ...props }: ILogoProps) {
  const containerClass = [scss.container];

  if (isDrawer) containerClass.push(scss.drawer);
  if (props.className) containerClass.push(props.className);

  return (
    <a {...props} href={props.to} className={containerClass.join(' ')}>
      <figure className={scss.figure}>
        {image}
        <figcaption className={scss.figcaption}>
          <span>{alt}</span>
        </figcaption>
      </figure>
    </a>
  );
}

export default Logo;
