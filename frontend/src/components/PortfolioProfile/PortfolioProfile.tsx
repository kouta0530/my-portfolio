import React from 'react';
import IconParameter from '../../models/IconParameter';
import HobbyParameter from '../../models/HobbyParameter';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './style.scss';

export interface ProfileProps {
  myPicture?: IconParameter;
  myName: string;
  myHobbyList?: HobbyParameter[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  })
);

export const PortfolioProfile: React.FC<ProfileProps> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <>
      <div className="profile">
        <div className="profile-avatar">
          <Avatar src={props.myPicture?.iconImagePath} className={classes.large}></Avatar>
        </div>
        <Paper className="profile-info">
          <h3>{props.myName}</h3>
          <div>
            {props.myHobbyList?.map((e) => (
              <>
                <div>
                  <h4 className="profile-info-hobbies">{e.hobbyName}</h4>
                  <ul className="profile-info-hobbies-example">
                    {e.hobbiesExampleInformation.map((e) => (
                      <li>{e}</li>
                    ))}
                  </ul>
                </div>
              </>
            ))}
          </div>
        </Paper>
      </div>
    </>
  );
};
