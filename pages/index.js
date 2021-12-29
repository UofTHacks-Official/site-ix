import Head from "next/head";
import Hero from "../components/Hero Section/Hero/Hero";

// Going to separate into different components after
const Home = () => {
  return (
    <main>
      <Head>
        <title>UofTHacks IX Dev</title>
      </Head>
      <Hero />
    </main>
  );
};
export default Home;
