import { ChakraProvider } from "@chakra-ui/react";
import { GraphQLProvider } from "@mfe/common";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <GraphQLProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </GraphQLProvider>
    </SessionProvider>
  );
}
