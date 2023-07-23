import { SWRConfig } from "swr";
import "../global.css";
import Nav from "../components/Nav";

export default function App({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((response) => response.json())
      }}
    >

      <Nav />
      <Component {...pageProps} />

    </SWRConfig>
  );
}
