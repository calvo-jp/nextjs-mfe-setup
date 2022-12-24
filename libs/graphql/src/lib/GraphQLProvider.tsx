import { ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";
import client from "./graphqlClient";

export default function Provider({ children }: PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
