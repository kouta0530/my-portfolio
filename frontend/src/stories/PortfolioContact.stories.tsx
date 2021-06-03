import { Story, Meta } from "@storybook/react";
import PortfolioContact from "../components/PortfolioContact/PortfolioContact";
import IconParameter from "../models/IconParameter";

export default {
  title: "Example/PortfolioContact",
  component: PortfolioContact,
  argTypes: {
    contactHeaderTitle: { control: "text" },
    contactIcons: {
      types: "array",
    },
  },
} as Meta;

type ContactPrams = {
  contactHeaderTitle: String;
  contentIcons: IconParameter[];
  contentText: String;
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

const Template: Story<ContactPrams> = (args) => (
  <PortfolioContact {...args}> /</PortfolioContact>
);

export const Default = Template.bind({});
Default.args = {
  contactHeaderTitle: "TestContactTitle",
  contentIcons: mockContentIcons,
};
