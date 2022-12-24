import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Welcome to remote1!</title>
      </Head>

      <Box p={4}>
        <Text>
          Hello from <strong>Remote1!</strong>
        </Text>
      </Box>
    </>
  );
}
