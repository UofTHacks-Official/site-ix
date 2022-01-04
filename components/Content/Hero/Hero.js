import Logo from "../../Shared/Logo";

import {
  Wrapper,
  Content,
  LogoContainer,
  Title,
  SubTitle,
  Date,
  ApplyBtn,
  SponsorLink,
  Star,
} from "./HeroStyles";

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Title>UofTHacks IX</Title>
        <SubTitle>
          Dream <Star>✦</Star> Build <Star>✦</Star> Inspire
        </SubTitle>
        <Date>February 4th-6th, 2022</Date>
        <ApplyBtn
          href="https://8q5bjocsvwr.typeform.com/to/F5xSzpYg"
          target="_blank"
        >
          Apply Now
        </ApplyBtn>
        <SponsorLink href="mailto:contact@uofthacks.com">
          Interested in sponsoring?
        </SponsorLink>
      </Content>
    </Wrapper>
  );
};
export default Hero;
