import clsx from "clsx";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<"footer">;

const Footer: FC<Props> = (props) => {
  const className = clsx(
    props.className,
    "mt-8 border-t-2 border-solid text-center"
  );

  return (
    <footer {...{ ...props, className }}>
      <small>&copy; 2022 koyashiro</small>
    </footer>
  );
};

export default Footer;
