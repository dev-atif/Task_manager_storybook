import { StaticImageData } from "next/image";
import React, { ReactElement } from "react";
export interface ImageData {
    image: string | StaticImageData;
  }
  
export interface CardData {
    Icon: React.ReactNode;
    text: string;
    time: string;
    Images: ImageData[];
  }