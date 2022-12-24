import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import introspection from './introspection';

const link = new HttpLink({
  uri: 'https://countries.trevorblades.com/',
});

const cache = new InMemoryCache({
  possibleTypes: introspection.possibleTypes,
  addTypename: true,
});

const client = new ApolloClient({
  link,
  cache,
});

export default client;
