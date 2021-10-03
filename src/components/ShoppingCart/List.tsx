import { useEffect, useState } from 'react';

import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { removeProductsInCart, useCartStore } from '~hooks/store/UseCartStore';

import scss from './ShoppingCart.module.scss';

const ListCart = () => {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  return (
    <List disablePadding>
      {cart.length < 1 ? (
        <>
          <div className={scss.emptCart}>
            <h3 className={scss.text}>A sacola está vazia</h3>
          </div>
        </>
      ) : (
        <>
          {cart.map((item, key) => {
            return (
              <>
                <ListItem className={scss.listItem} key={item.productId}>
                  <IconButton
                    className={scss.iconDelete}
                    onClick={() => removeProductsInCart(item.productId)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <ListItemText
                    primary={item.name}
                    secondary={item.quantity}
                    className={scss.listItemText}
                  />
                  <h5 className={scss.productPrice}>
                    {(item.unitaryValue * item.quantity).toLocaleString(
                      'pt-br',
                      {
                        style: 'currency',
                        currency: 'BRL',
                      }
                    )}
                  </h5>
                </ListItem>
              </>
            );
          })}
          <Divider />
          <ListItem className={scss.listItem}>
            <ListItemText className={scss.resume} primary="Total pedido" />
            <Typography variant="subtitle1" className={scss.total}>
              R$⠀
              {totalPrice.toFixed(2)}
            </Typography>
          </ListItem>
        </>
      )}
    </List>
  );
};

export default ListCart;
