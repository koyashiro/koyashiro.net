import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>koyashi.ro</title>
        <meta name="description" content="koyashiro's web site." />
      </Head>

      <h1>koyashi.ro</h1>
      <a href="https://github.com/koyashiro">GitHub</a>
    </>
  );
};

export default Home;
