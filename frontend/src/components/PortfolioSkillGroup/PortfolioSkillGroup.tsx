import React from 'react';
import SkillParameter from '../../models/SkillParameter';
import { PortfolioSkill } from '../PortfolioSkill/PortfolioSkill';
import { Card, CardContent, Typography } from '@material-ui/core';
import './style.scss';

export interface SkillGroupProp {
  skillTypes: string[];
  skillInformation: SkillParameter[];
}

export const PortfolioSkillGroup: React.FC<SkillGroupProp> = ({ ...props }) => {
  return (
    <>
      <div className="skill-group">
        {props.skillTypes.map((skillType) => (
          <Card className="skill-group-card">
            <CardContent>
              <Typography component="p" align="center" className="skill-group-card-label">
                {skillType}
              </Typography>
              {props.skillInformation
                .filter((skill) => skill.skillType === skillType)
                .map((s) => (
                  <PortfolioSkill skillInformation={s} />
                ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
