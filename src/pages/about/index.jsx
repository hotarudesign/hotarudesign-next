import Head from "next/head";
import { Header } from "src/component/Header";
import { Footer } from "src/component/Footer";
import { AboutHead } from "src/component/AboutHead";

const About = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutHead />
      <Footer />
    </div>
  );
};
export default About;
