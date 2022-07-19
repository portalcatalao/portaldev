import { AppProps } from "next/app";
import Header from "../components/Header";

import "../../styles/global.scss";
import Banner from "../components/Banner";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
