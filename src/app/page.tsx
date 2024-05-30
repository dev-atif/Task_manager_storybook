"use client";
import ActivityTab from "@/Components/ActivityTab";
import RightSection from "@/Components/RightSection";
import { useState } from "react";
import User from "../../public/images (1).jpg";
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "@/Components/SearchBar";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import SideBar from "@/Components/SideBar";
import { RxCross2 } from "react-icons/rx";
const tabs = [
  { name: "Recent Added", content: <ActivityTab /> },
  { name: "In Progress", content: "Schedule Content" },
  { name: "In Review", content: "Overview Content" },
  { name: "Completed", content: "Chat Content" },
];
export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <main>
      <div className="px-5 md:px-0 pt-4 ">
        <div className="flex flex-col-reverse lg:flex-row xl:px-14 md:gap-12 items-baseline md:px-4">
          {/* Sechedule ---------------------- */}
          <div className="flex  items-baseline justify-between mt-4 lg:w-1/2 w-full">
            <h1 className="md:text-2xl text-3xl  font-mona font-bold text-[#3d3d4e]">
              Schedule
            </h1>
            <p className="flex items-center font-mona font-semibold text-sm gap-2 text-[#3d3d4e]">
              {" "}
              Aug 5, 2021{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </p>
          </div>
          {/* -------Search menu */}
          <div className="lg:w-1/2 w-full">
            <div className="flex md:gap-10 items-center justify-between">
              <div className="md:hidden relative  w-8">
                {!openmenu ? (
                  <RiMenu3Fill
                    onClick={() => setOpenmenu(!openmenu)}
                    className={` transition-all transform duration-700  z-50 ${!openmenu ? "text-black " : "text-white"}`}
                    size={30}
                  />
                ) : (
                  <RxCross2
                    onClick={() => setOpenmenu(!openmenu)}
                    className={`fixed top-[25px] transition-all transform duration-700  z-50 ${!openmenu ? "text-black" : "text-white"}`}
                    size={30}
                  />
                )}

                <div
                  className={`bg-black fixed w-full z-20 left-0 top-0 ${!openmenu ? "-translate-x-[150%]" : "translate-x-0"} transition-all transform duration-500`}
                >
                  <SideBar />
                </div>
              </div>
              <div className="md:flex-1 ml-8 md:ml-0">
                <SearchBar />
              </div>
              <div>
                <Image
                  src={User}
                  alt="user"
                  className="w-12 h-1w-12 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------Tabs------------------------------ */}
      <div className="lg:flex items-baseline   xl:px-14 px-4 gap-12">
        <div className=" lg:w-1/2 w-full">
          <div>
            <div className="flex xl:gap-[4.5rem] gap-4 md:mt-8 mt-4 overflow-x-scroll whitespace-nowrap no-scrollbar">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`py-2 font-mona font-medium xl:text-base  md:text-sm text-lg ${
                    activeTab === index
                      ? "underline text-black decoration-[#9e9ea7]"
                      : "text-[#9e9ea7]"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="md:mt-8 sm:mt-4 ">{tabs[activeTab].content}</div>
          </div>
        </div>
        <div className=" lg:w-1/2 w-full">
          <RightSection />
        </div>
      </div>
    </main>
  );
}
