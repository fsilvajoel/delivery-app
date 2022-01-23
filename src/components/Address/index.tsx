import Link from 'next/link';

import { useState } from 'react';

import { IconButton, Popover, Button, Card } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// import { links } from '~constants/links';
import { useUserData } from '~hooks/query/useUserData';
import { useLoginStore } from '~hooks/store/UseLoginStore';
import { setIdUser } from '~hooks/store/UseUserStore';

import scss from './address.module.scss';
import AdressCard from './Card';

export default function Address() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isLogged = useLoginStore((state) => state.isLogged);
  const allUserData = useUserData();
  setIdUser(allUserData?.data?.id);
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
        {isLogged ? (
          <AdressCard />
        ) : (
          <p className={scss.loginButton}>
            <Link href="/login">Faça Login para Continuar</Link>
          </p>
        )}
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
