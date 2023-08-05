import { asset, Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link href={asset("/build.css")} rel="stylesheet" type="text/css" />
      </Head>
      <Component />
    </>
  );
}
