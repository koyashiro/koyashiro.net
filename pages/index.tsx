import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>koyashi.ro</title>
        <meta name="description" content="koyashiro's web site." />
      </Head>

      <div>
        <h1>koyashi.ro</h1>

        <img
          width={200}
          height={200}
          src="https://image.koyashi.ro/koyashiro.png"
          alt="icon"
        />

        <div>
          <h2>Languages</h2>

          <ul>
            <li>TypeScript</li>
            <li>Rust</li>
            <li>Go</li>
            <li>C#</li>
          </ul>
        </div>

        <div>
          <h2>Links</h2>

          <ul>
            <li>
              GitHub: <a href="https://github.com/koyashiro">@koyashiro</a>
            </li>
            <li>
              Twitter: <a href="https://twitter.com/koyashiro">@koyashiro</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Certifications</h2>

          <ul>
            <li>情報処理技術者試験</li>
            <li>MTA: データベースの基本事項 (98-364)</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>AWS Certified Solutions Architect - Associate</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
