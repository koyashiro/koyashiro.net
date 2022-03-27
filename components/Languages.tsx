import { ComponentProps, FC } from "react";
import { VscFileCode } from "react-icons/vsc";

type Props = ComponentProps<"div">;

const Languages: FC<Props> = (props) => {
  const languages = ["TypeScript", "Rust", "Go", "C#"];

  return (
    <div {...props}>
      <h2>
        <VscFileCode />
        <span className="ml-2">Languages</span>
      </h2>

      <ul className="mt-2">
        {languages.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
