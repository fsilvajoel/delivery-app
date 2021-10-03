// import Link from 'next/link';

import { useState } from 'react';

import { IconButton, Popover, Button, Card } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { links } from '~constants/links';

import { useLoginStore } from '~hooks/store/UseLoginStore';

import scss from './address.module.scss';
import AdressCard from './Card';

export default function Address() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isLogged = useLoginStore((state) => state.isLogged);
  console.log('isLogged', isLogged);
  const open = Boolean(anchorEl);
  const id = open ? 'adressPop' : undefined;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const CardToList = () => {
    return (
      <Card className={scss.root}>
        {isLogged ? <AdressCard /> : <h1>Faça Login para Continuar</h1>}
      </Card>
    );
  };

  return (
    <div>
      <IconButton onClick={handleClick} aria-label="Endereço" color="inherit">
        <LocationOnIcon />
        <span>endereços</span>
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
