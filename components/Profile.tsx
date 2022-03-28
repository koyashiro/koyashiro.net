import { ComponentProps, FC } from "react";
import { SiGithub, SiTwitter } from "react-icons/si";
import clsx from "clsx";

type Props = ComponentProps<"div">;

const Profile: FC<Props> = (props) => {
  const className = clsx(props.className, "flex");

  return (
    <div {...{ ...props, className }}>
      <div>
        <img
          className="rounded-full border-2"
          width={100}
          height={100}
          src="https://image.koyashi.ro/koyashiro.png"
          alt="icon"
        />
      </div>
      <div className="ml-4 mt-3">
        <div className="text-2xl font-bold">koyashiro</div>
        <div>なんちゃって Web エンジニア</div>
        <div className="flex mt-1">
          <a
            href="https://github.com/koyashiro"
            target="_balnk"
            rel="noopener noreferrer"
          >
            <SiGithub size={20} />
          </a>
          <a
            className="ml-1"
            href="https://twitter.com/koyashiro"
            target="_balnk"
            rel="noopener noreferrer"
          >
            <SiTwitter size={20} color="#1DA1F2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
