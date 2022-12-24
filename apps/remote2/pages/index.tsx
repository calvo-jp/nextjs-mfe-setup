import { Box, Text } from '@chakra-ui/react';
import { Table } from '@mfe/ui';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Welcome to remote2!</title>
      </Head>

      <Box p={4}>
        <Text>
          Hello from <strong>Remote2!</strong>
        </Text>

        <Table />
      </Box>
    </>
  );
}
