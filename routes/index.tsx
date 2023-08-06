import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import Counter from "../islands/Counter.tsx";
import { Chart } from "$fresh_charts/mod.ts";
import { ChartColors, transparentize } from "$fresh_charts/utils.ts";
import Scroll from "../islands/Scroll.tsx";

export default function Home() {
  const count = useSignal(3);
  const selected = useSignal(null);
  const input = useRef(null);

  useEffect(() => {
    console.log(input);
  });

  return (
    <>
      <Head>
        <title>fresh-project</title>
      </Head>
      <Scroll />
    </>
  );
}
