"use client";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaDownload } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";
import { useEffect, useRef } from "react";
import Chart, { ChartOptions } from "chart.js/auto";
import { GoDotFill } from "react-icons/go";
interface CustomChartOptions extends ChartOptions<"doughnut"> {
  // Extend ChartOptions interface

  title?: {
    // Define title property
    display: boolean;
    text: string;
  };
}
const ChartComponent = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let myChart: Chart<"doughnut"> | null = null; // Define myChart variable

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");

      if (myChartRef) {
        // Destroy existing chart instance if exists
        if (myChart) {
          myChart.destroy();
        }

        myChart = new Chart(myChartRef, {
          type: "doughnut",
          data: {
            datasets: [
              {
                data: [65, 35],
                backgroundColor: ["#3B2232", "#FF5428"],
                borderWidth: 0,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "70%", // Adjust the cutout percentage to control the size of the center hole
            plugins: {
              legend: {
                display: true,
                position: "right", // Adjust legend position as needed
              },
            },
            rotation: 180,
          } as CustomChartOptions,
        });
      }
    }

    // Cleanup function to destroy the chart
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);
  return (
    <div className="mt-8">
      {/* Only Mobile view---------------------- */}
      <div>
      <div className="flex items-center justify-between md:hidden">
        <h1 className=" font-mona font-bold text-2xl text-[#3d3d4e]"> Progress <span className="ml-3 text-base text-[#808080]">Illustration</span>
        </h1>
        <span>
        <BiEdit size={20}/>
        </span>
      </div>
      </div>
      {/* -----LArge view --------------------- */}
      <div className="md:flex items-center justify-between hidden">
        <h1 className=" font-mona font-bold text-2xl text-[#3d3d4e]">
          Project Progress
        </h1>
        <span>
          <HiDotsHorizontal size={30} />
        </span>
      </div>
      {/* bg-[#F7F7F7] */}
      <div className=" md:p-8 md:p-4 md:bg-[#F7F7F7] rounded-lg md:mt-4">
        <div className=" md:flex hidden items-center justify-between">
          <h1 className="font-mona text-[#3d3d4e] text-base">
            Illustration Template{" "}
          </h1>
          <div className="flex items-center gap-3">
            <span>
              <FaDownload />
            </span>
            <span>
              <BiEdit />
            </span>
          </div>
        </div>
        <div className="flex items-center md:mt-8">
          <div className="w-1/2">
            <canvas
              height={200}
              width={200}
              ref={chartRef}
              className="relative"
            />
          </div>
          <div>
            <h1 className="text-[#FF5428] flex gap-2 items-start ">
              {" "}
              <GoDotFill />{" "}
              <span className="flex flex-col -mt-1">
               
                <span className="text-[#3d3d4e] text-base font-medium font-mona">Cartoon Illustartion</span>
                <span className="text-sm font-mona text-[#9e9ea7]">Modern storytelling</span>
              </span>
            </h1>
            <h1 className="text-[#3B2232] flex gap-2 items-start mt-6">
              {" "}
              <GoDotFill />{" "}
              <span className="flex flex-col -mt-1">
               
                <span className="text-[#3d3d4e] text-base font-medium font-mona">Abstract Pattern</span>
                <span className="text-sm font-mona text-[#9e9ea7]">Geomatric shapes</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
