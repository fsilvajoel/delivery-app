import Grid from '@material-ui/core/Grid';

// import CardDeliveryMethod from '../../Components/CardsCheckout/CardDeliveryMethod';
// import CardPaymentMethod from '../../Components/CardsCheckout/CardPaymentMethod';

export default function PaymentForm() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={6} xs={12}>
          <p>metodo de pagamento</p>
          {/* <CardPaymentMethod /> */}
        </Grid>
        <Grid item sm={6} xs={12}>
          <p>Metodo de entrega</p>
          {/* <CardDeliveryMethod /> */}
        </Grid>
      </Grid>
    </>
  );
}
