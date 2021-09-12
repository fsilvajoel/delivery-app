import { setCategorySelected } from '~hooks/store/useProductStore';

import scss from './Carrousel.module.scss';
import { ICarousel } from './type';

const Item = (props: ICarousel) => {
  function handleSelect(data: number) {
    setCategorySelected(data);
  }

  return (
    <>
      <button type="button" onClick={() => handleSelect(props.id)}>
        <div className={scss.root}>
          <div className={scss.card}>
            <img className={scss.img} src={props.image} alt={props.name} />
            <p className={scss.title}>{props.name}</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default Item;
