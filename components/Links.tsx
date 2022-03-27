import { FC } from "react";
import { SiGithub, SiTwitter } from "react-icons/si";

const Links: FC = () => {
  const links = [
    {
      kind: "GitHub",
      icon: SiGithub,
      username: "koyashiro",
      url: "https://github.com/koyashiro",
    },
    {
      kind: "Twitter",
      icon: SiTwitter,
      username: "koyashiro",
      url: "https://twitter.com/koyashiro",
    },
  ];

  return (
    <>
      <h2 className="font-bold text-xl">Links</h2>

      <ul className="list-disc mt-1 ml-8">
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
