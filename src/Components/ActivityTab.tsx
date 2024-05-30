import React from "react";

import { VscSymbolColor } from "react-icons/vsc";
import user1 from "../../public/360_F_557355774_6hCv7pnAMxjccMuureD96Fgt0aTBwxid.jpg";
import user2 from "../../public/istockphoto-1171169127-612x612.jpg";
import user3 from "../../public/istockphoto-1324786380-612x612.jpg";
import Image from "next/image";
import { GiExpense } from "react-icons/gi";
import { FaLayerGroup } from "react-icons/fa";
import Card from "./Shared/Card";
import Chart from "./Shared/ChartComponent";
import ChartComponent from "./Shared/ChartComponent";
const userImage = [{ image: user1 }, { image: user2 }, { image: user3 }];
const cards = [
  {
    icon: <VscSymbolColor size={30} />,
    text: "Illustration Templates",
    time: "9:00 AM - 4:00 PM",
    Images: [{ image: user1 }, { image: user2 }, { image: user3 }],
  },
  {
    icon: <GiExpense size={30} />,
    text: "UI Design",
    time: "4:00 PM - 5:00 PM",
    Images: [{ image: user1 }, { image: user2 }],
  },
  {
    icon: <FaLayerGroup size={30} />,
    text: "UX Design",
    time: "5:00 PM - 6:00 PM",
    Images: [{ image: user1 }, { image: user2 }, { image: user3 }],
  },
];
const ActivityTab = () => {
  return (
  <div>
      <div>
      {cards.map((item, index) => (
        <div className="my-3" key={index}>
          <Card
            tittle={item.text}
            time={item.time}
            Icon={item.icon}
            user={item.Images}
            shadow={"0 4px 8px rgba(0, 0, 0, 0.2)"}
            textColor={index===0 ?'white':"black"}
            bg={index===0 ?'black':''}
            iconbg={index===0 ? 'white':''}
          />
        </div>
      ))}
    </div>
    <div>
      <ChartComponent/>
    </div>
  </div>
  );
};

export default ActivityTab;
