import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
  font-family: "Filson Pro";
  src: url("/fonts/FilsonProMedium.otf");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Proxima Nova";
  src: url("/fonts/ProximaNova-Regular.otf");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: "Proxima Nova";
  src: url("/fonts/ProximaNovaAlt-Bold.otf");
  font-style: normal;
  font-weight: bold;
  font-display: swap;
}
`;
