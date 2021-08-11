import Head from 'next/head';

import { Key, useEffect, useState } from 'react';

import { Container, Grid } from '@material-ui/core';
import CardProduct from '~components/CardProduct/CardProduct';
import CarrrouselCategories from '~components/CarouselCategories/CarouselCategories';
import MenuApp from '~components/Layout/Menu/Menu';
import { useAllProducts } from '~hooks/useProducts';
import { useProductStore } from '~hooks/useProductStore';

import BannerIntro from './Delivery/BannerIntro';
import styles from './Home.module.scss';

export default function Home() {
  // const [showCategory, setshowCategory] = useState(false);
  const [productsInCurrentCategory, setProductsInCurrentCategory] = useState(); // jogar para zustand
  const products = useAllProducts();
  const selectedProduct = useProductStore((state) => state.currentCategory);
  console.log('produtos', products);
  // console.log('selectedProduct', selectedProduct);

  // function handleShowProduct() {
  //   setProductsInCurrentCategory(
  //     products.filter(
  //       (category: { slug: string }) => category.slug === selectedProduct
  //     )
  //   );
  // }

  // useEffect(() => {
  //   // atualizar quando receber dado novo de categoria selecionada
  //   // recieveAllProducts();
  //   handleShowProduct();
  //   // recieveAllAdressData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedProduct]);

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
            {/* {showProducts.length !== undefined ? ( */}
            <Grid container spacing={4}>
              {products !== 'loading' && (
                <>
                  {products?.map(() => (
                    <Grid item md={4} sm={6} xs={12}>
                      <CardProduct />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
            {/* ) : (
              <BannerIntro />
            )} */}
            {/* <Grid container spacing={4}>
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </Grid> */}
          </Container>
          <BannerIntro />
        </main>
      </div>
    </>
  );
}
