import { Story, Meta } from "@storybook/react";
import PortfolioContact from "../components/PortfolioContact/PortfolioContact";
import IconParameter from "../models/IconParameter";

export default {
  title: "Example/PortfolioContact",
  component: PortfolioContact,
  argTypes: {
    contactHeaderTitle: { control: "text" },
    contentIcons: {
      types: "array",
    },
    contentText: {
      control: "array",
    },
  },
} as Meta;

type ContactPrams = {
  contactHeaderTitle: String;
  contentIcons: IconParameter[];
  contentText: String[];
};

const mockContentIcons = [
  {
    iconName: "test",
    contentUrl: "",
    iconImagePath: "./logo192.png",
  },
  {
    iconName: "test2",
    contentUrl: "",
    iconImagePath: "./logo192.png",
  },
];

const mockContentText = ["test@example.com"];

const Template: Story<ContactPrams> = (args) => (
  <PortfolioContact {...args}> /</PortfolioContact>
);

export const Default = Template.bind({});
Default.args = {
  contactHeaderTitle: "TestContactTitle",
  contentIcons: mockContentIcons,
  contentText: mockContentText,
};

export const Title = Template.bind({});
Title.args = {
  contactHeaderTitle: "TestContactTitle",
  contentIcons: [],
  contentText: [],
};

export const Icons = Template.bind({});
Icons.args = {
  contentIcons: mockContentIcons,
  contentText: [],
};
