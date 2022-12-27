import { Box, Code } from "@chakra-ui/react";
import { useCountryQuery } from "@mfe/common";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const code = router.query.code?.toString();

  const { data } = useCountryQuery({
    skip: !code,
    variables: {
      code,
    },
  });

  return (
    <>
      <Head>
        <title>{data?.country.name}</title>
      </Head>

      <Box p={4}>
        <pre>
          <Code p={8} w="full">
            {JSON.stringify(data?.country, null, 2)}
          </Code>
        </pre>
      </Box>
    </>
  );
}
