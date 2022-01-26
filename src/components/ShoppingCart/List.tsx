import { useRouter } from 'next/router';

import ClearIcon from '@mui/icons-material/Clear';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Alert,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import { convertBrlPrice } from '~utils/convertBrlPrice';

import {
  removeProductsInCart,
  useCartStore,
  setIsFrationed,
} from '~hooks/store/UseCartStore';

import scss from './ShoppingCart.module.scss';

const ListCart = (fixed: boolean) => {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const isFrationed = useCartStore((state) => state.isFrationed);
  const router = useRouter();

  const handleFinish = () => {
    router.push('/checkout');
  };

  const ShowListProducts = () => (
    <>
      {cart.map((item) => {
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
                <ClearIcon />
              </IconButton>
            )}
            <ListItemText
              primary={item.name}
              secondary={infoQuantity}
              className={scss.listItemText}
            />
            {item.unity === 'fractioned' ? (
              <>
                {setIsFrationed(true)}
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
              </>
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
          {isFrationed ? <>A confirmar</> : <>R$⠀{totalPrice.toFixed(2)}</>}
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
        <>
          <ShowListProducts />
          <div className={scss.finishButton}>
            <Button onClick={() => handleFinish()}>Finalizar</Button>
          </div>
        </>
      )}
    </List>
  );
};

export default ListCart;
