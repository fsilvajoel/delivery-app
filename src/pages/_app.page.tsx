import { Router } from 'next/router';

import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'fontsource-roboto';
import '~styles/globals.scss';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      //
    });

    Router.events.on('routeChangeComplete', () => {
      //
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}

export default App;
