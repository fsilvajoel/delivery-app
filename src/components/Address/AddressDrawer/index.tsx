import { useWindowSize } from 'react-use';

import CloseIcon from '@mui/icons-material/Close';
import { Button, Container, Drawer } from '@mui/material';

// import { Button, Container, Drawer } from '@mui/material';
// import AddressForm from '../ModalFormAddress/Form';
import scss from './AddressDrawer.module.scss';
import { IAddressDrawerProps } from './types';

const AddressDrawer = ({
  isAddressDrawerOpen,
  onRequestClose,
}: IAddressDrawerProps) => {
  const { width } = useWindowSize();
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
        {/* {isLogged ? renderUserInfo() : renderForm()} */}
      </Container>
    </Drawer>
  );
};

export default AddressDrawer;
