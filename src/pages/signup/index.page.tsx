import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

// import Copyright from '../../Components/Layout/Copyright';
// import { registration } from '../../shared/services/Api/loginApi';
import logoMorita from './components/login/images/logozeferino.png';
import styles from './components/login/Login.module.scss';
import { IFormRegister } from './components/login/type';
// import backgroundLogin from './login/images/backgroundLogin.jpg';

export default function SignUp() {
  // const classes = useStyles();
  const { control, handleSubmit } = useForm<IFormRegister>();

  // const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit: SubmitHandler<IFormRegister> = (data) => {
    console.log(data);
  };

  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Grid container component="main" className={styles.root}>
      {loading && (
        <div className={styles.loading}>
          <CircularProgress color="secondary" />
        </div>
      )}
      <Grid component={Paper} elevation={6} item md={5} sm={8} square xs={12}>
        <div className={styles.paper}>
          <img className={styles.logo} src={logoMorita} alt="Logo" />
          <h1 className={styles.title}>Cadastrar-se</h1>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="firstname"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  autoComplete="Nome"
                  autoFocus
                  fullWidth
                  label="Seu primeiro nome"
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              name="lastname"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  autoComplete="Nome"
                  autoFocus
                  fullWidth
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
                  label="Endereço de E-mail"
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  autoFocus
                  fullWidth
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
                  label="Confirmar Senha"
                  margin="normal"
                  type="password"
                  {...field}
                />
              )}
            />
            <Button
              fullWidth
              className={styles.submit}
              type="submit"
              variant="contained"
            >
              Pronto
            </Button>
            <Button
              fullWidth
              color="primary"
              className={styles.submit}
              type="submit"
              variant="contained"
            >
              Cadastrar com Facebook
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
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
    </Grid>
  );
}
