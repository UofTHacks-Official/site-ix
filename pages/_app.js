import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'ProximaNova-Regular';
    src: url('/fonts/ProximaNova-Regular.otf') format('opentype');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'ProximaNovaAlt-Bold';
    src: url('/fonts/ProximaNova-Bold.otf') format('opentype');
    font-style: bold;
    font-display: swap;
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
