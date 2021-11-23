import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons//InfoOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { Alert } from '@material-ui/lab';
import { convertBrlPrice } from '~utils/convertBrlPrice';

import { removeProductsInCart, useCartStore } from '~hooks/store/UseCartStore';

import scss from './ShoppingCart.module.scss';

const ListCart = (fixed: boolean) => {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);

  const ShowListProducts = () => (
    <>
      {cart.map((item, key) => {
        const infoQuantity =
          item.unity === 'fractioned'
            ? `${item.quantity}g`
            : `${item.quantity}un`;

        return (
          <ListItem className={scss.listItem} key={item.product}>
            {fixed && (
              <IconButton
                className={scss.iconDelete}
                onClick={() => removeProductsInCart(item.product)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            )}
            <ListItemText
              primary={item.name}
              secondary={infoQuantity}
              className={scss.listItemText}
            />
            {item.unity === 'fractioned' ? (
              <h5 className={scss.productPrice}>
                <Tooltip
                  title={
                    <p style={{ fontSize: '14px' }}>
                      a confirmar com estabelecimento o valor final
                    </p>
                  }
                >
                  <IconButton>
                    <InfoOutlinedIcon />
                  </IconButton>
                </Tooltip>
                A confirmar
              </h5>
            ) : (
              <h5 className={scss.productPrice}>
                {convertBrlPrice(item.unitary_value * item.quantity)}
              </h5>
            )}
          </ListItem>
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
      <div className={scss.alert}>
        <Alert severity="info" style={{ fontSize: '1.4rem' }}>
          o valor final poderá sofrer alteração após pesagem de alguns produtos
        </Alert>
      </div>
    </>
  );

  return (
    <List disablePadding>
      {cart.length < 1 ? (
        <>
          <div className={scss.emptCart}>
            <h3 className={scss.text}>A sacola está vazia</h3>
          </div>
        </>
      ) : (
        <ShowListProducts />
      )}
    </List>
  );
};

export default ListCart;
