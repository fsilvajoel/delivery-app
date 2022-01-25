import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
// import Copyright from '../../Components/Layout/Copyright';
// import Input from '~components/Layout/Input/Input';
import { CpfInput } from '~components/Layout/InputMasks/cpf';
import { PhoneInput } from '~components/Layout/InputMasks/phone';
import { IRegistersData, registerUser } from '~services/Api/auth';
import { ConvertDate } from '~utils/convertBrlDate';
import { cepRegex, DateRegex, emailRegex } from '~utils/validation';

import LogoZeferino from '../login/components/login/images/logozeferino.png';
import scss from '../login/components/login/Login.module.scss';
import TermsOfService from './TermsOfService';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    // control,
    formState: { errors },
    watch,
    // reset,
    // setValue,
  } = useForm<IRegistersData>();

  const onSubmit: SubmitHandler<IRegistersData> = (data) => {
    // console.log('convertido', ConvertDate(data.birthday));
    console.log(data);
    const dataSend = data;
    dataSend.legal_identity = 'cpf';
    registerUser(dataSend);
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [phoneValues, setPhoneValues] = useState('');
  const [cpfValues, setCpfValues] = useState('');

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValues(event.target.value);
  };
  const handleChangeCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpfValues(event.target.value);
  };

  return (
    <Grid container component="main" className={scss.root}>
      {loading && (
        <div className={scss.loading}>
          <CircularProgress color="secondary" />
        </div>
      )}
      <Grid component={Paper} elevation={6} item md={5} sm={8} square xs={12}>
        <div className={scss.paper}>
          <img className={scss.logo} src={LogoZeferino} alt="Logo" />
          <h1 className={scss.title}>Cadastrar-se</h1>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="first_name"
              value={watch('first_name')}
              placeholder="Seu primeiro nome"
              requiredMsg="Nome é um campo obrigatório"
              patternMsg="É necessário ter nome"
              errors={errors.first_name && true}
              errorMessage={errors.first_name?.message}
              register={register}
              required
            />

            <Input
              type="text"
              name="last_name"
              value={watch('last_name')}
              placeholder="Seu Sobrenome"
              requiredMsg="Sobrenome é um campo obrigatório"
              patternMsg="É necessário ter sobrenome"
              errors={errors.last_name && true}
              errorMessage={errors.last_name?.message}
              register={register}
              required
            />

            <Input
              type="text"
              name="email"
              value={watch('email')}
              placeholder="E-mail"
              requiredMsg="E-mail é um campo obrigatório"
              patternMsg="É necessário ser um e-mail válido"
              errors={errors.email && true}
              errorMessage={errors.email?.message}
              pattern={emailRegex}
              register={register}
              required
            />
            <Input
              type="password"
              name="password1"
              value={watch('password1')}
              placeholder="Senha"
              requiredMsg="Senha é obrigatório"
              patternMsg="Senha é obrigatório"
              errors={errors.password1 && true}
              errorMessage={errors.password1?.message}
              register={register}
              required
            />
            <Input
              type="password"
              name="password2"
              value={watch('password2')}
              placeholder="Repita a Senha"
              requiredMsg="Senha é obrigatório"
              patternMsg="Senha é obrigatório"
              errors={errors.password2 && true}
              errorMessage={errors.password2?.message}
              register={register}
              required
            />
            <Input
              placeholder="Telefone"
              defaultValue="(00) 0000-0000"
              value={phoneValues}
              name="phone"
              onChange={handleChangePhone}
              inputComponent={PhoneInput as any}
              inputRef={register}
              // id="formatted-text-mask-input"
            />
            <Input
              placeholder="CPF"
              defaultValue="000.000.000-00"
              value={cpfValues}
              name="document_number"
              onChange={handleChangeCpf}
              inputComponent={CpfInput as any}
              inputRef={register}
              // id="formatted-text-mask-input"
            />
            {/* <TextField
              autoFocus
              variant="outlined"
              required
              inputRef={register}
              // inputRef={register({
              //   required: true,
              //   max: 9,
              //   min: 9,
              //   pattern: cepRegex,
              // })}
              label="CPF"
              // autoComplete="000.000.000-00"
              type="number"
              name="document_number"
            /> */}
            <TextField
              required
              inputRef={register}
              label="Data de Nascimento"
              type="date"
              name="birthday"
            />

            <div className={scss.termsOfService}>
              {/* <Controller
                as={Checkbox}
                control={control}
                name="termsOfService"
                color="primary"
                defaultValue={false}
              /> */}
              <Checkbox
                required
                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
              />
              <p>Li e concordo com os</p>
              <TermsOfService />
            </div>
            <Button
              fullWidth
              className={scss.submit}
              type="submit"
              variant="contained"
            >
              Pronto
            </Button>
            <Grid container>
              <Grid item xs />
              <Grid item>
                <Link href="/login" variant="h5">
                  Já cadastrado? Entrar!
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={scss.image} />
    </Grid>
  );
}
