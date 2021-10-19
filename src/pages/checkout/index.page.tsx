import Router from 'next/router';

import { useEffect, useState } from 'react';

// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Navbar from '../../Components/Layout/Navbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';
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
