import Fonts from "../components/Fonts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Fonts />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
