import { Story, Meta } from "@storybook/react";
import {
  PortfolioSkill,
  SkillProp,
} from "../components/PortfolioSkill/PortfolioSkill";

export default {
  title: "Example/PortfolioSkill",
  component: PortfolioSkill,
  argTypes: {},
} as Meta;

const Template: Story<SkillProp> = (args) => <PortfolioSkill {...args} />;

export const Default = Template.bind({});
Default.args = {
  skillInformation: {
    skillLabel: "testLabel",
    skilledStars: 3,
    type: "test",
  },
};
