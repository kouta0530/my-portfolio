import { Story, Meta } from "@storybook/react";
import { PortfolioWorkGroup, WorkGroupProp } from "../components/PortfolioWorkGroup/PortfolioWorkGroup";
import IconParameter from "../models/IconParameter";
import { WorkParameter } from "../models/WorkParameter";

export default {
  title: 'Example/PortfolioWork/PortfolioWorkGroup',
  component: PortfolioWorkGroup
} as Meta

const createMockApplication = (
  name: string, 
  applicationPictureUrl?: string,
  applicationDescription?: string,
  applicationOptions?: IconParameter[]
)=> {

    return {
      applicationName: name,
      applicationPictureUrl: applicationPictureUrl,
      applicationDescription: applicationDescription,
      applicationIcon: applicationOptions
    } as WorkParameter
}

const mockOption = {
  iconName:'',
  contentUrl:'',
  iconImagePath:'logo192.png'
}

const Template: Story<WorkGroupProp> = (args) => <PortfolioWorkGroup {...args} />

export const Default = Template.bind({})

Default.args = {
  applications:[
    createMockApplication('testSampleApplication','/images/Screenshot from 2021-06-09 13-20-09.png','これはテスト用の説明です。',[mockOption]),
    createMockApplication('testReactApplication','./logo192.png','これはテスト用の説明です。')
  ]
}

export const ManyApplications = Template.bind({})
ManyApplications.args = {
  applications: new Array<WorkParameter>(6).fill(
      createMockApplication('thirdApplication','./logo192.png','testSamplaApp',new Array<IconParameter>(2).fill(mockOption))
  )
}
