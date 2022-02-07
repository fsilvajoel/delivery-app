import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
  Checkbox,
  Button,
  TextField,
  Paper,
  Grid,
  Input,
  Link,
  CircularProgress,
} from '@mui/material';
import ptLocale from 'date-fns/locale/pt-BR';
import { IRegistersData, registerUser } from '~services/Api/auth';
import { MAIL_REGEX, CPF_REGEX } from '~utils/validation';

import LogoZeferino from '../login/components/login/images/logozeferino.png';
import scss from '../login/components/login/Login.module.scss';
import TermsOfService from './TermsOfService';

// import Copyright from '../../Components/Layout/Copyright';
// import { ConvertDate } from '~utils/convertBrlDate';
// import Input from '~components/Layout/Input/Input';
export default function SignUp() {
  const { register, handleSubmit, errors, control, watch } = useForm();

  const [loading, setLoading] = useState<boolean>(false);

  const verifyIsCpfOrCnpj = (value: string) => {
    const size = value.length;
    if (size === 11) {
      return 'cpf';
    }
    if (size === 14) {
      return 'cnpj';
    }
    return 'error';
  };

  const onSubmit: SubmitHandler<IRegistersData> = (data) => {
    console.log(data);
    const dataSend = data;
    dataSend.legal_identity = verifyIsCpfOrCnpj(data.document_number);
    // registerUser(dataSend);
  };
  type TError = {
    type: 'required' | 'validate';
  };

  const handleDateErrors = (dateError: TError) => {
    const errorsMessage = {
      required: 'Este campo é obrigatório',
      validate: 'Insira uma data válida',
    };

    return dateError ? (
      <div className={scss.errorMessage}>{errorsMessage[dateError.type]} </div>
    ) : null;
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
            <TextField
              required
              name="first_name"
              label="Nome"
              type="text"
              variant="outlined"
              inputRef={register}
            />
            <TextField
              required
              name="last_name"
              label="Sobrenome"
              type="text"
              variant="outlined"
              inputRef={register}
            />
            <TextField
              required
              name="email"
              label="E-mail"
              type="email"
              variant="outlined"
              inputRef={register({
                pattern: {
                  value: MAIL_REGEX,
                  message: 'Insira um E-mail válido',
                },
              })}
            />
            {errors.email && (
              <div className={scss.errorMessage}>Insira um E-mail válido</div>
            )}
            <TextField
              required
              name="password1"
              label="Senha"
              type="password"
              variant="outlined"
              inputRef={register}
            />
            <TextField
              required
              name="password2"
              label="Confirmação de Senha"
              variant="outlined"
              type="password"
              inputRef={register}
            />
            <TextField
              required
              type="tel"
              inputRef={register}
              label="Telefone"
              name="phone"
            />
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              locale={ptLocale}
            >
              <Controller
                name="date"
                control={control}
                defaultValue={null}
                rules={{
                  required: true,
                }}
                render={({ onChange, value }) => (
                  <>
                    <DatePicker
                      label="Data de Aniversario *"
                      value={value}
                      onChange={onChange}
                      minDate={new Date(1935, 11, 17)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    {handleDateErrors(errors.birthday)}
                  </>
                )}
              />
            </LocalizationProvider>

            {/* <TextField
              required
              inputRef={register}
              label="Data de Nascimento"
              type="date"
              name="birthday"
            /> */}
            <TextField
              required
              name="document_number"
              label="CPF"
              variant="outlined"
              inputRef={register({
                pattern: {
                  value: CPF_REGEX,
                  message: 'Insira um CPF válido',
                },
              })}
            />
            {errors.document_number && (
              <div className={scss.errorMessage}>Insira um CPF válido</div>
            )}
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
