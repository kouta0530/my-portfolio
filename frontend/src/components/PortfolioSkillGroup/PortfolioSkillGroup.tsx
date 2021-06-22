import React from "react";
import SkillGroupParameter from "../../models/SkillGroupParameter";
import { PortfolioSkill } from "../PortfolioSkill/PortfolioSkill";

export interface SkillGroupProp {
  skillTypes: string[];
  skillInformation: SkillGroupParameter;
}

export const PortfolioSkillGroup: React.FC<SkillGroupProp> = ({ ...props }) => {
  return (
    <>
      {props.skillInformation.skillInformationMatchTypesKey.map((e) => (
        <PortfolioSkill skillInformation={e} />
      ))}
    </>
  );
};
