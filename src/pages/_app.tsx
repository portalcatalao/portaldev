import { AppProps } from "next/app";
import Header from "../components/Header";

import "../../styles/global.scss";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
