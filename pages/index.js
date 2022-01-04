import Head from "next/head";
import styled from "styled-components";
import Main from "../components/Main";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #f9f9f9 0%, #a4e0ff 100%);
  z-index: 0;
`;

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>UofTHacks IX</title>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta
          name="description"
          content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
        />
        <meta name="keywords" content="UofTHacks, UofT, Hackathon" />
        <meta name="author" content="UofTHacks" />
        <meta property="og:title" content="UofTHacks IX" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.uofthacks.com/" />
        <meta property="og:image" content="/meta-img.png" />
      </Head>
      {/* Navigation Component Here */}
      <Main />
      {/* Footer Component Here */}
    </Wrapper>
  );
};
export default Home;
