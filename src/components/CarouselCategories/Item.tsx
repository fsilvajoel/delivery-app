// import { useDispatch, useSelector } from 'react-redux';

// import { makeStyles } from '@material-ui/core/styles';

import scss from './Carrousel.module.scss';
import { ICarousel } from './type';
// import { setCurrentCategory } from '../../shared/Redux/Store/Products/ProductsDucks';

const Item = (props: ICarousel) => {
  // console.log('item', props);
  // const dispatch = useDispatch();
  // const { img, title, link } = props;
  // const classes = useStyles();

  function handleSelect(data: any) {
    console.log('selecionado', data);
    // dispatch(setCurrentCategory(data));
  }

  return (
    <>
      <button type="button" onClick={() => handleSelect(props.slug)}>
        <div className={scss.root}>
          <div className={scss.card}>
            <img className={scss.img} src={props.image} alt={props.name} />
            <span className={scss.title}>{props.name}</span>
          </div>
        </div>
      </button>
    </>
  );
};

export default Item;
