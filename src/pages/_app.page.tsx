import { Router } from 'next/router';

import { useEffect } from 'react';
import '~styles/globals.scss';

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      //
    });

    Router.events.on('routeChangeComplete', () => {
      //
    });
  }, []);

  return <Component {...pageProps} />;
}

export default App;
