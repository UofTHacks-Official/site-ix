import Image from "next/image";
import About from "../../About Section/About/About";
import FAQ from "../../FAQ Section/FAQ/FAQ";
import Logo from "../../Shared/Logo";
import Art0 from "/public/static/New0.svg";
import Art1 from "/public/static/New1.svg";
import Art2 from "/public/static/New2.svg";
import Art3 from "/public/static/New3.svg";
import Art4 from "/public/static/New4.svg";
import {
  Wrapper,
  Content,
  LogoContainer,
  Title,
  SubTitle,
  Date,
  ApplyBtn,
  SponsorLink,
  Parallax,
  Layer0,
  Layer1,
  Layer2,
  Layer3,
  Layer4,
  Cover,
  LayerCover,
  Layer1Cover,
  Layer2Cover,
  Layer3Cover,
  ContentWrapper,
  Wrapper2,
  Star,
} from "./HeroStyles";

const Hero = () => {
  return (
    <Wrapper>
      <Parallax>
        <Layer0>
          <Image src={Art0} layout="responsive" priority />
        </Layer0>
        <Layer1>
          <Image src={Art1} layout="responsive" priority />
          <Layer1Cover />
        </Layer1>
        <Layer2>
          <Image src={Art2} layout="responsive" priority />
          <Layer2Cover />
        </Layer2>
        <Layer3>
          <Image src={Art3} layout="responsive" priority />
          <Layer3Cover />
        </Layer3>
        <Layer4>
          <Image src={Art4} layout="responsive" priority />
          <LayerCover />
        </Layer4>
        <Wrapper2>
          <ContentWrapper>
            <Content>
              <LogoContainer>
                <Logo />
              </LogoContainer>
              <Title>UofTHacks IX</Title>
              <SubTitle>
                Dream <Star>✦</Star> Build <Star>✦</Star> Inspire
              </SubTitle>
              <Date>February 4th-6th, 2022</Date>
              <ApplyBtn>Apply Now</ApplyBtn>
              <SponsorLink href="mailto:contact@uofthacks.com">
                Interested in sponsoring?
              </SponsorLink>
            </Content>
          </ContentWrapper>
          <Cover>
            <About />
            <FAQ />
          </Cover>
        </Wrapper2>
      </Parallax>
    </Wrapper>
  );
};
export default Hero;
