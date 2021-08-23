import { useState } from 'react';

import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCartStore } from '~hooks/store/UseCartStore';

import scss from './ShoppingCart.module.scss';

const ListCart = () => {
  const cart = useCartStore((state) => state.cart);
  const [total, setTotal] = useState<number>(10);
  console.log({ cart });

  const ShowItensInCart = () => {
    return (
      <>
        {cart.map((item, key) => {
          // setTotal(total + item.unitaryValue * item.quantity);
          return (
            <>
              <ListItem className={scss.listItem} key={item.productId}>
                <IconButton
                  className={scss.iconDelete}
                  // onClick={() => dropProduct(key)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
                <ListItemText primary={item.name} secondary={item.quantity} />
                <h5 className="product-price">
                  {(item.unitaryValue * item.quantity).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </h5>
              </ListItem>
              <Divider />
              <ListItem className={scss.listItem}>
                <ListItemText className="resume" primary="Total pedido" />
                <Typography variant="subtitle1" className={scss.total}>
                  R$
                  {total.toFixed(2)}
                </Typography>
              </ListItem>
            </>
          );
        })}
        ;
      </>
    );
  };
  return (
    <List disablePadding>
      {cart.length < 1 ? (
        <>
          <h3 className={scss.centerText}>A sacola está vazia</h3>
        </>
      ) : (
        <ShowItensInCart />
      )}
    </List>
  );
};

export default ListCart;
