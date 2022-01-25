import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { IAddress } from '~components/Address/ModalFormAddress/types';
import ListCart from '~components/ShoppingCart/List';
import { sendDeliveryRequest } from '~services/Api/Products/productsApi';
import { IDeliverySend } from '~services/Api/Products/type';

import { useAddressData } from '~hooks/query/useAddress';
import { useUserData } from '~hooks/query/useUserData';
import { useCartStore } from '~hooks/store/UseCartStore';
import { useCheckoutStore } from '~hooks/store/UseCheckoutStore';

// import { partner } from '~services/Api/apiConstants';

import scss from './Checkout.module.scss';

export default function Review() {
  const allAddress = useAddressData();
  const productsInCart = useCartStore((state) => state.cart);
  const addressToSendId = useCheckoutStore((state) => state.AddressToSendId);
  const addressToSend = allAddress?.data.filter(
    (adress: IAddress) => adress.id === addressToSendId
  );
  console.log('antes para', allAddress?.data);
  console.log('envio para', addressToSend);
  const userData = useUserData();
  const paymentmethod = 'Dinheiro';
  const partner = 'zeferino';
  // console.log('produtos', productsInCart);
  console.log('endereço', addressToSendId);
  // console.log('user', userData?.data?.first_name);

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
