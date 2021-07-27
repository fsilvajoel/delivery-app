import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// import CardComplements from '../../Components/OrderCheckout/cardComplements';
// import BagCard from '../../Components/ShoppingCart/list';

export default function AddressForm() {
  return (
    <>
      <h2>Seus produtos</h2>
      {/* <BagCard /> */}
      <Button>Adicionar mais produtos?</Button>
      <Divider />
      <h2>Complementos</h2>
      {/* <CardComplements /> */}
    </>
  );
}
