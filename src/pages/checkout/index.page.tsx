import Router from 'next/router';

import { useEffect, useState } from 'react';

// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Navbar from '../../Components/Layout/Navbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import MenuApp from '~components/Layout/Menu/Menu';

import { useLoginStore } from '~hooks/store/UseLoginStore';

import scss from './Checkout.module.scss';
import CheckoutList from './components/CheckoutList';
import DeliveryMethod from './DeliveryMethod';
import Finished from './Finished';
import Review from './Review';

const steps = ['Complementos', 'Revisão do pedido', 'Finalizar'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <CheckoutList />;
    case 1:
      return <DeliveryMethod />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}
export default function Checkout() {
  const isLogged = useLoginStore((state) => state.isLogged);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  useEffect(() => {
    if (!isLogged) {
      Router.push('/login');
    }
  }, [isLogged]);

  return (
    <main className={scss.layout}>
      <MenuApp />
      <div className={scss.container}>
        <Typography
          align="center"
          component="h1"
          variant="h4"
          className={scss.title}
        >
          Finalizar Pedido
        </Typography>
        <Paper className={scss.paper}>
          <Stepper activeStep={activeStep} className={scss.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <Finished />
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={scss.buttons}>
                  {activeStep !== 0 && (
                    <Button className={scss.button} onClick={handleBack}>
                      Voltar
                    </Button>
                  )}
                  <Button
                    className={scss.button}
                    onClick={handleNext}
                    variant="contained"
                  >
                    {activeStep === steps.length - 1
                      ? 'Confirmar Pedido'
                      : 'Avançar'}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
      </div>
    </main>
  );
}
