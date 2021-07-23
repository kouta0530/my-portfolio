import React from "react";
import { PortfolioHeader } from "../../components/PortfolioHeader/PortfolioHeader";
import { PortfolioProfile } from "../../components/PortfolioProfile/PortfolioProfile";
import "./style.scss";

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
        <div className="container">
          <PortfolioProfile
            myName="saki"
            myPicture={{
              iconName: "mypicture",
              contentUrl: "",
              iconImagePath: "",
            }}
            myHobbyList={[
              {
                hobbyName: "カラオケ",
                hobbiesExampleInformation: ["ポルノグラフィティ"],
              },
            ]}
          />
        </div>
      </>
    );
  }
}
