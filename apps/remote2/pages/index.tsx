import dynamic from "next/dynamic";
import { Suspense } from "react";

const Countries = dynamic(() => import("remote1/countries"), {});

export default function Index() {
  return (
    <Suspense fallback="Loading...">
      <Countries />
    </Suspense>
  );
}
