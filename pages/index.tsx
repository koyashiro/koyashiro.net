import type { NextPage } from "next";
import Head from "next/head";

import Avatar from "../components/Avatar";
import Certifications from "../components/Certifications";
import Header from "../components/Header";
import Languages from "../components/Languages";
import Links from "../components/Links";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>koyashi.ro</title>
        <meta name="description" content="koyashiro's web site." />
      </Head>

      <div className="container max-w-4xl mx-auto my-4">
        <Header />
        <Avatar width={200} height={200} />
        <Languages className="mt-6" />
        <Links className="mt-6" />
        <Certifications className="mt-6" />
      </div>
    </>
  );
};

export default Home;
