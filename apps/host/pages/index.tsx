import { Box } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CountriesPage = dynamic(() => import("remote1/countries"), {
  ssr: false,
  loading() {
    return (
      <Box padding={4} fontSize="sm">
        Loading...
      </Box>
    );
  },
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
