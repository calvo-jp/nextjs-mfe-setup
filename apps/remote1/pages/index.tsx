import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { useCountriesQuery } from "@mfe/common";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
  const { data } = useCountriesQuery();

  return (
    <>
      <Head>
        <title>{`Countries (${data?.countries?.length ?? 0})`}</title>
      </Head>

      <Box p={4}>
        <UnorderedList>
          {data?.countries?.map(({ code, name }) => (
            <ListItem key={code}>
              <Link href={`/${code}`}>{name}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}
