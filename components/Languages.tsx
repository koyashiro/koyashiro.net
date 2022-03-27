import { FC } from "react";
import { VscFileCode } from "react-icons/vsc";

const Languages: FC = () => {
  const languages = ["TypeScript", "Rust", "Go", "C#"];

  return (
    <>
      <h2>
        <VscFileCode />
        <span className="ml-2">Languages</span>
      </h2>

      <ul className="mt-2">
        {languages.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </>
  );
};

export default Languages;
