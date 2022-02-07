import { FocusEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  Button,
  TextField,
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { registerUserAddress } from '~services/Api/Address/addressApi';
import {
  IAddressData,
  IAddressDeliveryDistrict,
} from '~services/Api/Address/types';
import { CEP_REGEX } from '~utils/validation';

// import { discoveryInfoAdress } from '~services/Api/Address/addressApi';

import { useDelliveryAddress } from '~hooks/query/useAddress';
import { useUserStore } from '~hooks/store/UseUserStore';

import { ICepSearch } from './types';

const AddressForm = () => {
  const deliveryDistricts = useDelliveryAddress();
  const { register, handleSubmit, control, errors } = useForm<IAddressData>();
  const userId = useUserStore((store: { id: number }) => store.id);

  const renderSelectOptions = (options: IAddressDeliveryDistrict[]) =>
    options.map((option: IAddressDeliveryDistrict) => (
      <MenuItem key={option.id} value={option.district_name}>
        {option.district_name}
      </MenuItem>
    ));

  const onSubmit = (fields: IAddressData) => {
    const dataToSend = fields;
    dataToSend.user = userId;
    dataToSend.customer = 1;
    console.log('dataToSend', dataToSend);
    registerUserAddress(dataToSend);
  };

  // const findCep = async (e: FocusEvent<HTMLInputElement>) => {
  //   if (streetInfo === '') {
  //     const res: ICepSearch = await discoveryInfoAdress(e.currentTarget.value);
  //     setUfInfo(res.uf);
  //     setStreetInfo(res.logradouro);
  //     setDistrictInfo(res.bairro);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1}>
        <TextField
          required
          name="name"
          label="Apelido para o endereço"
          type="text"
          variant="outlined"
          inputRef={register}
        />
        <TextField
          required
          name="cep"
          label="CEP"
          variant="outlined"
          inputRef={register({
            pattern: {
              value: CEP_REGEX,
              message: 'Insira um CEP válido',
            },
          })}
        />
        {errors.cep && <p>Insira um CEP válido</p>}
        <TextField
          required
          name="city"
          label="Cidade"
          type="text"
          variant="outlined"
          inputRef={register}
        />
        <TextField
          required
          name="street"
          label="Rua ou logradouro"
          type="text"
          variant="outlined"
          inputRef={register}
        />
        <TextField
          required
          name="number"
          label="Número"
          type="number"
          variant="outlined"
          inputRef={register}
        />
        <TextField
          required
          name="complement"
          label="Complemento"
          type="text"
          variant="outlined"
          inputRef={register}
        />
        <TextField
          required
          name="reference"
          label="Referência"
          type="text"
          variant="outlined"
          inputRef={register}
        />
        <TextField
          required
          name="UF"
          label="Sigla Estado"
          type="text"
          variant="outlined"
          inputRef={register}
        />
        <Controller
          name="district"
          control={control}
          rules={{
            required: true,
          }}
          defaultValue=""
          render={({ onChange, value }) => (
            <FormControl>
              <InputLabel id="select-label">Bairro *</InputLabel>
              <Select
                required
                displayEmpty
                value={value}
                labelId="select-label"
                id="select"
                name="district"
                label="Bairro"
                onChange={onChange}
              >
                <MenuItem key="null-option" value="" />
                {deliveryDistricts !== undefined &&
                  renderSelectOptions(deliveryDistricts)}
              </Select>
            </FormControl>
          )}
        />
        <Button color="primary" fullWidth type="submit" variant="contained">
          Pronto
        </Button>
      </Stack>
    </form>
  );
};
export default AddressForm;
