import { useState } from 'react';

import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

import scss from './Modal.module.scss';

function ModalProductInfo() {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      className={scss.paper}
    >
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      {/* <ModalProductInfo /> */}
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen}>Ver detalhes</Button>
      {/* <button type="button">Ver detalhes</button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalProductInfo;
