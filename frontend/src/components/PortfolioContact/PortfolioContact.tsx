import React from "react";
import IconParameter from "../../models/IconParameter";
import Typography from "@material-ui/core/Typography";

type ContactPrams = {
  contactHeaderTitle: String;
  contentIcons: IconParameter[];
  contentText: String;
};

export default class PortfolioContact extends React.Component<ContactPrams> {
  render() {
    return (
      <>
        <div>
          <Typography variant="h4">{this.props.contactHeaderTitle}</Typography>
        </div>
      </>
    );
  }
}
