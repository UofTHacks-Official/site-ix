import {
  Container,
  NavLinks,
  NavItem,
  LogoContainer,
  BannerContainer,
} from "./NavigationStyles";
import Logo from "../../Shared/Logo";
import Banner from "./Banner";

const Navigation = () => {
  return (
    <Container>
      <NavLinks>
        <li>
          <NavItem href="/">
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </NavItem>
        </li>
        <li>
          <NavItem href="#about">About</NavItem>
        </li>
        <li>
          <NavItem href="#sponsors">Sponsors</NavItem>
        </li>
        <li>
          <NavItem href="#faq">FAQ</NavItem>
        </li>
        <li>
          <NavItem href="mailto:contact@uofthacks.com">Contact</NavItem>
        </li>
      </NavLinks>
      <Banner />
    </Container>
  );
};
export default Navigation;
