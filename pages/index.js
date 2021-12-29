import Head from "next/head";
import FAQ from "../components/FAQ Section/FAQ/FAQ";
import Hero from "../components/Hero Section/Hero/Hero";
import About from "../components/About Section/About/About";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.main``;

// Going to separate into different components after
const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>UofTHacks IX</title>
        <link
          rel="preload"
          href="/fonts/FilsonPro/FilsonProMedium.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/ProximaNova/ProximaNova-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/ProximaNova/ProximaNovaAlt-Bold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: "FilsonPro";
          src: url("/fonts/FilsonPro/FilsonProMedium.otf") format("opentype");
          font-style: normal;
          font-weight: 500;
          font-display: swap;
        }

        @font-face {
          font-family: "ProximaNova";
          src: url("/fonts/ProximaNova/ProximaNova-Regular.otf")
            format("opentype");
          font-style: normal;
          font-weight: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "ProximaNova";
          src: url("/fonts/ProximaNova/ProximaNovaAlt-Bold.otf")
            format("opentype");
          font-style: normal;
          font-weight: bold;
          font-display: swap;
        }
      `}</style>
      <Hero />
      {/** About Section Component */}
      {/* <About /> */}
      {/** Previous Sponsor Section Component */}
      {/* <section>Sponsor Section</section> */}

      {/** FAQ Section Component */}
      {/* <FAQ /> */}
    </Wrapper>
  );
};
export default Home;
