import Head from 'next/head';

import { Button } from '@mui/material';

import BannerIntro from './Delivery/BannerIntro';
import styles from './Home.module.scss';

const mailConfirmation = () => {
  return (
    <>
      <Head>
        <title>Zeferino Alimentos</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <BannerIntro />
          <h2 className={styles.mailConfirmationTitle}>
            Seu email foi confirmado
          </h2>
          <p className={styles.mailConfirmationsubtitle}>
            Voltar a pagina inicial?
          </p>
          <Button href="/" variant="outlined" className={styles.buttonSeeMore}>
            Início
          </Button>
        </main>
      </div>
    </>
  );
};

export default mailConfirmation;
