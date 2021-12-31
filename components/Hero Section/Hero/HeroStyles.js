import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #f9f9f9 0%, #a4e0ff 100%);
  z-index: 0;
`;

export const Wrapper2 = styled.main`
  display: block;
  width: 100%;
  min-height: 100%;
`;

export const ContentWrapper = styled.article`
  position: relative;
  flex: 1;
  padding-top: 11vh;
  min-height: 100vh;
  min-width: 100%;
  /* background-color: red; */
  z-index: 4;
`;

export const Content = styled.section`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;
  /* margin: 11.76vh auto auto; */
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
  font-weight: normal !important;
  color: #f573a0;
  font-size: 1.75rem;
  margin: 5px 0;
  z-index: 4;
`;
export const Date = styled.p`
  font-family: "Proxima Nova";
  font-weight: normal !important;
  color: #242424;
  font-size: 1.225rem;
  margin: 5px 0;
  z-index: 4;
`;
export const ApplyBtn = styled.button`
  font-family: "Proxima Nova";
  font-weight: bold !important;
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
  font-family: "Proxima Nova";
  font-weight: normal !important;
  font-size: 1.225rem;
  /* color: #4582c3; */
  color: #4582c3;
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
  bottom: -50%;
`;
export const Layer2 = styled(Layers)`
  transform: translateZ(-50px) scale(2);
  /* height: 20%; */
  z-index: 0;
  bottom: -23%;
`;
export const Layer3 = styled(Layers)`
  transform: translateZ(-20px) scale(1.4);
  /* height: 30%; */
  bottom: -10%;
  z-index: 0;
`;
export const Layer4 = styled(Layers)`
  transform: translateZ(0px) scale(1);
  z-index: 0;
`;

export const Cover = styled.section`
  background: #171c28;
  display: block;
  position: relative;
  top: 99%;
  min-height: 100vh;
  z-index: 3;
`;
export const LayerCover = styled.section`
  display: block;
  position: absolute;
  top: 99%;
  left: 0;
  right: 0;
  min-height: 100vh;
  z-index: 3;
  background-color: #171c28;
`;

export const Layer1Cover = styled.section`
  display: block;
  position: absolute;
  top: 99%;
  left: 0;
  right: 0;
  min-height: 100vh;
  z-index: 3;
  background-color: #7fb9d3;
`;
export const Layer2Cover = styled(Layer1Cover)`
  /* min-height: 60vh; */
  top: 96%;
  background-color: #4f91b3;
`;

export const Layer3Cover = styled(Layer1Cover)`
  /* min-height: 50vh; */
  top: 98%;
  background-color: #182e47;
`;
