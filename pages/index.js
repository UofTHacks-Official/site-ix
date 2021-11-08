import FAQ from "../components/FAQ/FAQ";
import styled from "styled-components";

const Wrapper = styled.main`
  display: block;
  height: 100%;
  width: 100%;
`;

// Going to separate into different components after
const Home = () => {
  return (
    <Wrapper>
      <div>
        <h1>UofTHacks IX</h1>
        <p>Site is under construction...</p>
        <form>
          <input type="email" placeholder="email address" />
          <input type="submit" />
        </form>
        <a href="">Thinking of becoming a sponsor?</a>
      </div>
      <div>Sponsor Section</div>
      <FAQ />
    </Wrapper>
  );
};
export default Home;
