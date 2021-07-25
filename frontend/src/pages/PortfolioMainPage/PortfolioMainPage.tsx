import React from 'react';
import { PortfolioHeader } from '../../components/PortfolioHeader/PortfolioHeader';
import { PortfolioProfile } from '../../components/PortfolioProfile/PortfolioProfile';
import { PortfolioSkillGroup } from '../../components/PortfolioSkillGroup/PortfolioSkillGroup';
import { PortfolioWorkGroup } from '../../components/PortfolioWorkGroup/PortfolioWorkGroup';
import './style.scss';
import { getPortfolioSkillList } from '../../api/portfolioSkillsAPI';
import SkillParameter from '../../models/SkillParameter';
import { getPortfolioWorks } from '../../api/portfolioWorksAPI';
import { WorkParameter } from '../../models/WorkParameter';

export default class PortfolioMainPage extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      skills: new Array<SkillParameter>(0),
      skillTypes: new Array<String>(0),
      works: new Array<WorkParameter>(0),
    };
  }

  async componentDidMount() {
    const res = await getPortfolioSkillList();
    if (typeof res === 'object') {
      this.setState({ skills: res, skillTypes: Array.from(new Set(res.map((e) => e.skillType))) });
    }

    const works = await getPortfolioWorks();
    this.setState({ works: works });
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
              { elementName: 'work', elementUrl: '' },
              { elementName: 'contact', elementUrl: '' },
            ]}
          />
        </header>
        <div className="container">
          <div>
            <h2>Profile</h2>
            <PortfolioProfile
              myName="saki"
              myPicture={{
                iconName: 'mypicture',
                contentUrl: '',
                iconImagePath: '',
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
            <h2>Skill</h2>
            <PortfolioSkillGroup skillTypes={this.state.skillTypes} skillInformation={this.state.skills} />
          </div>
          <div>
            <h2>Works</h2>
            <PortfolioWorkGroup applications={this.state.works} />
          </div>
        </div>
      </>
    );
  }
}
