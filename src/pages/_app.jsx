import "src/styles/global.scss";

const MyApp = ({ Component, pageProps, router }) => {
  return <Component {...pageProps} key={router.asPath} />;
};

export default MyApp;
