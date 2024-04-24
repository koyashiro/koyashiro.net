import type { NextPage } from "next";
import Head from "next/head";

import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Languages from "../components/Languages";
import Profile from "../components/Profile";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>koyashiro.net</title>
        <meta name="description" content="koyashiro's web site." />
      </Head>

      <div className="container max-w-3xl mx-auto px-4">
        <Header />

        <main>
          <Profile className="mt-8" />
          <Languages className="mt-6" />
          <Certifications className="mt-6" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
