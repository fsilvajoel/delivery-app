import DrawerSection from '~components/Layout/Drawer/Drawer';

import { useAddressData } from '~hooks/query/useAddress';
// import { useUserData } from '~hooks/query/useUserData';
import {
  setAddressToSend,
  useCheckoutStore,
} from '~hooks/store/UseCheckoutStore';

import scss from './address.module.scss';
import { DrawerFormAdress } from './DrawerFornAddress/DrawerFormAddress';
import AddressForm from './ModalFormAddress/Form';
import ModalFormAddress from './ModalFormAddress/Modal';
import { IAddress } from './ModalFormAddress/types';

export default function AdressCard() {
  const allAddress = useAddressData();
  const addressSelect = useCheckoutStore((data) => data.AddressToSendId);
  const addressDefault = allAddress?.data?.filter(
    (address: IAddress) => address.main === true
  );
  console.log('adrressDeFAULT', addressDefault[0].id);
  if (addressSelect === -1) {
    setAddressToSend(addressDefault[0].id);
  }

  return (
    <div className={scss.container}>
      <h3 style={{ textAlign: 'center' }}>Endereço de Entrega</h3>
      <div className={scss.mainAddress}>
        {/* {addressSelect === -1 ? ( */}
        {/* <>
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
          </> */}
        {/* ) : ( */}
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
        {/* )} */}

        <DrawerSection
          size={350}
          buttonContent="trocar"
          direction="right"
          className={scss.btnChange}
        >
          {/* <ModalFormAddress /> */}
          <div className={scss.selectAddress}>
            {allAddress?.data?.map((address: IAddress) => (
              <button
                type="button"
                onClick={() => setAddressToSend(address.id)}
              >
                <h4 className={scss.name}>{address.name}</h4>
                <h5 className={scss.street}>
                  {address.street}, {address.number} {address.district}
                </h5>
                <p className={scss.district}>{address.district}</p>
              </button>
            ))}
            <button type="button" className={scss.novoEnde}>
              Adicionar Novo Endereço
            </button>
            <DrawerFormAdress />
          </div>
        </DrawerSection>
      </div>
    </div>
  );
}
