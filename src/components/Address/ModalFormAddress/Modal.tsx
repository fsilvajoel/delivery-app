// import { useRouter } from 'next/router';

import { useState } from 'react';

import { Button, IconButton, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import AddressForm from './Form';
import scss from './Modal.module.scss';

// import { setProductsInCart } from '~hooks/store/UseCartStore';

function ModalFormAddress() {
  // const router = useRouter();
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
