import { Story, Meta } from '@storybook/react';
import { PortfolioSkillGroup, SkillGroupProp } from '../components/PortfolioSkillGroup/PortfolioSkillGroup';

export default {
  title: 'Example/PortfolioSkillGroup',
  component: PortfolioSkillGroup,
  argTypes: {},
} as Meta;

const mockSkillGroupData = {
  skillTypes: ['フロントエンド', 'バックエンド'],
  skillInformation: [
    {
      skillLabel: 'Vue.js',
      skilledStars: 3,
      type: 'フロントエンド',
    },
    {
      skillLabel: 'React.js',
      skilledStars: 3,
      type: 'フロントエンド',
    },
    {
      skillLabel: 'Python',
      skilledStars: 3,
      type: 'バックエンド',
    },
  ],
};

const manyKindsMockData = {
  skillTypes: [...mockSkillGroupData.skillTypes, 'ミドルウェア', 'その他'],
  skillInformation: [
    ...mockSkillGroupData.skillInformation,
    {
      skillLabel: 'Apache',
      skilledStars: 2,
      type: 'ミドルウェア',
    },
    {
      skillLabel: 'TOEIC',
      skilledStars: 3,
      type: 'その他',
    },
  ],
};

const Template: Story<SkillGroupProp> = (args) => <PortfolioSkillGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...mockSkillGroupData,
};

export const ManyKindsSkills = Template.bind({});
ManyKindsSkills.args = { ...manyKindsMockData };

export const DiffrentLengthLabel = Template.bind({});

DiffrentLengthLabel.args = {
  skillTypes: ['test'],
  skillInformation: [
    {
      skillLabel: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      skilledStars: 2,
      type: 'test',
    },
    {
      skillLabel: 'eeeee',
      skilledStars: 2,
      type: 'test',
    },
    {
      skillLabel: 'あああああああああああああああああああああああああ',
      skilledStars: 2,
      type: 'test',
    },
  ],
};

export const ManyStarsCardView = Template.bind({});
ManyStarsCardView.args = {
  skillTypes: ['test'],
  skillInformation: [
    {
      skillLabel: 'manyStars',
      skilledStars: 30,
      type: 'test',
    },
    {
      skillLabel: 'eeeee',
      skilledStars: 2,
      type: 'test',
    },
  ],
};
