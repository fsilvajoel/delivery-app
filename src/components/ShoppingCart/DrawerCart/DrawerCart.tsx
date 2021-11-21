import { Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DrawerSection from '~components/Layout/Drawer/Drawer';

import { useCartStore } from '~hooks/store/UseCartStore';

import ListCart from '../List';

interface DrawerCartProps {
  theme: 'white' | 'black';
}
const DrawerCart = ({ theme = 'black' }: DrawerCartProps) => {
  const numberOfItens = useCartStore((state) => state.numberOfItens);

  const buttonDrawer = () => {
    return (
      <div style={{ color: theme }}>
        <Badge badgeContent={numberOfItens} color="secondary">
          <ShoppingCartIcon />
          <span>carrinho</span>
        </Badge>
      </div>
    );
  };

  return (
    <DrawerSection size={350} buttonContent={buttonDrawer()} direction="right">
      <ListCart fixed={false} />
    </DrawerSection>
  );
};

export default DrawerCart;
