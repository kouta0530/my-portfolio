import React from 'react';
import { PortfolioHeader } from '../../components/PortfolioHeader/PortfolioHeader';
import { PortfolioProfile } from '../../components/PortfolioProfile/PortfolioProfile';
import { PortfolioSkillGroup } from '../../components/PortfolioSkillGroup/PortfolioSkillGroup';
import { PortfolioWorkGroup } from '../../components/PortfolioWorkGroup/PortfolioWorkGroup';
import PortfolioContact from '../../components/PortfolioContact/PortfolioContact';
import { Typography } from '@material-ui/core';
import './style.scss';
import { getPortfolioSkillList } from '../../api/portfolioSkillsAPI';
import SkillParameter from '../../models/SkillParameter';
import { getPortfolioWorks } from '../../api/portfolioWorksAPI';
import { WorkParameter } from '../../models/WorkParameter';
import { MainPageStateParameter } from '../../models/MainPageStateParameter';

export default class PortfolioMainPage extends React.Component<{}, MainPageStateParameter> {
  constructor(props: {}) {
    super(props);
    this.state = {
      skills: new Array<SkillParameter>(0),
      skillTypes: new Array<string>(0),
      works: new Array<WorkParameter>(0),
    };
  }

  async componentDidMount() {
    const res = await getPortfolioSkillList();
    if (typeof res === 'object') {
      this.setState({ skills: res, skillTypes: Array.from(new Set(res.map((e) => e.skillType))) });
    }

    const works = await getPortfolioWorks();
    if (typeof works === 'object') {
      this.setState({ works: works });
    }
  }

  render() {
    return (
      <>
        <header>
          <PortfolioHeader
            headerTitle="my-portfolio"
            navigationElements={[
              { elementName: 'profile', elementUrl: '' },
              { elementName: 'skill', elementUrl: '' },
              { elementName: 'works', elementUrl: '' },
              { elementName: 'contact', elementUrl: '' },
            ]}
          />
        </header>
        <div className="container">
          <div>
            <Typography id="profile" variant="h4">
              Profile
            </Typography>
            <PortfolioProfile
              myName="saki"
              myPicture={{
                iconName: 'mypicture',
                contentUrl: '',
                iconImagePath: process.env.REACT_APP_PROFILE_SRC ? process.env.REACT_APP_PROFILE_SRC : '',
              }}
              myHobbyList={[
                {
                  hobbyName: 'カラオケ',
                  hobbiesExampleInformation: ['ポルノグラフィティ'],
                },
              ]}
            />
          </div>
          <div>
            <Typography id="skill" variant="h4">
              Skill
            </Typography>
            <PortfolioSkillGroup skillTypes={this.state.skillTypes} skillInformation={this.state.skills} />
          </div>
          <div>
            <Typography id="works" variant="h4">
              Works
            </Typography>
            <PortfolioWorkGroup applications={this.state.works} />
          </div>
          <div id="contact">
            <PortfolioContact
              contactHeaderTitle="contact"
              contentIcons={[
                {
                  iconName: 'github',
                  iconImagePath: 'GitHub-Mark-64px.png',
                  contentUrl: 'https://github.com/kouta0530',
                },
              ]}
              contentText={[process.env.REACT_APP_CONTACT_MAIL ? process.env.REACT_APP_CONTACT_MAIL : '']}
            />
          </div>
        </div>
      </>
    );
  }
}
