import { useRouter } from 'next/router';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button, IconButton, TextField, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Input from '~components/Layout/Input/Input';
import InputPhone from '~components/Layout/InputPhone/InputPhone';
import { emailRegex, fullNameRegex } from '~utils/validation';

import scss from './Modal.module.scss';
import { IAddressData } from './types';

// import { setProductsInCart } from '~hooks/store/UseCartStore';

function ModalFormAddress(props) {
  const { data } = props;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm<IAddressData>();

  // const { control, handleSubmit } = useForm();
  // console.log({ dentroMODAL: data });
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (fields: IAddressData) => {
    console.log(fields);
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
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              required
              type="text"
              name="name"
              placeholder="Nome"
              requiredMsg="Nome é um campo obrigatório"
              patternMsg="É necessário ter nome e sobrenome"
              register={register}
              value={watch('name')}
              pattern={fullNameRegex}
              errors={errors.name && true}
              errorMessage={errors.name?.message}
            />
            <Input
              required
              type="text"
              name="email"
              placeholder="E-mail"
              requiredMsg="E-mail é um campo obrigatório"
              patternMsg="É necessário ser um e-mail válido"
              register={register}
              pattern={emailRegex}
              value={watch('email')}
              errors={errors.email && true}
              errorMessage={errors.email?.message}
            />
            <InputPhone
              required
              name="phone"
              placeholder="Telefone"
              errorMsg="Telefone é um campo obrigatório."
              register={register}
              value={watch('phone')}
              errors={!!errors.phone}
              onChangeDdiValue={(ddi: string) => setValue('ddi', ddi)}
              onChangePhoneValue={(phone: string) => setValue('phone', phone)}
            />
            {/* <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Nome do novo Endereço"
                  margin="normal"
                  required
                  variant="outlined"
                  {...field}
                />
              )}
            />

            <Controller
              name="street"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Rua ou logradouro"
                  margin="normal"
                  required
                  variant="outlined"
                  {...field}
                />
              )}
            />

            <Controller
              name="number"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Número"
                  margin="normal"
                  required
                  variant="outlined"
                  {...field}
                />
              )}
            />
            <Controller
              name="complement"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Complemento"
                  margin="normal"
                  required
                  variant="outlined"
                  {...field}
                />
              )}
            />
            <Controller
              name="reference"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Referência"
                  autoComplete="Ex: em frente ao mercado"
                  margin="normal"
                  required
                  variant="outlined"
                  {...field}
                />
              )}
            />
            <Controller
              name="cep"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="cep"
                  margin="normal"
                  required
                  variant="outlined"
                  {...field}
                />
              )}
            />
            <Controller
              name="uf"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Sigla Estado"
                  margin="normal"
                  required
                  variant="outlined"
                  {...field}
                />
              )}
            /> */}

            <select>
              <option>Cidade</option>
              <option>Cidade</option>
              <option>Cidade</option>
            </select>
            <select>
              <option>Bairro</option>
              <option>Bairro</option>
              <option>Bairro</option>
            </select>
            <Button
              className={scss.submit}
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Pronto
            </Button>
          </form>
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
