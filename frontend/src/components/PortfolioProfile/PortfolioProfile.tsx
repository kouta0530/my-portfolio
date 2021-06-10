import React from "react";
import IconParameter from "../../models/IconParameter";
import HobbyParameter from "../../models/HobbyParameter";

export interface ProfileProps {
  myPicture?: IconParameter;
  myName: string;
  myHobbyList?: HobbyParameter[];
}

export const PortfolioProfile: React.FC<ProfileProps> = ({ ...props }) => {
  return (
    <>
      <div>
        <img
          src={props.myPicture?.iconImagePath}
          alt={props.myPicture?.iconName}
        ></img>
        <div>
          <h3>{props.myName}</h3>
          <div>
            {props.myHobbyList?.map((e) => (
              <>
                <h4>{e.hobbyName}</h4>
                <div>{e.hobbiesExampleInformation}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
