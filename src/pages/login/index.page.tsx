import Router from 'next/router';

import { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { Button, Grid, Link, Paper } from '@mui/material';
import Input from '~components/Layout/Input/Input';
import { ICredentialsData } from '~services/Api/auth';
import { MAIL_REGEX } from '~utils/validation';

import { useLoginStore } from '~hooks/store/UseLoginStore';
import { UseAuthenticated } from '~hooks/UseAuthenticated';

import LogoZeferino from './components/login/images/logozeferino.png';
import styles from './components/login/Login.module.scss';

const Login = () => {
  const isLogged = useLoginStore((state) => state.isLogged);
  console.log(isLogged);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm();

  const handleLogin = async (data: ICredentialsData) => {
    const res = await UseAuthenticated(data);
    if (res) {
      console.log('loguei!');
      Router.push('/');
    } else {
      console.log('tente novamente!');
    }
  };

  const onSubmit: SubmitHandler<ICredentialsData> = (fields) => {
    console.log(fields);
    handleLogin(fields);
  };

  useEffect(() => {
    if (isLogged) {
      Router.push('/');
    }
  }, [isLogged]);

  return (
    <Grid className={styles.root} component="main" container>
      <Grid className={styles.image} item md={7} sm={4} xs={false} />
      {/* TODO: fazer um .join no className com o caminho da imagem correta */}
      <Grid component={Paper} elevation={6} item md={5} sm={8} square xs={12}>
        <div className={styles.paper}>
          <img className={styles.logo} src={LogoZeferino} alt="Logo" />
          <h1 className={styles.title}>Entrar</h1>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
              required
              type="text"
              name="email"
              placeholder="E-mail"
              requiredMsg="E-mail é um campo obrigatório"
              patternMsg="É necessário ser um e-mail válido"
              register={register}
              pattern={MAIL_REGEX}
              value={watch('email')}
              errors={errors.email && true}
              errorMessage={errors.email?.message}
            />
            <Input
              required
              type="password"
              name="password"
              placeholder="Senha"
              requiredMsg="é necessário senha"
              patternMsg="É necessário uma senha válida"
              register={register}
              value={watch('password')}
              errors={errors.password && true}
              errorMessage={errors.password?.message}
            />

            <Button fullWidth type="submit" variant="contained">
              Entrar
            </Button>
            {/* <Button color="primary" fullWidth type="submit" variant="contained">
              Entrar com Facebook
            </Button> */}
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
