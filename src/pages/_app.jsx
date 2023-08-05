import { AnimatePresence } from "framer-motion";
import "src/styles/global.scss";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
