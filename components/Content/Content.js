import About from "./About/About";
import FAQ from "./FAQ/FAQ";
import Hero from "./Hero/Hero";

import { Wrapper, Cover } from "./ContentStyles";

const Content = () => {
  return (
    <Wrapper>
      <Hero />
      <Cover>
        <About />
        <FAQ />
      </Cover>
    </Wrapper>
  );
};
export default Content;
