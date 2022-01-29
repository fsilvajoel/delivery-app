import { useState } from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import DrawerSection from '~components/Layout/Drawer/Drawer';

import { getCartLength, useCartStore } from '~hooks/store/UseCartStore';

import ListCart from '../List';

interface DrawerCartProps {
  theme: 'white' | 'black';
}
const DrawerCart = ({ theme = 'black' }: DrawerCartProps) => {
  const [state, setState] = useState<number>(getCartLength());

  useCartStore.subscribe((st) => setState(st.cart.length));

  const ShoppingCartDrawerIcon = () => {
    return (
      <div style={{ color: theme }}>
        <Badge badgeContent={state} color="secondary">
          <ShoppingCartIcon />
          <span>carrinho</span>
        </Badge>
      </div>
    );
  };

  return (
    <DrawerSection
      size={350}
      buttonContent={<ShoppingCartDrawerIcon />}
      direction="right"
    >
      <ListCart fixed={false} />
    </DrawerSection>
  );
};

export default DrawerCart;
