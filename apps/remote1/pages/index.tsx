import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import {
  apolloClient,
  CountriesDocument,
  CountriesQuery,
  CountriesQueryVariables,
} from "@mfe/common";
import Head from "next/head";
import Link from "next/link";

export default function Index({ countries }: CountriesQuery) {
  return (
    <>
      <Head>
        <title>{`Countries (${countries.length})`}</title>
      </Head>

      <Box p={4}>
        <UnorderedList>
          {countries.map(({ code, name }) => (
            <ListItem key={code}>
              <Link href={`/${code}`}>{name}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

Index.getInitialProps = async () => {
  const { data } = await apolloClient.query<
    CountriesQuery,
    CountriesQueryVariables
  >({
    query: CountriesDocument,
  });

  return { ...data };
};
