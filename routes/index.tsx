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
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="renderer" content="webkit" />
        <meta name="force-rendering" content="webkit" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <title>fresh-project</title>
      </Head>
      <Scroll />
    </>
  );
}
