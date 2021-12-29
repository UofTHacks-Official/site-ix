import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #f9f9f9 0%, #a4e0ff 100%);
  z-index: 0;
`;
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;
  margin: 11.77vh auto auto auto;
  z-index: 4;
`;
export const LogoContainer = styled.div`
  max-width: 16.56rem;
  z-index: 4;
`;
export const Title = styled.h1`
  font-family: "Filson Pro";
  font-weight: normal !important;
  font-size: 3rem;
  color: #242424;
  margin: 5px 0;
  z-index: 4;
`;
export const SubTitle = styled.p`
  font-family: "Proxima Nova";
  color: #ffc564;
  font-size: 1.75rem;
  margin: 5px 0;
  z-index: 4;
`;
export const Date = styled.p`
  font-family: "Proxima Nova";
  color: #242424;
  font-size: 1.225rem;
  margin: 5px 0;
  z-index: 4;
`;
export const ApplyBtn = styled.button`
  font-weight: bold;
  background-color: #4582c3;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.35rem;
  padding: 0.6rem 5.5rem;
  transition: all 0.2s;
  margin: 15px 0;
  z-index: 4;

  &:hover {
    transition: all 0.2s;
    cursor: pointer;
    background-color: #2d65a0;
  }
`;
export const SponsorLink = styled.a`
  font-size: 1.225rem;
  color: #4582c3;
  /* color: #242424; */
  text-decoration: none;
  z-index: 4;
  transition: all 0.2s;
  &:hover {
    transition: all 0.2s;
    color: #2d65a0;
    /* color: black; */
  }
`;

export const Parallax = styled.div`
  position: absolute;
  background: linear-gradient(180deg, #f9f9f9 0%, #a4e0ff 100%);
  perspective: 100px;
  left: 0;
  bottom: 0;
  height: 100%;
  min-width: 100vw;
  z-index: 4;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Layers = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
  min-width: 100vw;
`;

export const Layer0 = styled(Layers)`
  transform: translateZ(-200px) scale(3);
  z-index: 0;
`;
export const Layer1 = styled(Layers)`
  /* height: 30%; */
  transform: translateZ(-150px) scale(2.5);
  z-index: 0;
  left: -1%;
  bottom: -30%;
`;
export const Layer2 = styled(Layers)`
  transform: translateZ(-50px) scale(2);
  /* height: 20%; */
  z-index: 0;
  bottom: -10%;
`;
export const Layer3 = styled(Layers)`
  transform: translateZ(-20px) scale(1.4);
  /* height: 30%; */
  z-index: 0;
`;
export const Layer4 = styled(Layers)`
  transform: translateZ(0px) scale(1);
  z-index: 0;
`;

export const Cover = styled.section`
  background: #171c28;
  display: block;
  position: absolute;
  top: 99%;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 3;
`;

export const Layer1Cover = styled(Cover)`
  background-color: #7fb9d3;
`;
export const Layer2Cover = styled(Cover)`
  background-color: #4f91b3;
`;

export const Layer3Cover = styled(Cover)`
  background-color: #182e47;
`;
