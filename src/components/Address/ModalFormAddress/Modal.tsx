import { useState } from 'react';

import { Button, IconButton, Modal } from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';

import AddressForm from './Form';
import scss from './Modal.module.scss';

function ModalFormAddress() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Body = () => {
    return (
      <div className={scss.formAddress}>
        <div className={scss.formAddressHeader}>
          <h2 className={scss.title}>Cadastrar novo Endereço</h2>
          <IconButton aria-label="close" component="span" onClick={handleClose}>
            <CloseIcon className={scss.icon} />
          </IconButton>
        </div>
        <div className={scss.procuctDetailBody}>
          <AddressForm />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Button onClick={handleOpen}>Adicionar Novo</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Body />
      </Modal>
    </div>
  );
}
export default ModalFormAddress;
