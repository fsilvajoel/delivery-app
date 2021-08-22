import Head from 'next/head';

import { useCallback } from 'react';

import { Container, Grid } from '@material-ui/core';
import CardProduct from '~components/CardProduct/CardProduct';
import CarrrouselCategories from '~components/CarouselCategories/CarouselCategories';
import MenuApp from '~components/Layout/Menu/Menu';
import { useAllProducts } from '~hooks/query/useProducts';
import { useProductStore } from '~hooks/store/useProductStore';

import BannerIntro from './Delivery/BannerIntro';
import styles from './Home.module.scss';

export default function Home() {
  const products = useAllProducts();
  const selectedProduct = useProductStore((state) => state.currentCategory);

  const showProductFilter = useCallback(() => {
    return products
      .filter(
        (category: { category: number }) =>
          category.category === selectedProduct
      )
      .map((product: any) => (
        <Grid item md={4} sm={6} xs={12}>
          <CardProduct data={product} />
        </Grid>
      ));
  }, [selectedProduct, products]);

  return (
    <>
      <Head>
        <title>zeferino</title>
      </Head>
      <MenuApp />
      <div className={styles.container}>
        <main className={styles.main}>
          <CarrrouselCategories />
          <Container maxWidth="md">
            {selectedProduct !== -1 ? (
              <Grid container spacing={4}>
                {showProductFilter()}
              </Grid>
            ) : (
              <BannerIntro />
            )}
          </Container>
        </main>
      </div>
    </>
  );
}
