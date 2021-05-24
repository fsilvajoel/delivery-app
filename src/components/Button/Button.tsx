import scss from './Button.module.scss';
import { IButtonProps } from './types';

function Button({ children, className, onClick, to }: IButtonProps) {
  const buttonClass = [scss.btn];

  const handleClick = (e: any) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  const renderButton = () => (
    <button
      type="button"
      onClick={handleClick}
      className={buttonClass.join(' ')}
    >
      {children}
    </button>
  );

  const renderLink = () => (
    <a
      href={to}
      onClick={handleClick}
      className={buttonClass.join(' ')}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );

  if (className) buttonClass.push(className);

  return to ? renderLink() : renderButton();
}

export default Button;
