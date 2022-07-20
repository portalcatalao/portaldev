import Head from "next/head";

import Banner from "../components/Banner";
import Cases from "../components/Cases";
import Company from "../components/Company";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Technologies from "../components/Technologies";
import Testimonials from "../components/Testimonials";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal Dev</title>
      </Head>
      <main>
        <Banner />
        <Company />
        <Partners />
        <Cases />
        <Technologies />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
