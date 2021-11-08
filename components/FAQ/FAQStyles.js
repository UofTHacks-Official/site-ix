import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  min-height: 100%;
  width: 100%;
`;

export const FAQList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: auto;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Header = styled.h1`
  text-align: center;
`;
