import React from "react";
import IconParameter from "../../models/IconParameter";
import Typography from "@material-ui/core/Typography";
import "./style.scss";

type ContactPrams = {
  contactHeaderTitle: String;
  contentIcons: IconParameter[];
  contentText: String[];
};

export default class PortfolioContact extends React.Component<ContactPrams> {
  render() {
    return (
      <>
        <div className="content">
          <div className="contact-title">
            <Typography variant="h4">
              {this.props.contactHeaderTitle}
            </Typography>
          </div>
          <div className="content-icons">
            {this.props.contentIcons.map((e) => (
              <a href={e.contentUrl}>
                <img src={e.iconImagePath} alt={e.iconName} />
              </a>
            ))}
          </div>
          <div className="content-texts">
            {this.props.contentText.map((e) => (
              <p>{e}</p>
            ))}
          </div>
        </div>
      </>
    );
  }
}
