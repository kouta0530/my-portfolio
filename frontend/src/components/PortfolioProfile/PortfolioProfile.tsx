import React from "react";
import IconParameter from "../../models/IconParameter";
import HobbyParameter from "../../models/HobbyParameter";
import "./style.scss";

export interface ProfileProps {
  myPicture?: IconParameter;
  myName: string;
  myHobbyList?: HobbyParameter[];
}

export const PortfolioProfile: React.FC<ProfileProps> = ({ ...props }) => {
  return (
    <>
      <div className="profile">
        <img
          src={props.myPicture?.iconImagePath}
          alt={props.myPicture?.iconName}
        ></img>
        <div className="profile-info">
          <h3>{props.myName}</h3>
          <div className="profile-info-hobbies">
            {props.myHobbyList?.map((e) => (
              <>
                <h4>{e.hobbyName}</h4>
                <ul>
                  {e.hobbiesExampleInformation.map((e) => (
                    <li>{e}</li>
                  ))}
                </ul>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
