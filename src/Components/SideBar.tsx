import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png"
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { VscGraph } from "react-icons/vsc";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Menu = [
  {
    name: "Profile",
    Icon: <FaRegUser />,
  },
  {
    name: "Schedule",
    Icon: <SlCalender />,
  },
  {
    name: "Overview",
    Icon: <VscGraph />,
  },
  {
    name: "Chat",
    Icon: <IoChatbubbleEllipsesOutline />,
  },
  {
    name: "Settings",
    Icon: <IoSettingsOutline />,
  },
];

const SideBar = () => {
  return (
    <div className="relative" >
      
      <div className="py-16 px-8 flex flex-col h-screen items-center md:items-start mt-8 md:mt-0">
        
        <div>
          <Image src={logo} alt="logo" className="w-20 h-20 md:w-10 md:h-10" />
          <h1 className="md:hidden text-base text-white font-mona font-medium">
            Inspection
          </h1>
        </div>
      
        <div className="mt-20 flex-1 w-full">
          {Menu.map((item, index) => (
            <div className="even:py-6 w-full flex justify-center md:block ">
              <Link
                href={"#"}
                className="text-[#9e9ea7] text-center   font-mona font-medium md:text-base text-xl flex items-center gap-3 hover:text-white  "
              >
                <span className="hidden md:block">{item.Icon}</span> {item.name}{" "}
              </Link>
            </div>
          ))}
        </div>
        <div className=" absolute -top-2 right-4 md:relative md:right-0" >
       
         <Link
            href={"#"}
            className="md:text-[#9e9ea7] text-white  underline md:decoration-transparent font-normal md:text-base text-xl flex items-center gap-3 hover:text-white  "
          >
            <span className="hidden md:block">
              <IoLogOut />
            </span>
            Logout
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default SideBar;
