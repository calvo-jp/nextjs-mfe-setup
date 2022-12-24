import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const RemotePage = dynamic(() => import('remote1/pages/index'), {
  suspense: true,
});

export default function Page1() {
  return (
    <Suspense fallback={<Box p={2}>Loading...</Box>}>
      <RemotePage />
    </Suspense>
  );
}
