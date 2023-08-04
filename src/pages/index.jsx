import Head from "next/head";
import { About } from "src/component/About";
import { Feature } from "src/component/Feature";
import { Footer } from "src/component/Footer";
import { Header } from "src/component/Header";
import { Mv } from "src/component/Mv";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Mv />
      <Feature />
      <About />
      <Footer />
    </div>
  );
};
export default Home;
