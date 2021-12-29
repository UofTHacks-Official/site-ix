import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body{
    margin:0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body{
    padding: 0;
    margin: 0;
    font-family: "Proxima Nova", sans-serif;
    color: #242424;
    font-style: normal;
    height: 100vh;
    width: 100%;
  }
  @font-face {
    font-family: "Filson Pro";
    src: url("/fonts/FilsonProMedium.otf") format("opentype");
  }
`;
