import { createGlobalStyle, ThemeProvider } from "styled-components";
import Font from "../components/Font";
import "../styles.css";

const GlobalStyle = createGlobalStyle`
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
  font-family: "ProximaNova", sans-serif;
  color: #242424;
  font-style: normal;
  height: 100vh;
  width: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "FilsonPro";
  font-style: normal;
  font-weight: 500;
}
p, span {
  font-family: "ProximaNova";
  font-style: normal;
  font-weight: normal;
}

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

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Font />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}

export default MyApp;
