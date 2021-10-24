import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListCart from '~components/ShoppingCart/List';
import { sendDeliveryRequest } from '~services/Api/Products/productsApi';
import { IDeliverySend } from '~services/Api/Products/type';

import { useUserData } from '~hooks/query/useUserData';
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
  const userData = useUserData();
  const deliveryMethod = true;
  const paymentmethod = 'Dinheiro';
  const partner = 'zeferino';
  console.log('produtos', productsInCart);
  console.log('endereço', addressToSend);
  console.log('user', userData?.data?.first_name);

  const handleSend = () => {
    const dataToSend: IDeliverySend = {
      partner,
      user: userData?.data!.id,
      obs: '',
      address: 1,
      delivery: deliveryMethod,
      paymentmethod,
      products: productsInCart,
    };
    console.log('enviando pacote', dataToSend);
    sendDeliveryRequest(dataToSend);
  };

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
        <button type="button" onClick={handleSend}>
          enviarTeste
        </button>
      </Grid>
    </>
  );
}
