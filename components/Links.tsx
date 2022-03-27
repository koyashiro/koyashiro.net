import { ComponentProps, FC } from "react";
import { VscGithubInverted, VscLink, VscTwitter } from "react-icons/vsc";

type Props = ComponentProps<"div">;

const Links: FC<Props> = (props) => {
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
    <div {...props}>
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
                <a href={l.url} target="_balnk" rel="noopener noreferrer">
                  @{l.username}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
