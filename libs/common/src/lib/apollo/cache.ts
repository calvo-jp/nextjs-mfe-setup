import { InMemoryCache } from "@apollo/client";
import introspection from "../introspection";

const cache = new InMemoryCache({
  possibleTypes: introspection.possibleTypes,
  addTypename: true,
});

export default cache;
