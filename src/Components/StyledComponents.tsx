import React from "react";
import styled from "styled-components";
interface ContainerProps {
  bgColor?: string;
  textColor?: string;
  shadow?: string;
  border?: string;

}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bgColor || "#FFFFFF"};
  padding: 15px 20px;
  border-radius: 10px;
  border: ${(props) => props.border};
  color: ${(props) => props.textColor};
  box-shadow: ${(props) => props.shadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Subcontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: -10px;
  }
`;
///////Vertical card section ---------------------------
interface MaincontainerProps {
  border?: string; 
  backgroundColor?:string;
}

export const Maincontainer = styled.div<MaincontainerProps>`
  width: fit-content;
  padding: 8px 0px;
  border: ${(props) => props.border};
  border-radius:8px;
  background-color: ${(props) => props.backgroundColor};
`;

/* export const MainSubcontainer = styled.div`
  background-color: #fee7de;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 25px;
  border: none;
  border-radius: 8px;
  
`; */
