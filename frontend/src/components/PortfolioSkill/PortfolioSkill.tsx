import React from "react";
import SkillParameter from "../../models/SkillParameter";
import StarIcon from "@material-ui/icons/Star";
import "./style.scss";

export interface SkillProp {
  skillInformation: SkillParameter;
}

export const PortfolioSkill: React.FC<SkillProp> = ({ ...props }) => {
  const stars = Array(props.skillInformation.skilledStars).fill(
    <span className="skilled-star">
      <StarIcon color="primary" />
    </span>
  );

  return (
    <>
      <div className="skill">
        <label>
          {props.skillInformation.skillLabel.replace(/(.{30}?)/g, "$&\r\n")}
        </label>
        <div className="skilled-stars">{stars}</div>
      </div>
    </>
  );
};
