import Head from 'next/head';

import TabCategories from './components/Tab';
import styles from './Home.module.scss';

const server = {
  name: 'Comida',
  image: 'https://i.picsum.photos/id/259/200/300.jpg',
  categories: [
    {
      image: 'https://i.picsum.photos/id/259/200/300.jpg',
      name: 'Comidas',
      slug: 'comidas',
      products: [
        {
          name: 'Temaki Filadelfia',
          slug: 'temaki-filadelfia',
          description: 'Temaki com tal tal tal e isso e aquilo',
          obs: 'não vem com moio shoiu',
          price: '30.00',
          image: 'https://i.picsum.photos/id/259/200/300.jpg',
          flavors: [
            {
              name: 'Sem arroz',
              sizes: [
                {
                  size: 'normal',
                  value: '3.00',
                },
              ],
            },
          ],
        },
        {
          name: 'Uramaki Pokemon',
          slug: 'UramakiPokemon',
          description:
            'Arroz, alga nori, creeam cheese, gergelim, salmão grelado e doritos®\r\n10 unidades',
          obs: '10 unidades',
          price: '18.50',
          image:
            'https://delivery.growtechnologies.com.br/media/groups/Uramaki_Pokemon.jpg',
          flavors: [
            {
              name: 'Tradicional',
              sizes: [
                {
                  size: 'Normal',
                  value: 0,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>zeferino</title>
      </Head>
      <main className={styles.main}>
        <h2>IDNEXXX</h2>
        <TabCategories
          food={server?.categories}
          // drink={server?.categories}
        />
      </main>
    </div>
  );
}
