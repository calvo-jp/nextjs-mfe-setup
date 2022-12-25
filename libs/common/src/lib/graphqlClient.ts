import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getSession } from "next-auth/react";
import introspection from "./introspection";

const auth = setContext(async (_, { headers }) => {
  const session = await getSession();

  if (!session) return { headers };

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${session.accessToken}`,
    },
  };
});

const http = new HttpLink({
  uri: "https://countries.trevorblades.com/",
});

const link = from([auth, http]);

const cache = new InMemoryCache({
  possibleTypes: introspection.possibleTypes,
  addTypename: true,
});

const client = new ApolloClient({
  link,
  cache,
});

export default client;
