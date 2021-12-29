import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
  font-family: "FilsonPro";
  src: url("/fonts/FilsonPro/FilsonProMedium.otf") format("opentype");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "ProximaNova";
  src: url("/fonts/ProximaNova/ProximaNova-Regular.otf") format("opentype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: "ProximaNova";
  src: url("/fonts/ProximaNova/ProximaNovaAlt-Bold.otf") format("opentype");
  font-style: normal;
  font-weight: bold;
  font-display: swap;
}
`;
