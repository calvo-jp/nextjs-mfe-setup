import { Box } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CountriesPage = dynamic(() => import("remote1/pages/index"), {
  suspense: true,
});

export default function Countries() {
  return (
    <Suspense
      fallback={
        <Box padding={4} fontSize="sm">
          Loading...
        </Box>
      }
    >
      <CountriesPage />
    </Suspense>
  );
}
