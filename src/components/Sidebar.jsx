import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import ToggleButton from "./ToggleButton";

function Sidebar() {
  return (
    <Aside>
      <LogoWrapper>
        <Img src="/images/logo.svg" alt="Invoice App" />
      </LogoWrapper>
      <ToggleButton />
      <SidebarDivider />
      <Avatar />
    </Aside>
  );
}

export default Sidebar;

const Aside = styled.aside`
  position: sticky;
  top:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 20px 20px 0px;
  width: 100px;
  height: 100vh;
  background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(30, 33, 57)" : "rgb(55, 59, 83)"};
  @media (max-width: 992px) {
    position: relative;
    flex-direction:row;
    width: 100%;
    height: 80px;
    border-radius:0;
  }
`;

const LogoWrapper = styled.div`
  background-color: rgb(124, 93, 250);
  width: 100px;
  height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  margin-bottom: auto;
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 50%;
    background: rgb(146, 119, 255);
    border-radius: 20px 0px;
    z-index: 0;
  }
  @media (max-width:992px){
    margin-bottom:unset;
    width:80px;
    height:80px;
  }
`;
const Img = styled.img`
  width: 40px;
  height: 37px;
  position: relative;
  z-index: 1;
`;

const SidebarDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(73, 78, 110);
  @media (max-width:992px){
    width:1px;
    height:100%;
    align-self:stretch;
  }
`;
