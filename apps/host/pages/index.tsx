import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>Welcome to host!</title>
      </Head>

      <Box p={4}>
        <Text>
          Hello from <strong>Host!</strong>
        </Text>

        <Box mt={8}>
          <UnorderedList>
            <ListItem>
              <Link href="/page1">Remote page 1</Link>
            </ListItem>
            <ListItem>
              <Link href="/page2">Remote page 2</Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
}
