import { FC } from "react";

const Languages: FC = () => {
  const languages = ["TypeScript", "Rust", "Go", "C#"];

  return (
    <>
      <h2 className="font-bold text-xl">Languages</h2>

      <ul className="list-disc mt-1 ml-8">
        {languages.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </>
  );
};

export default Languages;
