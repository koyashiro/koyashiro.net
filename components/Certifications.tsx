import { ComponentProps, FC } from "react";
import { VscCheck } from "react-icons/vsc";

type Props = ComponentProps<"div">;

const Certifications: FC<Props> = (props) => {
  const certifications = [
    "情報処理技術者試験",
    "MTA: データベースの基本事項 (98-364)",
    "AWS Certified Cloud Practitioner",
    "AWS Certified Solutions Architect - Associate",
  ];

  return (
    <div {...props}>
      <h2>
        <VscCheck />
        <span className="ml-2">Certifications</span>
      </h2>

      <ul className="mt-2">
        {certifications.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
