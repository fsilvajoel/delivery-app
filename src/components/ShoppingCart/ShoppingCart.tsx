import Link from 'next/link';

import { useState } from 'react';

import {
  IconButton,
  Popover,
  Button,
  Badge,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { links } from '~constants/links';

import { useCartStore } from '~hooks/store/UseCartStore';

import ListCart from './List';
import scss from './ShoppingCart.module.scss';

export default function ShoppingCart() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const numberOfItens = useCartStore((state) => state.numberOfItens);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const CardToList = () => {
    return (
      <Card className={scss.cardList}>
        <CardContent>
          <h3 style={{ textAlign: 'center' }}>Itens no pedido</h3>
          <ListCart fixed={false} />
        </CardContent>
        <CardActions style={{ flexDirection: 'row-reverse' }}>
          {numberOfItens > 0 && (
            <Link href={links.checkout}>
              <>
                <Button variant="outlined" size="large">
                  Finalizar
                </Button>
              </>
            </Link>
          )}
        </CardActions>
      </Card>
    );
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick} aria-label="carrinho" color="inherit">
        <Badge badgeContent={numberOfItens} color="secondary">
          <ShoppingCartIcon />
          <span>carrinho</span>
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {CardToList()}
      </Popover>
    </div>
  );
}
