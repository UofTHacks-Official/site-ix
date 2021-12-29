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
          href="/fonts/Filson Pro/FilsonProMedium.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Proxima Nova/ProximaNova-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Proxima Nova/ProximaNovaAlt-Bold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
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
