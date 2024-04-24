import clsx from "clsx";
import { ComponentProps, FC } from "react";
import { SiGithub } from "react-icons/si";

type Props = ComponentProps<"footer">;

const Footer: FC<Props> = (props) => {
  return (
    <footer {...props}>
      <div className="mt-8 pt-1 border-t-2 border-solid flex justify-center">
        <span className="text-gray-500">&copy; 2022 koyashiro</span>
        <a
          href="https://github.com/koyashiro/koyashiro.net"
          aria-label="Repository"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <SiGithub className="ml-2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
