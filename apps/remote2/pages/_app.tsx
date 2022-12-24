import { ChakraProvider } from "@chakra-ui/react";
import { GraphQLProvider } from "@mfe/graphql";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GraphQLProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </GraphQLProvider>
  );
}
