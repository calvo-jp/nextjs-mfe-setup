import { from, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getSession } from "next-auth/react";
import constants from "../constants";

const auth = setContext(async (_, { headers }) => {
  const session = await getSession();

  if (!session) return { headers };

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${session.token}`,
    },
  };
});

const http = new HttpLink({
  uri: constants.GRAPHQL_ENDPOINT,
});

const link = from([auth, http]);

export default link;
