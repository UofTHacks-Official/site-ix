import styled from "styled-components";

export const Wrapper = styled.footer`
  font-family: "Proxima Nova";
  background-color: #f9f9f9;
  font-weight: normal !important;
  margin: 0;
  height: auto;
  padding: 0;
  padding-top: 2rem;
  overflow: hidden;
`;

export const DividerWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
`;

export const Shape = styled.svg`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Cover = styled.div`
  margin-top: -0.6%;
  margin-bottom: 0;
  padding: 2.5rem 2rem;
  background-color: #171c28;
  font-size: 1.2rem;
  color: #ffffff;
`;

export const First_Container = styled.div`
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
