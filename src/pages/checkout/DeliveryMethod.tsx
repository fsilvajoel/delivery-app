import { useState } from 'react';

import { Button, Paper, Tab, Tabs } from '@material-ui/core';
import AdressCard from '~components/Address/Card';
import { getPaymentMethodsPartner } from '~services/Api/Partner/partner';

import scss from './Checkout.module.scss';

// interface TabPanelProps {
//   children: React.ReactNode;
//   index: number;
//   keyValue: number;
// }

export default function DeliveryMethod() {
  const paymentTypes = getPaymentMethodsPartner();
  console.log('forma de pgto', paymentTypes);
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [paymentMethod, sePaymentMethod] = useState('');
  console.log('deliveryMethod', deliveryMethod);

  const [TabValue, setTabValue] = useState(0);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log('entrei', newValue);
    setTabValue(newValue);
  };
  const renderTabPanel = () => {
    if (TabValue === 0) {
      return (
        <div>
          <AdressCard />
          {/* testa endereço ao selecionar e retorna se pode ou náo enviar para tal */}
        </div>
      );
    }
    return (
      <div>
        <h1>retirada</h1>
      </div>
    );
  };
  const renderPaymentMethod = () => {
    return (
      <div>
        <h1>Selecione o método de pagamento</h1>
        {/* {paymentTypes?.map((paymentType) => {
          return <h1>teste</h1>;
        })} */}
        <Button variant="outlined" onClick={() => sePaymentMethod('lala')}>
          Primary
        </Button>
      </div>
    );
  };

  return (
    <>
      <Paper square>
        <h2 className={scss.title}>Selecione o Método de entrega</h2>
        <Tabs
          centered
          value={TabValue}
          indicatorColor="primary"
          onChange={handleChange}
          aria-label="Delivery Method"
        >
          <Tab label="Entrega" />
          <Tab label="Retirada" />
        </Tabs>
        {renderTabPanel()}
      </Paper>
      {renderPaymentMethod()}
    </>
  );
}
