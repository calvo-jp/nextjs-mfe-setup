import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Error 404</title>
      </Head>

      <Box>
        <Text>Page not found</Text>
      </Box>
    </>
  );
}
