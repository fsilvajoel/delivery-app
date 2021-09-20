import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

// import Copyright from '../../Components/Layout/Copyright';
import { IRegistersData, register } from '~services/Api/auth';

import LogoZeferino from '../components/login/images/logozeferino.png';
import scss from '../components/login/Login.module.scss';
import TermsOfService from './TermsOfService';

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistersData>();

  const onSubmit: SubmitHandler<IRegistersData> = (data) => {
    console.log(data);
    register(data);
  };

  const [loading, setLoading] = useState<boolean>(false);
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
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  autoComplete="Nome"
                  autoFocus
                  fullWidth
                  required
                  label="Seu primeiro nome"
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              name="last_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  autoComplete="Nome"
                  autoFocus
                  fullWidth
                  required
                  label="Sobrenome"
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  autoFocus
                  fullWidth
                  required
                  label="Endereço de E-mail"
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              name="password1"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  autoFocus
                  fullWidth
                  required
                  label="Senha"
                  margin="normal"
                  type="password"
                  {...field}
                />
              )}
            />
            <Controller
              name="password2"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  autoFocus
                  fullWidth
                  required
                  label="Confirmar Senha"
                  margin="normal"
                  type="password"
                  {...field}
                />
              )}
            />
            <Controller
              name="phone"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  autoFocus
                  fullWidth
                  required
                  label="Telefone"
                  margin="normal"
                  type="phone"
                  {...field}
                />
              )}
            />

            <Controller
              name="legal_identity"
              control={control}
              defaultValue="cpf"
              render={() => <></>}
              // render={({ field }) => (
              //   <RadioGroup row {...field}>
              //     <FormControlLabel
              //       value="cpf"
              //       control={<Radio />}
              //       label="CPF"
              //       labelPlacement="bottom"
              //     />
              //     <FormControlLabel
              //       value="cnpj"
              //       control={<Radio />}
              //       label="CNPJ"
              //       labelPlacement="bottom"
              //     />
              //   </RadioGroup>
              // )}
            />

            <Controller
              name="document_number"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  autoComplete="000.000.000-00"
                  autoFocus
                  fullWidth
                  required
                  label="CPF"
                  margin="normal"
                  {...field}
                />
              )}
            />
            <div className={scss.termsOfService}>
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
            {/* <Button
              fullWidth
              color="primary"
              className={scss.submit}
              type="submit"
              variant="contained"
            >
              Cadastrar com Facebook
            </Button> */}
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
