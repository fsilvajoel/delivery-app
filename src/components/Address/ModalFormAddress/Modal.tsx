import { useRouter } from 'next/router';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button, IconButton, TextField, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Input from '~components/Layout/Input/Input';
import InputPhone from '~components/Layout/InputPhone/InputPhone';
import { emailRegex, fullNameRegex } from '~utils/validation';

import { useUserData } from '~hooks/query/useUserData';

import scss from './Modal.module.scss';
import { DataSendAddress, IAddressData } from './types';

// import { setProductsInCart } from '~hooks/store/UseCartStore';

function ModalFormAddress() {
  const allUserData = useUserData();
  console.log('allUserData', allUserData);
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

  const onSubmit = (fields: DataSendAddress) => {
    const dataToSend = fields;
    dataToSend.user = allUserData?.data.id;
    console.log(fields);
  };
  const findCep = (cep: string) => {
    console.log('cep', cep);
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
              placeholder="Qual o nome deste endereço? (EX: Casa)"
              requiredMsg="Nome é um campo obrigatório"
              register={register}
              value={watch('name')}
              errors={errors.name && true}
              errorMessage={errors.name?.message}
            />
            <Input
              required
              type="text"
              name="cep"
              placeholder="CEP"
              requiredMsg="CEP é obrigatório"
              register={register}
              onBlur={findCep}
              // pattern="lala"
              value={watch('cep')}
              errors={errors.cep && true}
              errorMessage={errors.cep?.message}
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
              name="number"
              placeholder="Número"
              requiredMsg="Número é um campo obrigatório"
              register={register}
              value={watch('number')}
              errors={errors.number && true}
              errorMessage={errors.number?.message}
            />
            <Input
              required
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
              placeholder="Referência (ex: em frente a Barbearia Navalha)"
              register={register}
              value={watch('reference')}
              errors={errors.reference && true}
              errorMessage={errors.reference?.message}
            />
            <Input
              required
              type="text"
              name="uf"
              placeholder="Sigla Estado"
              register={register}
              value={watch('uf')}
              errors={errors.uf && true}
              errorMessage={errors.uf?.message}
            />
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
            {/* <select>
              <option>Cidade</option>
              <option>Cidade</option>
              <option>Cidade</option>
            </select>
            <select>
              <option>Bairro</option>
              <option>Bairro</option>
              <option>Bairro</option>
            </select> */}
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
