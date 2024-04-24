import { ComponentProps, FC } from "react";

type Props = ComponentProps<"header">;

const Header: FC<Props> = (props) => {
  return (
    <header {...props}>
      <h1>koyashiro.net</h1>
    </header>
  );
};

export default Header;
