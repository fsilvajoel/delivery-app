import { Card, CardContent, CardActions, CardMedia } from '@mui/material';

import classes from './CardProduct.module.scss';
import ModalProductInfo from './components/ModalProductInfo/Modal';
import { ICardProduct } from './types';

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
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <ModalProductInfo data={data} />
      </CardActions>
    </Card>
  );
};
export default CardProduct;
