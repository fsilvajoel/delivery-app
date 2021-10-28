import { useState } from 'react';

import { Button, Paper, Tab, Tabs } from '@material-ui/core';
import AdressCard from '~components/Address/Card';
// import { getPaymentMethodsPartner } from '~services/Api/Partner/partner';

import { usePaymentMethod } from '~hooks/query/usePartner';

import scss from './Checkout.module.scss';

// interface TabPanelProps {
//   children: React.ReactNode;
//   index: number;
//   keyValue: number;
// }

export default function DeliveryMethod() {
  // const paymentTypes = usePaymentMethod();
  const paymentTypes = ['Dinheiro', 'debito', 'crédito'];
  console.log('forma de pgto', paymentTypes);
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [paymentMethod, sePaymentMethod] = useState('');
  // console.log('deliveryMethod', deliveryMethod);
  console.log('paymentMethod', paymentMethod);

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
        {paymentTypes?.map((paymentType) => {
          return (
            <Button
              variant="outlined"
              onClick={() => sePaymentMethod(paymentType)}
            >
              {paymentType}
            </Button>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div>
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
      </div>
      {renderPaymentMethod()}
    </>
  );
}
