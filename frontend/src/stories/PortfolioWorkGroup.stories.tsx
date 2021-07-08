import { Story, Meta } from "@storybook/react";
import { PortfolioWorkGroup, WorkGroupProp } from "../components/PortfolioWorkGroup/PortfolioWorkGroup";

export default {
  title: 'Example/PortfolioWork/PortfolioWorkGroup',
  component: PortfolioWorkGroup
} as Meta

const Template: Story<WorkGroupProp> = (args) => <PortfolioWorkGroup {...args} />

export const Default = Template.bind({})

Default.args = {
  applications:[
    {
      applicationName:"testSampleApplication",
      applicationPictureUrl:'./images/Screenshot from 2021-06-09 13-20-09.png',
      applicationDescription: 'これはテスト用の説明です。',
    },
    {
      applicationName:"testReactApplication",
      applicationPictureUrl:'./logo192.png',
      applicationDescription: 'これはテスト用の説明です。',
    }
  ]
}