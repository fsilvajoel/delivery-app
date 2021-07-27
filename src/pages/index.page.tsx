import Head from 'next/head';

import { Container, Grid } from '@material-ui/core';
import CardProduct from '~components/CardProduct/CardProduct';
import MenuApp from '~components/Layout/Menu/Menu';

import TabCategories from './components/Tab';
import BannerIntro from './Delivery/BannerIntro';
import styles from './Home.module.scss';
import { server } from './mock.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>zeferino</title>
      </Head>
      <MenuApp />
      <div className={styles.container}>
        <main className={styles.main}>
          <TabCategories
            food={server?.categories}
            // drink={server?.categories}
          />
          <Container maxWidth="md">
            <Grid container spacing={4}>
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </Grid>
          </Container>
          <BannerIntro />
        </main>
      </div>
    </>
  );
}
