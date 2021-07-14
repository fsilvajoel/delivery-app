import Head from 'next/head';

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
          <BannerIntro />
        </main>
      </div>
    </>
  );
}
