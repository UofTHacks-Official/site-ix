import Head from "next/head";
import Hero from "../components/Hero Section/Hero/Hero";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'ProximaNova-Regular';
    src: url('/fonts/ProximaNova-Regular.otf') format('opentype');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'ProximaNovaAlt-Bold';
    src: url('/fonts/ProximaNova-Bold.otf') format('opentype');
    font-style: bold;
    font-display: swap;
  }
`;
// Going to separate into different components after
const Home = () => {
  return (
    <main>
      <GlobalStyle />
      <Head>
        <title>UofTHacks IX Dev</title>
      </Head>
      <Hero />
    </main>
  );
};
export default Home;
