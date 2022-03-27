import { FC } from "react";

const Languages: FC = () => {
  const languages = ["TypeScript", "Rust", "Go", "C#"];

  return (
    <>
      <h2>Languages</h2>

      <ul>
        {languages.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </>
  );
};

export default Languages;
