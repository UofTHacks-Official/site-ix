import Divider from "../../Shared/Divider/Divider";
import Image from "next/image";
import FooterDivider from "/public/static/FooterDivider.svg";
import styled from "styled-components";

const Wrapper = styled.footer`
  font-family: "Proxima Nova";
  background-color: #f9f9f9;
  font-weight: normal !important;
  margin: 0;
  height: auto;
  margin-bottom: -1%;
  padding: 0;
  padding-top: 2rem;
  overflow: hidden;
`;

// const DividerWrapper = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   overflow: hidden;
//   line-height: 0;
//   margin: 0;
//   padding: 0;
//   background-color: #f9f9f9;
// `;
const Cover = styled.div`
  margin-top: -0.6%;
  margin-bottom: 0;
  padding: 2.5rem 2rem;
  background-color: #171c28;
  font-size: 1.2rem;
  color: #ffffff;
`;

const First_Container = styled.div`
  & ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }
  & a {
    font-family: "Filson Pro";
    color: #a0c3d2;
    text-decoration: none;
    font-size: 1rem;
  }
  & a:hover {
    color: #d4d4d4;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      {/* <DividerWrapper> */}
      <Image src={FooterDivider} layout="responsive" priority />
      {/* </DividerWrapper> */}
      <Cover>
        <First_Container>
          <span>Made with 💗 by the Design and Web Dev Team</span>
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="">MLH Code of Conduct</a>
            </li>
            <li>
              <a href="">2021 Site</a>
            </li>
          </ul>
        </First_Container>
      </Cover>
    </Wrapper>
  );
};

export default Footer;
