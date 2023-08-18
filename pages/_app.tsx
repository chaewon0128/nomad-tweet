import { SWRConfig } from "swr";
import "../global.css";
import Nav from "../components/Nav";
import Head from "next/head";

export default function App({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((response) => response.json())
      }}
    >
      <Head> <title>Tweety</title></Head>
      <Nav />
      <Component {...pageProps} />

    </SWRConfig>
  );
}
