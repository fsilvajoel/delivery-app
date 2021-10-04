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

import { useAddressData } from '~hooks/query/useAddress';
import { useUserData } from '~hooks/query/useUserData';
import { setAddressToSend } from '~hooks/store/UseUserStore';

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
  console.log('allUserData', allUserData.data);
  console.log('allAddress', allAddress.data);
  const classes = useStyles();
  return (
    <CardContent className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Endereço de Entrega
      </Typography>

      <ModalFormAddress />

      <List disablePadding>
        {allAddress?.data?.map((address: IAddress) => (
          <ListItem className={classes.listItem} key={address.name}>
            <Checkbox
              onChange={() => setAddressToSend(address.id)}
              name="jason"
            />
            <ListItemText primary={address.name} secondary={address.street} />
            <Typography variant="body2">{address.district}</Typography>
          </ListItem>
        ))}
      </List>
    </CardContent>
  );
}
