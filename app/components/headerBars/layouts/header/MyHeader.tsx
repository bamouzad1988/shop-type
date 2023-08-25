"use client";
import MuiRtlWrapper from "@/app/components/reusableComponents/MuiRtlWrapper";
import TopBar from "../../topBar/TopBar";
import CustomContainer from "../CustomContainer";
import MiddleBar from "./middleBar/MiddleBar";
import Navbar from "../../navbar/Navbar";

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
