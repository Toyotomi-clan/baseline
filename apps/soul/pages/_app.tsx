import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Layout from "../Components/layout/layout";
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools";


export const queryCache = new QueryCache({
})
export const queryClient = new QueryClient({
  queryCache: queryCache,
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: 30000,
      retry: 3
    }
  }
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <QueryClientProvider client={queryClient}>

        <Layout >
          <Component {...pageProps} />
        </Layout>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
}
