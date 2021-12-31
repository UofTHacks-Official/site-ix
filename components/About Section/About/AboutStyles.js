import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  min-width: 100%;
  flex: 1;
  /* padding-top: 8.85vh; */
  color: white;
`;

export const Link = styled.a`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 1.02rem;
  line-height: 22px;
  text-decoration: none;

  color: #4582c3;
  transition: color 0.2s;

  &:hover {
    transition: color 0.2s;
    color: #265587;
  }
`;
