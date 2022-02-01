import Link from 'next/link';

import { useState } from 'react';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Popover, Card, IconButton } from '@mui/material';

import { useUserData } from '~hooks/query/useUserData';
import { useLoginStore } from '~hooks/store/UseLoginStore';
import { setIdUser } from '~hooks/store/UseUserStore';

import scss from './address.module.scss';
import AddressDrawer from './AddressDrawer';
import AdressCard from './Card';

export default function Address() {
  const isLogged = useLoginStore((state) => state.isLogged);
  const [isAddressDrawerOpen, setIsAddressDrawerOpen] =
    useState<boolean>(false);
  const allUserData = useUserData();
  setIdUser(allUserData?.data?.id);
  //
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'adressPop' : undefined;

  const handleClickAddressButton = () => {
    setIsAddressDrawerOpen(true);
  };

  const onRequestDrawerClose = () => {
    setIsAddressDrawerOpen(false);
  };
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
      <AddressDrawer
        isAddressDrawerOpen={isAddressDrawerOpen}
        onRequestClose={onRequestDrawerClose}
      />
      {/* <Popover
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
      </Popover> */}
    </div>
  );
}
