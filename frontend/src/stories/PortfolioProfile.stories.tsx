import { Story, Meta } from '@storybook/react';
import { PortfolioProfile, ProfileProps } from '../components/PortfolioProfile/PortfolioProfile';
import HobbyParameter from '../models/HobbyParameter';

export default {
  title: 'Example/PortfolioProfile',
  component: PortfolioProfile,
  argTypes: {
    myPicture: {
      control: 'object',
    },
    myName: {
      control: 'text',
    },
    myHobbyList: {
      control: 'array',
    },
  },
} as Meta;

const Template: Story<ProfileProps> = (args) => <PortfolioProfile {...args} />;

export const Default = Template.bind({});

Default.args = {
  myPicture: {
    iconImagePath: 'logo192.png',
    iconName: 'saki',
    contentUrl: '',
  },
  myName: 'Saki',
  myHobbyList: [
    {
      hobbyName: 'カラオケ',
      hobbiesExampleInformation: ['test', 'テスト'],
    },
    {
      hobbyName: '将棋',
      hobbiesExampleInformation: ['test'],
    },
  ],
};

export const NoPictureAndNoHobby = Template.bind({});
NoPictureAndNoHobby.args = {
  myPicture: {
    iconImagePath: '',
    iconName: 'saki',
    contentUrl: '',
  },
  myName: 'saki',
};

export const ManyInfo = Template.bind({});
ManyInfo.args = {
  myName: 'saki',
  myHobbyList: new Array<HobbyParameter>(5).fill({
    hobbyName: 'test',
    hobbiesExampleInformation: [],
  }),
};

export const ManyHobbiesExampleInfo = Template.bind({});
ManyHobbiesExampleInfo.args = {
  myName: 'saki',
  myHobbyList: [
    {
      hobbyName: 'test',
      hobbiesExampleInformation: new Array<string>(9)
        .fill('test')
        .map((value: string, idx: number) => value + (idx + 1)),
    },
  ],
};
