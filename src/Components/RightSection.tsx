import React from "react";
import SearchBar from "./SearchBar";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import VerticalCard from "./Shared/VerticalCard";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "./Shared/Card";
import figma from "../../public/figma.png";
import json from "../../public/jason.png";
const RightSection = () => {
  const data = [
    {
      day: "Mon",
      date: "3",
      time1: "9:00 Am",
      time2: "2:00 Pm",
      time3: "4:00 PM",
    },
    {
      day: "Tue",
      date: "4",
      time1: "9:00 Am",
      time2: "2:00 Pm",
      time3: "---",
    },
    {
      day: "Wed",
      date: "5",
      time1: "9:00 Am",
      time2: "2:00 Pm",
      time3: "4:00 PM",
    },
    {
      day: "Thu",
      date: "6",
      time1: "9:00 Am",
      time2: "---",
      time3: "4:00 PM",
    },
    {
      day: "Fri",
      date: "7",
      time1: "9:00 Am",
      time2: "2:00 Pm",
      time3: "4:00 PM",
    },
  ];
  const Carddata = [
    {
      title: "User flow.fig",
      time: "Aug 5,2021 at 9:50 AM",
      kb: "o,6 Kb",
      image: figma,
    },
    {
      title: "Design system.fig",
      time: "Aug 5,2021 at 9:50 AM",
      kb: "0.8 Kb",
      image: figma,
    },
    {
      title: "Animation.json",
      time: "Aug 5,2021 at 9:50 AM",
      kb: "18 Kb",
      image: json,
    },
  ];
  return (
    <div className="">
     
      <div>
        <div className="flex items-center justify-between mt-5">
          <h1 className="text-2xl font-mona font-bold text-[#3d3d4e]">
            Meeting
          </h1>
          <span className="flex items-center font-mona font-semibold text-sm gap-2 text-[#3d3d4e]">
            Aug, 2021 - Aug7,21{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </span>
        </div>
        <div className="bg-[#FFF8F5] mt-8 py-6 md:px-6 rounded-lg flex xl:gap-6 gap-3 justify-center">
          {data.map((item, index) => (
            <div>
              <VerticalCard
                Day={item.day}
                Date={item.date}
                time1={item.time1}
                time2={item.time2}
                time3={item.time3}
                subBgColor={index === 3 ? "none" : ""}
                border={index === 3 ? "2px solid black" : ""}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center justify-between mt-8">
            <h1 className="text-2xl font-mona font-bold text-[#3d3d4e]">
              Files
            </h1>
            <h1 className="flex items-center font-mona font-semibold text-sm gap-2 text-[#3d3d4e] ">
              View all{" "}
              <span>
                <FaArrowRightLong size={15} />
              </span>
            </h1>
          </div>
         <div className="my-3">
         {Carddata.map((item, index) => (
            <div key={index} className="mt-3">
              <Card
                iconImage={item.image}
                tittle={item.title}
                time={item.time}
                Kb={item.kb}
                iconbg="black"
                border="1px solid black"
              />
            </div>
          ))}
         </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
