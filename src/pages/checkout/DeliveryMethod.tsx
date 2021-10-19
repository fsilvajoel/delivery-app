import { useState } from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';
import AdressCard from '~components/Address/Card';

import scss from './Checkout.module.scss';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  keyValue: number;
}

export default function DeliveryMethod() {
  const [deliveryMethod, setDeliveryMethod] = useState('');
  console.log('deliveryMethod', deliveryMethod);

  const [TabValue, setTabValue] = useState(0);

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
    </>
  );
}
