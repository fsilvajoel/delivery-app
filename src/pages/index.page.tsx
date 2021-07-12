import Head from 'next/head';

import TabCategories from './components/Tab';
import BannerIntro from './Delivery/BannerIntro';
import styles from './Home.module.scss';
import { server } from './mock.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>zeferino</title>
      </Head>
      <main className={styles.main}>
        <TabCategories
          food={server?.categories}
          // drink={server?.categories}
        />
        <BannerIntro />
      </main>
    </div>
  );
}
