import { Box } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CountryPage = dynamic(() => import("remote2/pages/[code]"), {
  suspense: true,
});

export default function Country() {
  return (
    <Suspense
      fallback={
        <Box padding={4} fontSize="sm">
          Loading...
        </Box>
      }
    >
      <CountryPage />
    </Suspense>
  );
}
