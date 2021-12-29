import Head from "next/head";
import FAQ from "../components/FAQ Section/FAQ/FAQ";
import Hero from "../components/Hero Section/Hero/Hero";
import About from "../components/About Section/About/About";
import styled from "styled-components";

const Wrapper = styled.main``;

// Going to separate into different components after
const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>UofTHacks IX</title>
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
