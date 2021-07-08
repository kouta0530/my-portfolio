import React from "react"
import { Card, CardHeader, CardContent, CardMedia, Typography,Avatar } from "@material-ui/core"
import IconParameter from "../../models/IconParameter"
import "./style.scss"

export interface WorkProp {
  applicationName: string,
  applicationPictureUrl? :string,
  applicationDescription?: string,
  applicationOptions?: IconParameter[]
}

export const PortfolioWork:React.FC<WorkProp> = ({...props}) => {
  return (
    <>
      <Card className="application-card">
        <CardHeader title={props.applicationName}/>
        <CardMedia 
          component="img"
          image={props.applicationPictureUrl}
          title={props.applicationName}
          className="application-card-media"
        />
        <CardContent>
          <Typography className="application-card-description">
            {props.applicationDescription}
          </Typography>
          <div className="application-card-options">
            {props.applicationOptions?.map(e => <Avatar alt= {e.iconName} src={e.iconImagePath} className="avatar-option"/>)}
          </div>
        </CardContent>
      </Card>
    </>
  )
}