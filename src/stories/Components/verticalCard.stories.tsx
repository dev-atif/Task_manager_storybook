import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import VerticalCard from "@/Components/Shared/VerticalCard";
export default {
    title: "Components/VerticalCard",
    component: VerticalCard,
    argTypes: {
        textColor: { control: 'color' },
        SubtextColor: { control: 'color' },
        subBgColor: { control: 'color' },
        Day: { control: 'text' },
        Date: { control: 'text' },
        time1: { control: 'text' },
        time2: { control: 'text' },
        time3: { control: 'text' },
        border: { control: 'text' },
        backgroundColor:{control:'color'}
      },
  } as Meta<typeof VerticalCard>;
  const Template: StoryFn<typeof VerticalCard> = (args) => <VerticalCard {...args} />;
  export const Default = Template.bind({});
  Default.args = {
    textColor: '#3d3d4e',
    SubtextColor: '#3d3d4e',
    subBgColor: '#FEE7DE',
    Day: 'Mon',
    Date: '27',
    time1: '09:00 AM',
    time2: '12:00 PM',
    time3: '03:00 PM',
   
  };
  export const Secondary = Template.bind({});
  Secondary.args = {
    textColor: 'white',
    SubtextColor: 'black',
    subBgColor: 'black',
    Day: 'Mon',
    Date: '27',
    time1: '09:00 AM',
    time2: '12:00 PM',
    time3: '03:00 PM',
   
  };
  export const Border = Template.bind({});
  Border.args = {
    textColor: '#3d3d4e',
    SubtextColor: '#3d3d4e',
    subBgColor: 'none',
    Day: 'Mon',
    Date: '27',
    time1: '09:00 AM',
    time2: '12:00 PM',
    time3: '03:00 PM',
    border: '2px solid black'
  };
  