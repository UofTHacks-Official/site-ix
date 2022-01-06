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
  MentorLink,
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
          rel="noopener"
          target="_blank"
        >
          Apply Now
        </ApplyBtn>
        <MentorLink href="https://8q5bjocsvwr.typeform.com/to/U9H30gMe">
          or apply to be a mentor here!
        </MentorLink>
        <SponsorLink href="mailto:sponsors@uofthacks.com">
          Interested in sponsoring?
        </SponsorLink>
      </Content>
    </Wrapper>
  );
};
export default Hero;
