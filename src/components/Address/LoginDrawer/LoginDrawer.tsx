import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useWindowSize } from 'react-use';
import Router from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Button, Container, Drawer, Portal, Snackbar, Stack, TextField, Typography, } from '@mui/material';
import { ILoginDrawerProps, ILoginUserData, IRegisterUserData, IToastState, IUserData } from './types';

import scss from './LoginDrawer.module.scss';
import { postLoginUser, postRegisterUser } from '~services/Api/User/userData';
import { UseAuthenticated, UseExit } from '~hooks/store/UseAuthenticated';
import { useLoginStore } from '~hooks/store/UseLoginStore';

const MAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const TOAST_MESSAGE_LOGIN = {
  success: 'Login efetuado com sucesso!',
  error: 'Erro ao tentar logar. Verifique o usuário ou senha.',
};

const TOAST_MESSAGE_REGISTER = {
  success: 'Conta criada com sucesso!',
  error: 'Erro ao Cadastrar. Verifique os dados e tente novamente',
};

const LoginDrawer = ({ isLoginDrawerOpen, onRequestClose }: ILoginDrawerProps) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const { width } = useWindowSize();
  const [toast, setToast] = useState<IToastState>({ open: false, severity: 'success' });
  const [isLogin, setIsLogin] = useState(true);
  const isLogged = useLoginStore((state) => state.isLogged);

  const onSubmitLogin = async (user: ILoginUserData) => {
    try{
    const responseLoginUser = await postLoginUser(user);

    if (responseLoginUser.status === 201 || responseLoginUser.status === 200) {
      UseAuthenticated(responseLoginUser.data.key);
      setToast({
        open: true,
        severity: 'success',
      });
      reset();
      onRequestClose();
      Router.push('/');
    }
    }catch(error){
      setToast({
        open: true,
        severity: 'error',
      });

    }
  };
  const onExit = ()=>{
    UseExit();
    onRequestClose();
  }
  const onSubmitRegister = async (user: IRegisterUserData) => {
    try{
      const responseRegisterUser = await postRegisterUser(user);
  
      if (responseRegisterUser.status === 201 || responseRegisterUser.status === 200) {
        setToast({
          open: true,
          severity: 'success',
        });
        reset();
        onRequestClose();
      }
      }catch(error){
        setToast({
          open: true,
          severity: 'error',
        });
  
      }
  }

  const handleToastClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setToast((prevValue) => {
      return { ...prevValue, open: false };
    });
  };

  const handleLoginOrRegisterClick = () => {
    setIsLogin((previousValue) => !previousValue);
    reset();
  }

  const renderToast = () => (
    <Portal>
      <Snackbar
        open={toast.open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        onClose={handleToastClose}
      >
        <Alert
          onClose={handleToastClose}
          severity={toast.severity}
          sx={{ width: '100%', fontSize: '16px' }}
        >
          {isLogin ? TOAST_MESSAGE_LOGIN[toast.severity] : TOAST_MESSAGE_REGISTER[toast.severity]}
        </Alert>
      </Snackbar>
    </Portal>
  );


  const renderRegister = () => {
    return (
      <form onSubmit={handleSubmit(onSubmitRegister)} className={scss.registerFormContainer}>
        <Stack spacing={2}>
          <Typography variant="h3" component="div">
            Cadastre sua Conta
          </Typography>

          <TextField
            required
            name="username"
            label="Nome de usuário"
            type="text"
            variant="outlined"
            inputRef={register}
          />

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
          {errors.register_email && (
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

          <Button variant="contained" type="submit">
            Cadastrar
          </Button>
        </Stack>
      </form>
    )
  }

  const renderLogin = () => {
    return (
      <form onSubmit={handleSubmit(onSubmitLogin)} className={scss.loginFormContainer}>
        <Stack spacing={2}>
          <Typography variant="h3" component="div">
            Faça login
          </Typography>

          <TextField
            required
            name="username"
            label="login de usuário"
            type="text"
           variant="outlined"
           inputRef={register}
            // inputRef={register({
            //   pattern: {
            //     value: MAIL_REGEX,
            //     message: 'Insira um E-mail válido',
            //   },
            // })}

          // TODO: Verificar a possibilidade de um input que receba email ou nome de usuário.
          // TODO: Foi alterado para username no input, porque a API não está logando com email.
          // inputRef={register({
          //   pattern: {
          //     value: MAIL_REGEX,
          //     message: 'Insira um E-mail válido',
          //   },
          // })}
          />
          {errors.email && (
            <div className={scss.errorMessage}>Insira um E-mail válido</div>
          )}
          <TextField
            required
            name="password"
            label="Senha"
            type="password"
            variant="outlined"
            inputRef={register}
          />

          <Button variant="contained" type="submit">
            Entrar
          </Button>
        </Stack>
      </form>
    )
  }

  const renderForm = () => (
    <>
    {isLogin ? (renderLogin()) : (renderRegister())}
    <div className={scss.changeStepButton}>
      <Button onClick={handleLoginOrRegisterClick} variant="text" type="submit">
        {isLogin ? "Cadastrar nova conta" : "Já cadastrado? Login"}
      </Button>

      {isLogin && <Button variant="text">Esqueci minha senha</Button>}
    </div>
    </>
    );
  const renderUserInfo = () => {
    return(
    <div>
      {/* <h2>Bem vindo {dataUser?.first_name}</h2> */}
      <Button variant="text" onClick={()=>onExit()}>
        Sair?
      </Button>
    </div>
  )};

  return (
    <>
      {renderToast()}
      <Drawer
        open={isLoginDrawerOpen}
        className={scss.drawer}
        onClose={onRequestClose}
        anchor={width > 720 ? 'right' : 'bottom'}
      >
        <Container className={scss.container}>
          <Button className={scss.closeButton} onClick={onRequestClose}>
            <CloseIcon sx={{ fontSize: 32 }} />
          </Button>
          {(isLogged ? (renderUserInfo()) : (renderForm()))}
        </Container>
      </Drawer>
    </>
  );
};

export default LoginDrawer;
