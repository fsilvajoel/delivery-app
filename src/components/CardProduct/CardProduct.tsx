import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from '@material-ui/core';
// import { IProducts } from 'src/types/products';

import classes from './CardProduct.module.scss';
import ModalProductInfo from './ModalProductInfo/Modal';
import noMedia from './nophoto.png';

const CardProduct: React.FC = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={noMedia}
        title={data.title}
      />
      <CardContent className={classes.CardContent}>
        <h2 className={classes.cardTitle}>{data.name}</h2>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a
          tempora cumque labore illo illum laborum mollitia vero qui explicabo.
        </p>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <ModalProductInfo data={props.data} />
      </CardActions>
    </Card>
  );
};
export default CardProduct;
