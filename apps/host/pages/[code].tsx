import { Box } from "@chakra-ui/layout";
import dynamic from "next/dynamic";

const CountryPage = dynamic(() => import("remote2/country"), {
  ssr: false,
  loading() {
    return (
      <Box padding={4} fontSize="sm">
        Loading...
      </Box>
    );
  },
});

export default function Country() {
  return <CountryPage />;
}
