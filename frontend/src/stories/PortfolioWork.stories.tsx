import { Story, Meta  } from "@storybook/react";
import { PortfolioWork,WorkProp } from "../components/PortfolioWork/PortfolioWork";

export default {
  title: 'Example/PortfolioWork',
  component: PortfolioWork
} as Meta

const Template: Story<WorkProp> = (args) => <PortfolioWork {...args} />

export const Default = Template.bind({})
Default.args ={
    applicationName:"testSampleApplication",
    applicationPictureUrl:'./images/Screenshot from 2021-06-09 13-20-09.png',
    applicationDescription: 'これはテスト用の説明です。',
    applicationOptions:[
      {
        iconName:'',
        iconImagePath:'logo192.png',
        contentUrl:'',
      },
      {
        iconName:'',
        iconImagePath:'logo192.png',
        contentUrl:'',
      }
    ]
}

export const ManyDescription = Template.bind({})

ManyDescription.args = {
  applicationName:"ManyDescription",
  applicationDescription: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
}

export const ManyOptions = Template.bind({})
ManyOptions.args = {
  applicationName: "ManyOptionsTest",
  applicationOptions: [
    {
      iconName:'',
      contentUrl:'',
      iconImagePath:'logo192.png'
    },
    {
      iconName:'',
      contentUrl:'',
      iconImagePath:'logo192.png'
    },
    {
      iconName:'',
      contentUrl:'',
      iconImagePath:'logo192.png'
    },
    {
      iconName:'',
      contentUrl:'',
      iconImagePath:'logo192.png'
    },
    {
      iconName:'',
      contentUrl:'',
      iconImagePath:'logo192.png'
    }
  ]
}