import { ChakraProvider } from "@chakra-ui/react";
import { GraphQLProvider } from "@mfe/common";
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
        <GraphQLProvider>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </GraphQLProvider>
      </SessionProvider>
    </>
  );
}
