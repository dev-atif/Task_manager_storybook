import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card from "@/Components/Shared/Card";
import { StaticImageData } from "next/image";
import sampleImage1 from "../../../public/360_F_557355774_6hCv7pnAMxjccMuureD96Fgt0aTBwxid.jpg"; // Adjust the path to your sample image
import sampleImage2 from "../../../public/images (1).jpg";
import sampleImage3 from "../../../public/istockphoto-1324786380-612x612.jpg";

import { VscSymbolColor } from "react-icons/vsc";
// Default export that defines the metadata for the component
export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    tittle: { control: "text" },
    time: { control: "text" },
    user: { control: "object" },
    bg: { control: "color" },
    border: { control: "text" },
    shadow: { control: "text" },
    textColor:{control:'text'},
    iconbg:{control:'color'},
    IcontextColor:{control:'text'}
  },
} as Meta<typeof Card>;
const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {
  Icon: <VscSymbolColor size={60} />,
  tittle: "Illustration Templates",
  time: "9:00 AM - 4:00 PM",
  user: [
    { image: sampleImage1 as StaticImageData },
    { image: sampleImage2 as StaticImageData },
    { image: sampleImage3 as StaticImageData },
  ],
  bg: "#fff",
 shadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

export const Secondary = Template.bind({});
Secondary.args = {
  Icon: <VscSymbolColor size={60} />,
  tittle: "Illustration Templates",
  time: "9:00 AM - 4:00 PM",
  user: [
    { image: sampleImage1 as StaticImageData },
    { image: sampleImage2 as StaticImageData },
    { image: sampleImage3 as StaticImageData },
  ],
  bg: "#000",
 shadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
 iconbg:'white',
 textColor:'white'

};

export const BorderCard = Template.bind({});
BorderCard.args = {
  Icon: <VscSymbolColor size={60} />,
  tittle: "Illustration Templates",
  time: "9:00 AM - 4:00 PM",
  user: [
    { image: sampleImage1 as StaticImageData },
    { image: sampleImage2 as StaticImageData },
  ],
  bg: "#fff",
 border:'1px solid black',
 iconbg:'black',
 textColor:'black',
IcontextColor:'white'

};