import { asset, Head } from "$fresh/runtime.ts";
import { Navbar2 } from "../islands/Navbar2.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link href={asset("/build.css")} rel="stylesheet" type="text/css" />
      </Head>
      <Navbar2 />
      <Component />
    </>
  );
}
