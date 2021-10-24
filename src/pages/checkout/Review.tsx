import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListCart from '~components/ShoppingCart/List';
import { useCartStore } from '~hooks/store/UseCartStore';
import { useCheckoutStore } from '~hooks/store/UseCheckoutStore';
// import { partner } from '~services/Api/apiConstants';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'

// import { Card } from '@material-ui/core'
import { dataReview } from './data';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const productsInCart = useCartStore((state) => state.cart);
  const addressToSend = useCheckoutStore((state) => state.AddressToSendId);
  const deliveryMethod = 1;
  const user = 1;
  const paymentMethod = 'Dinheiro';
  const partner = 'zeferino';
  console.log('produtos', productsInCart);
  console.log('endereço', addressToSend);
  console.log('user', addressToSend);


  const handleSend =() =>{
    // partner
    // user
    // delivery
    // address
    // products
    // obs?
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {dataReview.title}
      </Typography>
      {/* <Grid container spacing={2}> */}
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Produtos
        </Typography>
        <ListCart fixed={false} />
      </Grid>
      <Grid item container direction="column" xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Revisão e Finalização
        </Typography>
        <Typography gutterBottom>
          <b>Nome:</b> Joel Silva
        </Typography>
        <Typography gutterBottom>
          <b>Endereço:</b> {dataReview.addressMock}
        </Typography>
        <Typography gutterBottom>
          <b>Retirada:</b> Delivery
        </Typography>
      </Grid>
    </>
  );
}
