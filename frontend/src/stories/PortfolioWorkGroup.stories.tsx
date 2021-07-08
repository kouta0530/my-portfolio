import { Story, Meta } from "@storybook/react";
import { PortfolioWorkGroup, WorkGroupProp } from "../components/PortfolioWorkGroup/PortfolioWorkGroup";
import IconParameter from "../models/IconParameter";
import { WorkParameter } from "../models/WorkParameter";

export default {
  title: 'Example/PortfolioWork/PortfolioWorkGroup',
  component: PortfolioWorkGroup
} as Meta

const createMockApplication　= (
  name: string, 
  applicationPictureUrl?: string,
  applicationDescription?: string,
  applicationOptions?: IconParameter[]
)=> {

    return {
      applicationName: name,
      applicationPictureUrl: applicationPictureUrl,
      applicationDescription: applicationDescription,
      applicationOptions: applicationOptions
    } as WorkParameter
}

const Template: Story<WorkGroupProp> = (args) => <PortfolioWorkGroup {...args} />

export const Default = Template.bind({})

Default.args = {
  applications:[
    createMockApplication('testSampleApplication','/images/Screenshot from 2021-06-09 13-20-09.png','これはテスト用の説明です。'),
    createMockApplication('testReactApplication','./logo192.png','これはテスト用の説明です。')
  ]
}