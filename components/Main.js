import styled from "styled-components";
import Mountains from "./Other/Mountains/Mountains";
import Content from "./Content/Content";

const Parallax = styled.section`
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

const Main = () => {
  return (
    <Parallax>
      <Mountains />
      <Content />
    </Parallax>
  );
};

export default Main;
