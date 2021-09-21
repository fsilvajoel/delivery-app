import { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Grid from '@material-ui/core/Grid';
// import CardDeliveryMethod from '../../Components/CardsCheckout/CardDeliveryMethod';
// import CardPaymentMethod from '../../Components/CardsCheckout/CardPaymentMethod';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import scss from './Checkout.module.scss';

export default function PaymentForm() {
  const [deliveryMethod, setDeliveryMethod] = useState('');
  console.log('deliveryMethod', deliveryMethod);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryMethod((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl component="fieldset" className={scss.formControl}>
      <h2 className={scss.title}>Selecione o Método de entrega</h2>
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={deliveryMethod}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value="retirada"
          control={<Radio />}
          label="Retirada"
        />
        <FormControlLabel
          value="delivery"
          control={<Radio />}
          label="Entrega"
        />
      </RadioGroup>
    </FormControl>
    // <>
    //   <Grid
    //     container
    //     direction="row"
    //     justifyContent="center"
    //     alignItems="center"
    //   >
    //     <Grid item sm={6} xs={12}>
    //       <p>metodo de pagamento</p>
    //       {/* <CardPaymentMethod /> */}
    //     </Grid>
    //     <Grid item sm={6} xs={12}>
    //       <p>Metodo de entrega</p>
    //       {/* <CardDeliveryMethod /> */}
    //     </Grid>
    //   </Grid>
    // </>
  );
}
