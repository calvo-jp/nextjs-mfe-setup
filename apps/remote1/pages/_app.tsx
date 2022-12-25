import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { apolloClient } from "@mfe/common";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to remote1!</title>
      </Head>

      <SessionProvider
        session={session}
        refetchOnWindowFocus
        refetchInterval={15}
      >
        <ApolloProvider client={apolloClient}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </ApolloProvider>
      </SessionProvider>
    </>
  );
}
