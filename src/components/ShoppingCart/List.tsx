import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const ListCart = () => {
  return (
    <List disablePadding>
      {products < 1 ? (
        <>
          <h3 className={classes.centerText}>A sacola está vazia</h3>
        </>
      ) : (
        <>
          {products?.map((product, key) => {
            total = Number(total) + Number(product.totalPrice);
            return (
              <>
                <ListItem className={classes.listItem} key={product.name}>
                  <IconButton
                    className={classes.iconDelete}
                    onClick={() => dropProduct(key)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <ListItemText
                    primary={product.name}
                    secondary={product.desc}
                  />
                  <h5 className="product-price">{product.totalPrice}</h5>
                </ListItem>
                <Divider />
              </>
            );
          })}

          <ListItem className={classes.listItem}>
            <ListItemText className="resume" primary="Total pedido" />
            <Typography variant="subtitle1" className={classes.total}>
              R${total.toFixed(2)}
            </Typography>
          </ListItem>
        </>
      )}
    </List>
  );
};

export default ListCart;
