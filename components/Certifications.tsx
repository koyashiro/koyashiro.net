import { FC } from "react";

const Certifications: FC = () => {
  const certifications = [
    "情報処理技術者試験",
    "MTA: データベースの基本事項 (98-364)",
    "AWS Certified Cloud Practitioner",
    "AWS Certified Solutions Architect - Associate",
  ];

  return (
    <>
      <h2 className="font-bold text-xl">Certifications</h2>

      <ul className="list-disc mt-1 ml-8">
        {certifications.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </>
  );
};

export default Certifications;
