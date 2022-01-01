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
        <title>UofTHacks IX Dev</title>
      </Head>
      {/* Navigation Component Here */}
      <Main />
      {/* Footer Component Here */}
    </Wrapper>
  );
};
export default Home;
