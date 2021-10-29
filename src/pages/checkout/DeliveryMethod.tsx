import { useState } from 'react';

import { Button, Tab, Tabs } from '@material-ui/core';
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
  const paymentTypes = ['Dinheiro', 'debito', 'crédito'];
  console.log('forma de pgto', paymentTypes);
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

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
      <h3 style={{ textAlign: 'center' }}>
        Não é necessário inserir o endereço nessa modalidade
      </h3>
    );
  };
  const renderPaymentMethod = () => {
    return (
      <div className={scss.paymentMethods}>
        <h3 className={scss.title}>Selecione o método de pagamento</h3>
        <div className={scss.content}>
          {paymentTypes?.map((paymentType) => {
            return (
              <Button
                variant="outlined"
                className={scss.paymentButton}
                onClick={() => setPaymentMethod(paymentType)}
              >
                {paymentType}
              </Button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderObservations = () => {
    return (
      <>
        <h3 className={scss.title}>Observacoes do Estabelecimento:</h3>
        <div className={scss.content}>
          <p>colocar aqui o preco das entregas fixas</p>
        </div>
      </>
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
      <div className={scss.establishmentObservations}>
        {renderObservations()}
      </div>
    </>
  );
}
