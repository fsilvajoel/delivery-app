import { FocusEvent, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useQuery } from 'react-query';

import {
  Button,
  IconButton,
  TextField,
  Modal,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material';
import Input from '~components/Layout/Input/Input';
import Option from '~components/Layout/Select/Option/Option';
import Select from '~components/Layout/Select/Select';
import {
  getIsDeliveryAddress,
  registerUserAddress,
} from '~services/Api/Address/addressApi';
import { cepRegex } from '~utils/validation';

// import { discoveryInfoAdress } from '~services/Api/Address/addressApi';

import { useDelliveryAddress } from '~hooks/query/useAddress';
import { useUserStore } from '~hooks/store/UseUserStore';

import scss from './Modal.module.scss';
import { IAddress, ICepSearch } from './types';

const AddressForm = () => {
  const userId = useUserStore((store: { id: number }) => store.id);
  const deliveryDistricts = useDelliveryAddress();
  console.log('deliveryDistricts', deliveryDistricts);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm<IAddress>();

  // const renderSelectOptions = (options: any) =>
  //   options.map((option: any) => (
  //     <MenuItem key={option.id} value={option.id}>
  //       {option.district_name}
  //     </MenuItem>
  //   ));

  const onSubmit = (fields: IAddress) => {
    const dataToSend = fields;
    dataToSend.user = userId;
    console.log(fields);
    console.log('dataToSend', dataToSend);
    registerUserAddress(dataToSend);
  };
  // const renderDistricts = () =>
  //   deliveryDistricts?.data?.map((district: any) => (
  //     <Option
  //       key={district.id}
  //       value={district.district}
  //       selected={watch('source') === district.district}
  //     >
  //       {district.district_name}
  //     </Option>
  //   ));

  // const findCep = async (e: FocusEvent<HTMLInputElement>) => {
  //   if (streetInfo === '') {
  //     const res: ICepSearch = await discoveryInfoAdress(e.currentTarget.value);
  //     setUfInfo(res.uf);
  //     setStreetInfo(res.logradouro);
  //     setDistrictInfo(res.bairro);
  //   }
  // };

  return (
    <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1}>
        <Input
          type="text"
          name="name"
          value={watch('name')}
          placeholder="Ex: Casa"
          requiredMsg="Nome é um campo obrigatório"
          patternMsg="É necessário ter nome"
          errors={errors.name && true}
          errorMessage={errors.name?.message}
          register={register}
          required
        />
        <Input
          required
          type="number"
          name="cep"
          value={watch('cep')}
          placeholder="CEP (12.123-123)"
          requiredMsg="CEP é obrigatório"
          patternMsg="É necessário ser um CEP valido"
          errors={errors.cep && true}
          errorMessage={errors.cep?.message}
          register={register}
          pattern={cepRegex}
          // onBlur={findCep}
        />

        <Input
          required
          type="text"
          name="city"
          placeholder="Cidade"
          requiredMsg="Nome da cidade é obrigatório"
          register={register}
          value={watch('city')}
          errors={errors.city && true}
          errorMessage={errors.city?.message}
        />
        <Input
          required
          type="text"
          name="street"
          placeholder="Rua ou logradouro"
          requiredMsg="Nome é um campo obrigatório"
          register={register}
          value={watch('street')}
          errors={errors.street && true}
          errorMessage={errors.street?.message}
        />
        <Input
          required
          type="number"
          name="AddressNumber"
          placeholder="Número"
          requiredMsg="Número é um campo obrigatório"
          register={register}
          value={watch('AddressNumber')}
          errors={errors.number && true}
          errorMessage={errors.number?.message}
        />
        <Input
          required={false}
          type="text"
          name="complement"
          placeholder="Complemento"
          requiredMsg="Complemento é um campo obrigatório"
          register={register}
          value={watch('complement')}
          errors={errors.complement && true}
          errorMessage={errors.complement?.message}
        />
        <Input
          required={false}
          type="text"
          name="reference"
          placeholder="Referência"
          register={register}
          value={watch('reference')}
          errors={errors.reference && true}
          errorMessage={errors.reference?.message}
        />
        <Input
          required
          type="text"
          name="UF"
          placeholder="Sigla Estado"
          register={register}
          value={watch('uf')}
          errors={errors.UF && true}
          errorMessage={errors.UF?.message}
        />
        {/* <Select
        label="Ano de formação"
        value={watch('district')}
        onChange={(value) => setValue('district', value)}
        errors={errors.district && true}
        errorMessage={errors.district?.message}
      >
        {renderDistricts()}
      </Select> */}
        {/* {deliveryDistricts.status === 'success' && (
          <Controller
            name="category"
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
                  name="category"
                  label="Categoria"
                  onChange={onChange}
                >
                  <MenuItem key="null-option" value="" />
                  {/* <p>oi</p> */}
        {/* {renderSelectOptions(deliveryDistricts.data!)} */}
        {/* </Select>
              </FormControl>
            )}
          />
        )} */}
        <Input
          required
          type="text"
          name="district"
          placeholder="Bairro"
          register={register}
          value={watch('district')}
          errors={errors.district && true}
          errorMessage={errors.district?.message}
        />
        <Button
          className={scss.submit}
          color="primary"
          fullWidth
          type="submit"
          variant="contained"
        >
          Pronto
        </Button>
      </Stack>
    </form>
  );
};
export default AddressForm;
