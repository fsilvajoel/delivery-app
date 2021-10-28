import { useState } from 'react';

import { CardActions, CardContent, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
// import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import DrawerSection from '~components/Layout/Drawer/Drawer';

import { useAddressData } from '~hooks/query/useAddress';
import { useUserData } from '~hooks/query/useUserData';
import { setAddressToSend } from '~hooks/store/UseCheckoutStore';

import scss from './address.module.scss';
import ModalFormAddress from './ModalFormAddress/Modal';
import { IAddress } from './ModalFormAddress/types';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    width: '22rem',
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
}));

export default function AdressCard() {
  const allUserData = useUserData();
  const allAddress = useAddressData();
  const classes = useStyles();
  return (
    <div className={scss.container}>
      <h3 style={{ textAlign: 'center' }}>Endereço de Entrega</h3>
      {/* TODO: Refatorar para ser botóes de escolha tipo ifood */}
      <div className={scss.mainAddress}>
        {allAddress?.data
          ?.filter((address) => address.main === true)
          .map((address) => {
            return (
              <div className={scss.addressInfo}>
                <h2 className={scss.addressName}>{address.name}</h2>
                <p className={scss.address}>
                  {address.street}, {address.number} {address.district}
                </p>
              </div>
            );
          })}

        <DrawerSection
          buttonContent="trocar"
          direction="right"
          className={scss.btnChange}
        >
          <ModalFormAddress />
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
          </div>
        </DrawerSection>
      </div>
    </div>
  );
}
