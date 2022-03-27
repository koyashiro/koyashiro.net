import { FC } from "react";

type Props = { width: number; height: number };

const Avatar: FC<Props> = (props) => {
  return (
    <img {...props} src="https://image.koyashi.ro/koyashiro.png" alt="icon" />
  );
};

export default Avatar;
