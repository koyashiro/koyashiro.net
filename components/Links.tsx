import { FC } from "react";
import { VscGithubInverted, VscLink, VscTwitter } from "react-icons/vsc";

const Links: FC = () => {
  const links = [
    {
      kind: "GitHub",
      icon: VscGithubInverted,
      username: "koyashiro",
      url: "https://github.com/koyashiro",
    },
    {
      kind: "Twitter",
      icon: VscTwitter,
      username: "koyashiro",
      url: "https://twitter.com/koyashiro",
    },
  ];

  return (
    <>
      <h2>
        <VscLink />
        <span className="ml-2">Links</span>
      </h2>

      <ul className="mt-2">
        {links.map((l) => (
          <li key={l.kind}>
            <div className="flex">
              <div className="inline-flex items-center">
                <l.icon />
              </div>
              <div className="ml-1">{l.kind}:</div>
              <div className="ml-1">
                <a
                  className="underline"
                  href={l.url}
                  target="_balnk"
                  rel="noopener noreferrer"
                >
                  @{l.username}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Links;
