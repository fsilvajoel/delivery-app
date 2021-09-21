import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { ICredentialsData } from '~services/Api/auth';

import { UseLogin } from '~hooks/useUser';

import LogoZeferino from './components/login/images/logozeferino.png';
import styles from './components/login/Login.module.scss';

const Login = () => {
  const { control, handleSubmit } = useForm<ICredentialsData>();

  const onSubmit: SubmitHandler<ICredentialsData> = (data) => {
    console.log(data);
    UseLogin(data);
  };

  return (
    <Grid className={styles.root} component="main" container>
      <Grid className={styles.image} item md={7} sm={4} xs={false} />
      {/* TODO: fazer um .join no className com o caminho da imagem correta */}
      <Grid component={Paper} elevation={6} item md={5} sm={8} square xs={12}>
        <div className={styles.paper}>
          <img className={styles.logo} src={LogoZeferino} alt="Logo" />
          <h1 className={styles.title}>Entrar</h1>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField id="mail" label="E-mail" {...field} />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  autoComplete="user"
                  id="password"
                  label="Senha"
                  type="password"
                  {...field}
                />
              )}
            />

            <Button fullWidth type="submit" variant="contained">
              Entrar
            </Button>
            <Button color="primary" fullWidth type="submit" variant="contained">
              Entrar com Facebook
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="https://delivery.growtechnologies.com.br/rest-auth/password/reset/"
                  variant="h5"
                >
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="h5">
                  Criar conta
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default Login;
