import React from "react";
import SkillParameter from "../../models/SkillParameter";
import { PortfolioSkill } from "../PortfolioSkill/PortfolioSkill";

export interface SkillGroupProp {
  skillTypes: string[];
  skillInformation: SkillParameter[];
}

export const PortfolioSkillGroup: React.FC<SkillGroupProp> = ({ ...props }) => {
  return (
    <>
      {props.skillTypes.map((skillType) => (
        <div>
          <p>{skillType}</p>
          {props.skillInformation
            .filter((skill) => skill.type === skillType)
            .map((s) => (
              <PortfolioSkill skillInformation={s} />
            ))}
        </div>
      ))}
    </>
  );
};
