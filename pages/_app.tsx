import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isFirstview = router.pathname === "/" && pageProps.showFV;

  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

