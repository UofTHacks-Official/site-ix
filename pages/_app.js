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
  height: 100vh;
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

h1, h2, h3, h4, h5, h6 {
  font-family: "Filson Pro";
  font-style: normal;
  font-weight: 500;
}
p, span {
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Filson Pro";
  src: url("/fonts/Filson Pro/FilsonProMedium.otf");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Proxima Nova";
  src: url("/fonts/Proxima Nova/ProximaNova-Regular.otf");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: "Proxima Nova";
  src: url("/fonts/Proxima Nova/ProximaNovaAlt-Bold.otf");
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
