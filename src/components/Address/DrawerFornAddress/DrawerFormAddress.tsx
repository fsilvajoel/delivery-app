import DrawerSection from '~components/Layout/Drawer/Drawer';

import AddressForm from '../ModalFormAddress/Form';

export const DrawerFormAdress = () => {
  return (
    <DrawerSection
      size={350}
      buttonContent="trocar"
      direction="right"
      // className={scss.btnChange}
    >
      <p>novo drawer</p>
      <AddressForm />
    </DrawerSection>
  );
};
