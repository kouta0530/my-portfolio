import { Story, Meta } from "@storybook/react";
import {
  PortfolioSkillGroup,
  SkillGroupProp,
} from "../components/PortfolioSkillGroup/PortfolioSkillGroup";

export default {
  title: "Example/PortfolioSkillGroup",
  component: PortfolioSkillGroup,
  argTypes: {},
} as Meta;

const mockSkillGroupData = {
  skillTypes: ["フロントエンド", "バックエンド"],
  skillInformation: [
    {
      skillLabel: "Vue.js",
      skilledStars: 3,
      type: "フロントエンド",
    },
    {
      skillLabel: "React.js",
      skilledStars: 3,
      type: "フロントエンド",
    },
    {
      skillLabel: "Python",
      skilledStars: 3,
      type: "バックエンド",
    },
  ],
};

const manyKindsMockData = {
  skillTypes: [...mockSkillGroupData.skillTypes, "ミドルウェア", "その他"],
  skillInformation: [
    ...mockSkillGroupData.skillInformation,
    {
      skillLabel: "Apache",
      skilledStars: 2,
      type: "ミドルウェア",
    },
    {
      skillLabel: "TOEIC",
      skilledStars: 3,
      type: "その他",
    },
  ],
};

const Template: Story<SkillGroupProp> = (args) => (
  <PortfolioSkillGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...mockSkillGroupData,
};

export const ManyKindsSkills = Template.bind({});
ManyKindsSkills.args = { ...manyKindsMockData };
