import React from "react";
import { PortfolioHeader } from "../components/PortfolioHeader/PortfolioHeader";

export default class PortfolioMainPage extends React.Component {
  render() {
    return (
      <>
        <header>
          <PortfolioHeader
            headerTitle="my-portfolio"
            navigationElements={[
              { elementName: "profile", elementUrl: "" },
              { elementName: "skill", elementUrl: "" },
              { elementName: "work", elementUrl: "" },
              { elementName: "contact", elementUrl: "" },
            ]}
          />
        </header>
      </>
    );
  }
}
