import scss from './Pagination.module.scss';
import { IPaginationProps } from './types';

function Pagination(props: IPaginationProps) {
  const dotClass = [scss.dot];

  const handleClick = (value: number) => {
    props.onChangeIndex(value);
  };

  if (props.value === props.currentIndex) {
    dotClass.push(scss.active);
  }

  return (
    <button
      type="button"
      className={scss.btnDot}
      onClick={() => handleClick(props.value)}
    >
      <div className={dotClass.join(' ')} />
    </button>
  );
}

export default Pagination;
