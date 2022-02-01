import { useState } from 'react';

import { Button, Container } from '@mui/material';
import DrawerSection from '~components/Layout/Drawer/Drawer';

import { useAddressData } from '~hooks/query/useAddress';
import {
  setAddressToSend,
  useCheckoutStore,
} from '~hooks/store/UseCheckoutStore';

import scss from './address.module.scss';
// import { DrawerFormAdress } from './DrawerAddress/DrawerFormAddress';
import AddressForm from './ModalFormAddress/Form';
import { IAddress } from './ModalFormAddress/types';

export default function AdressCard() {
  const allAddress = useAddressData();
  console.log(allAddress);
  const addressSelect = useCheckoutStore((data) => data.AddressToSendId);
  const [isSelect, setIsSelect] = useState(true);
  // const addressDefault = allAddress?.data?.filter(
  //   (address: IAddress) => address.main === true
  // );
  // // console.log('adrressDeFAULT', addressDefault[0]?.id);
  // if (addressSelect === -1) {
  //   setAddressToSend(addressDefault[0]?.id);
  // }

  const showDefaultAddress = () => (
    <>
      {allAddress?.data
        ?.filter((address: any) => address.main === true)
        .map((address: any) => {
          return (
            <div className={scss.addressInfo}>
              <h2 className={scss.addressName}>{address.name}</h2>
              <p className={scss.address}>
                {address.street}, {address.number} {address.district}
              </p>
            </div>
          );
        })}
    </>
  );

  const showSelectedAddress = () => (
    <>
      {allAddress?.data
        ?.filter((address: IAddress) => address.id === addressSelect)
        .map((address: IAddress) => {
          return (
            <div className={scss.addressInfo}>
              <h2 className={scss.addressName}>{address.name}</h2>
              <p className={scss.address}>
                {address.street}, {address.number} {address.district}
              </p>
            </div>
          );
        })}
    </>
  );

  const changeAddress = () => {
    return (
      <div className={scss.selectAddress}>
        {allAddress?.data?.map((address: IAddress) => (
          <button type="button" onClick={() => setAddressToSend(address.id)}>
            <div>llala</div>
            <div>
              <h4 className={scss.name}>{address.name}</h4>
              <h5 className={scss.street}>
                {address.street}, {address.number} {address.district}
              </h5>
              <p className={scss.district}>{address.district}</p>
            </div>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={scss.container}>
      {isSelect ? (
        <div className={scss.mainAddress}>
          <h3 className={scss.title}>Endereço de Entrega</h3>
          {addressSelect === -1 ? showDefaultAddress() : showSelectedAddress()}
          <>{changeAddress()}</>
        </div>
      ) : (
        <>
          <p>cadastrar novo endereço</p>
          <AddressForm />
        </>
      )}
      ;
      <Button
        onClick={() => setIsSelect(!isSelect)}
        className={scss.novoEnde}
        color="primary"
        fullWidth
        type="submit"
        variant="contained"
      >
        {isSelect ? 'Adicionar Novo endereço' : 'Ver endereços'}
      </Button>
      {/* <button
        type="button"
        className={scss.novoEnde}
        onClick={() => setIsSelect(!isSelect)}
      >
        {isSelect ? 'Adicionar Novo endereço' : 'Ver endereços'}
      </button> */}
      {/* <DrawerSection
          size={350}
          buttonContent="trocar"
          direction="right"
          className={scss.btnChange}
        >
          <Container>
           
            <button
              type="button"
              className={scss.novoEnde}
              onClick={() => setIsSelect(!isSelect)}
            >
              {isSelect ? 'Adicionar Novo endereço' : 'Ver endereços'}
            </button>
          </Container>
        
      {/* </DrawerSection> */}
    </div>
  );
}
