import type { NextPage } from "next";
import Head from "next/head";

import Certifications from "../components/Certifications";
import Languages from "../components/Languages";
import Links from "../components/Links";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>koyashi.ro</title>
        <meta name="description" content="koyashiro's web site." />
      </Head>

      <div className="container mx-auto my-4">
        <h1 className="font-bold text-3xl">koyashi.ro</h1>

        <img
          width={200}
          height={200}
          src="https://image.koyashi.ro/koyashiro.png"
          alt="icon"
        />

        <div className="mt-3">
          <Languages />
        </div>

        <div className="mt-3">
          <Links />
        </div>

        <div className="mt-3">
          <Certifications />
        </div>
      </div>
    </>
  );
};

export default Home;
