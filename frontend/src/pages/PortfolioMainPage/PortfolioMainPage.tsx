import React from 'react';
import { PortfolioHeader } from '../../components/PortfolioHeader/PortfolioHeader';
import { PortfolioProfile } from '../../components/PortfolioProfile/PortfolioProfile';
import { PortfolioSkillGroup } from '../../components/PortfolioSkillGroup/PortfolioSkillGroup';
import './style.scss';
import { getPortfolioSkillList } from '../../api/portfolioSkillsAPI';
import SkillParameter from '../../models/SkillParameter';

export default class PortfolioMainPage extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props);
    this.state = { skills: new Array<SkillParameter>(0), skillTypes: new Array<String>(0) };
  }

  async componentDidMount() {
    const res = await getPortfolioSkillList();
    if (typeof res === 'object') {
      this.setState({ skills: res, skillTypes: Array.from(new Set(res.map((e) => e.skillType))) });
    }
    console.log(this.state);
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
          <PortfolioSkillGroup skillTypes={this.state.skillTypes} skillInformation={this.state.skills} />
        </div>
      </>
    );
  }
}
