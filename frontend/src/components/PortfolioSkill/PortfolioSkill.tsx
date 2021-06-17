import React from "react";
import SkillParameter from "../../models/SkillParameter";
import StarIcon from "@material-ui/icons/Star";
import "./style.scss";

export interface SkillProp {
  skillInformation: SkillParameter;
}

export const PortfolioSkill: React.FC<SkillProp> = ({ ...props }) => {
  const stars = Array(props.skillInformation.skilledStars).fill(
    <StarIcon color="primary" />
  );

  return (
    <>
      <div className="skill">
        <label>{props.skillInformation.skillLabel}</label>
        <div className="skilled-stars">
          <span className="skilled-star">{stars}</span>
        </div>
      </div>
    </>
  );
};
