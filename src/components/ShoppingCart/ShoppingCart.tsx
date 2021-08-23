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
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { links } from '~constants/links';

import ListCart from './List';
import scss from './ShoppingCart.module.scss';

export default function ShoppingCart() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

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
          <h2>Itens no pedidos</h2>
          <ListCart />
        </CardContent>
        <CardActions style={{ flexDirection: 'row-reverse' }}>
          <Link href={links.checkout}>
            <Button variant="outlined" size="large">
              Finalizar
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick} aria-label="carrinho" color="inherit">
        <Badge badgeContent={5} color="secondary">
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
