"use client";
import MuiRtlWrapper from "@/app/components/reusableComponents/MuiRtlWrapper";
import MiddleBar from "./middleBar/MiddleBar";
import CustomContainer from "../CustomContainer";
import TopBar from "../../headerBars/topBar/TopBar";
import Navbar from "../../headerBars/navbar/Navbar";

function Header() {
  return (
    <MuiRtlWrapper>
      <CustomContainer hasBorder={true}>
        <TopBar />
      </CustomContainer>
      <CustomContainer hasBorder={false}>
        <MiddleBar />
      </CustomContainer>
      <Navbar />
    </MuiRtlWrapper>
  );
}

export default Header;
