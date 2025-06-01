import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

