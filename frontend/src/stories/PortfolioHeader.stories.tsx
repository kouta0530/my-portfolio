import { Story, Meta } from '@storybook/react';
import { PortfolioHeader, HeaderProps } from '../components/PortfolioHeader/PortfolioHeader';
import NavigationElements from '../models/NavigationElement';

const mockNavigationElements = [
  {
    elementName: 'testElement',
    elemenUrl: '',
  },
  {
    elementName: 'testElement2',
    elementUrl: '',
  },
] as NavigationElements[];

export default {
  title: 'Example/PortfolioHeader',
  component: PortfolioHeader,
  argTypes: {
    headerTitle: { control: 'text' },
    navigationElements: {
      types: 'array',
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <PortfolioHeader {...args} />;

export const Title = Template.bind({});
Title.args = {
  headerTitle: 'Title',
  navigationElements: [],
};

export const Elements = Template.bind({});
Elements.args = {
  headerTitle: '',
  navigationElements: mockNavigationElements,
};
