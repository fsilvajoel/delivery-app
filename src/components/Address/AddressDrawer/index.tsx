import Link from 'next/link';

import { useWindowSize } from 'react-use';

import CloseIcon from '@mui/icons-material/Close';
import { Button, Container, Drawer } from '@mui/material';

import { useUserData } from '~hooks/query/useUserData';
import { useLoginStore } from '~hooks/store/UseLoginStore';
import { setIdUser } from '~hooks/store/UseUserStore';

import AddressContent from '../index';
import scss from './AddressDrawer.module.scss';
import { IAddressDrawerProps } from './types';

const AddressDrawer = ({
  isAddressDrawerOpen,
  onRequestClose,
}: IAddressDrawerProps) => {
  const isLogged = useLoginStore(
    (state: { isLogged: boolean }) => state.isLogged
  );
  const allUserData = useUserData();
  console.log('dados do usuario', allUserData);
  setIdUser(allUserData?.data?.id);

  const { width } = useWindowSize();
  const renderNeedLogin = () => (
    <p className={scss.loginButton}>
      <Link href="/login">Faça Login para Continuar</Link>
    </p>
  );
  return (
    <Drawer
      open={isAddressDrawerOpen}
      className={scss.drawer}
      onClose={onRequestClose}
      anchor={width > 720 ? 'right' : 'bottom'}
    >
      <Container className={scss.container}>
        <Button className={scss.closeButton} onClick={onRequestClose}>
          <CloseIcon sx={{ fontSize: 32 }} />
        </Button>
        {isLogged ? <AddressContent /> : renderNeedLogin()}
      </Container>
    </Drawer>
  );
};

export default AddressDrawer;
