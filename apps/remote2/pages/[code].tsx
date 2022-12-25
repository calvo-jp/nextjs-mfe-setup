import { Box, Code } from "@chakra-ui/react";
import {
  apolloClient,
  CountryDocument,
  CountryQuery,
  CountryQueryVariables,
} from "@mfe/common";
import { Error404 } from "@mfe/components";
import { NextPageContext } from "next";
import Head from "next/head";

type Props = {
  country: CountryQuery["country"];
};

export default function Index(props: Props) {
  if (!props.country) return <Error404 />;

  return (
    <>
      <Head>
        <title>{props.country.name}</title>
      </Head>

      <Box p={4}>
        <pre>
          <Code p={8} w="full">
            {JSON.stringify(props.country, null, 2)}
          </Code>
        </pre>
      </Box>
    </>
  );
}

Index.getInitialProps = async ({ query }: NextPageContext): Promise<Props> => {
  const { code } = { code: "", ...query };
  const { data } = await apolloClient.query<
    CountryQuery,
    CountryQueryVariables
  >({
    query: CountryDocument,
    variables: { code },
  });

  const { country } = data;
  return { country };
};
