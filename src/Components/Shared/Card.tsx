import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Container,
  Subcontainer,
  UserAvatarContainer,
} from "../StyledComponents";
import { CardData } from "./Types";
import { FaDownload } from "react-icons/fa";

interface UserImage {
  image: StaticImageData;
}
interface CardProps {
  Icon?: React.ReactNode;
  tittle?: string;
  time?: string;
  user?: UserImage[];
  bg?: string;
  border?: string;
  shadow?: string;
  textColor?: string;
  iconbg?: string;
  IcontextColor?: string;
  iconImage?: string | StaticImageData;
  Kb?: string;
}
const Card: React.FC<CardProps> = ({
  Icon,
  tittle,
  time,
  user = [],
  bg,
  border,
  shadow,
  textColor,
  iconbg,
  IcontextColor,
  iconImage,
  Kb,
}) => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-5">
          <Container
            border={border}
            bgColor={bg}
            shadow={shadow}
            textColor={textColor}
          >
            {/* #FFE6DF */}
            <Subcontainer>
              <div
                className={`hidden md:block w-fit  p-3 rounded-lg `}
                style={{ backgroundColor: iconbg || "#FFE6DF" }}
              >
                <span style={{ color: IcontextColor || "black" }}>
                  {Icon
                    ? Icon
                    : iconImage && (
                        <div className="w-8 flex items-center justify-center">
                          <Image
                            src={iconImage}
                            alt="icon"
                            width={20}
                            height={20}
                          />
                        </div>
                      )}
                </span>
              </div>
              <div className="font-mona  flex flex-col">
                <h1 className="text-lg">{tittle}</h1>
                <p className="text-sm text-[#9e9ea7]">{time}</p>
              </div>
            </Subcontainer>
            {user && user.length > 0 ? (
              <UserAvatarContainer>
                {user.map((item, index) => (
                  <div
                    key={index}
                    className="avatar relative w-[48px] h-[48px]"
                  >
                    <Image
                      src={item.image}
                      alt={`User ${index + 1}`}
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                ))}
              </UserAvatarContainer>
            ) : (
              <>
                <div className="flex items-center gap-6">
                  <h1 className="font-mona font-semibold text-sm  text-[#3d3d4e] ">
                    {Kb}
                  </h1>
                  <span>
                    <FaDownload size={15} />
                  </span>
                </div>
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Card;
