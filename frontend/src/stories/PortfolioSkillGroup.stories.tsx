import { Story, Meta } from '@storybook/react';
import { PortfolioSkillGroup, SkillGroupProp } from '../components/PortfolioSkillGroup/PortfolioSkillGroup';
import SkillParameter from '../models/SkillParameter';

export default {
  title: 'Example/PortfolioSkill/PortfolioSkillGroup',
  component: PortfolioSkillGroup,
  argTypes: {},
} as Meta;

const createMockSkillInformation = (label: string, stars: number, type: string): SkillParameter => {
  return {
    skillLabel: label,
    skilledStars: stars,
    type: type,
  };
};

const mockSkillGroupData = {
  skillTypes: ['フロントエンド', 'バックエンド'],
  skillInformation: [
    createMockSkillInformation('Vue.js', 3, 'フロントエンド'),
    createMockSkillInformation('React.js', 3, 'フロントエンド'),
    createMockSkillInformation('Python', 3, 'バックエンド'),
  ],
};

const manyKindsMockData = {
  skillTypes: [...mockSkillGroupData.skillTypes, 'ミドルウェア', 'その他'],
  skillInformation: [
    ...mockSkillGroupData.skillInformation,
    createMockSkillInformation('Apache', 2, 'ミドルウェア'),
    createMockSkillInformation('TOEIC', 3, 'その他'),
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
    createMockSkillInformation('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 2, 'test'),
    createMockSkillInformation('eeeee', 2, 'test'),
    createMockSkillInformation('あああああああああああああああああああああああああ', 2, 'test'),
  ],
};

export const ManyStarsCardView = Template.bind({});
ManyStarsCardView.args = {
  skillTypes: ['test'],
  skillInformation: [
    createMockSkillInformation('manyStars', 30, 'test'),
    createMockSkillInformation('eeeee', 2, 'test'),
  ],
};
