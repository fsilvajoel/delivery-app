import { Card, CardContent, CardActions, CardMedia } from '@material-ui/core';

import classes from './CardProduct.module.scss';

export default function CardProduct() {
  const image =
    'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY';
  const name = 'teste';

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={image} title={name} />
      <CardContent
        className={classes.CardContent}
        style={{ minHeight: '250px', height: '260px' }}
      >
        <h2 className={classes.cardTitle}>Lorem ipsum, dolor sit amet</h2>
        <span className={classes.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptatum delectus dolorum commodi{' '}
        </span>
        <h3 className={classes.price}>R$: 12123</h3>
        {/* <h3 className={classes.price}>R$: {price}</h3> */}
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        {/* <ModalProduct data={props.data} /> */}
      </CardActions>
    </Card>
  );
}
