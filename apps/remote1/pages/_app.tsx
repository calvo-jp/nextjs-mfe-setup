import { ChakraProvider } from '@chakra-ui/react';
import { GraphQLProvider } from '@mfe/graphql';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to remote1!</title>
      </Head>

      <GraphQLProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </GraphQLProvider>
    </>
  );
}
