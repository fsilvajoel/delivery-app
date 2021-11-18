import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListCart from '~components/ShoppingCart/List';
import { sendDeliveryRequest } from '~services/Api/Products/productsApi';
import { IDeliverySend } from '~services/Api/Products/type';

import { useUserData } from '~hooks/query/useUserData';
import { useCartStore } from '~hooks/store/UseCartStore';
import { useCheckoutStore } from '~hooks/store/UseCheckoutStore';

// import { partner } from '~services/Api/apiConstants';

import scss from './Checkout.module.scss';

export default function Review() {
  const productsInCart = useCartStore((state) => state.cart);
  const addressToSendId = useCheckoutStore((state) => state.AddressToSendId);
  const addressToSend = useCheckoutStore((state) => state.name);
  const userData = useUserData();
  const paymentmethod = 'Dinheiro';
  const partner = 'zeferino';
  console.log('produtos', productsInCart);
  console.log('endereço', addressToSendId);
  console.log('user', userData?.data?.first_name);

  const handleSend = () => {
    const dataToSend: IDeliverySend = {
      partner,
      user: userData?.data!.id,
      obs: '',
      address: 1,
      delivery: false,
      paymentmethod,
      products: productsInCart,
    };
    console.log('enviando pacote', dataToSend);
    sendDeliveryRequest(dataToSend);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Revisão e finalização
      </Typography>
      <Grid item xs={12} sm={12}>
        <ListCart fixed={false} />
      </Grid>
      <div className={scss.userResume}>
        <h2 className={scss.title}>Revisão e Finalização</h2>
      </div>
      <Grid item container direction="column" xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          <b>Nome:</b> Joel Silva
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>Endereço:</b> {addressToSendId}
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>Retirada:</b> Delivery
        </Typography>
      </Grid>
      <button type="button" onClick={handleSend}>
        enviarTeste
      </button>
    </>
  );
}
