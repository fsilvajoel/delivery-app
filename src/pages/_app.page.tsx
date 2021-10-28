import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'fontsource-roboto';
import '~styles/globals.scss';
import { ReactQueryDevtools } from 'react-query/devtools';

import { parseCookies } from 'nookies';
import { instance } from '~services/Api/http';

import { setIsLogged } from '~hooks/store/UseLoginStore';
// import { setDeliveryMethod } from '~hooks/store/UsePartnerStore';

const queryClient = new QueryClient();
function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  const { 'deliveryApp-accessToken': token } = parseCookies();
  useEffect(() => {
    if (token) {
      setIsLogged(true);
    }
    if (token) {
      instance.defaults.headers.Authorization = `Token ${token}`;
    }
  }, [token]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}

export default App;
