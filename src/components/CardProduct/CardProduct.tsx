import { ReactNode } from 'react';

import { Card, CardContent, CardActions, CardMedia } from '@material-ui/core';
// import { IProducts } from 'src/types/products';

import classes from './CardProduct.module.scss';
import ModalProductInfo from './components/ModalProductInfo/Modal';

interface ICardProduct {
  data: any;
  children?: ReactNode;
}
const CardProduct: React.FC<ICardProduct> = ({ data }: any) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={data.image_url}
        title={data.title}
      />
      <CardContent className={classes.CardContent}>
        <h2 className={classes.cardTitle}>{data.name}</h2>
        {/* <p className={classes.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a
          tempora cumque labore illo illum laborum mollitia vero qui explicabo.
        </p> */}
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <ModalProductInfo data={data} />
      </CardActions>
    </Card>
  );
};
export default CardProduct;
