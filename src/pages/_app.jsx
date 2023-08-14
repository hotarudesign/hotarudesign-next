import "src/styles/global.scss";
import Router from "next/router";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }) => {
  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeComplete", routeChange);
  Router.events.on("routeChangeStart", routeChange);
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
};

export default MyApp;
