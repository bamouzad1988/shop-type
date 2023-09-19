'use client'
import Logo from "@/app/components/headerBars/middleBar/Logo";
import SearchAndCategory from "./SearchAndCategory";
import CardAndProfile from "./CartAndProfile";
import CustomContainer from "../../CustomContainer";

function MiddleBar() {
  return (
    <CustomContainer hasBorder={false}>
      <div className="flex justify-between items-center px-3 mt-[50px] xs:mt-[30px] sm:flex-nowrap flex-wrap">
        <div className="sm:order-1 order-[-2]">
          <Logo />
        </div>
        <div className="sm:w-fit w-full order-2 mt-3 sm:mt-0">
          <SearchAndCategory />
        </div>
        <div className="sm:order-3 order-[-1]">
          <CardAndProfile />
        </div>
      </div>
    </CustomContainer>
  );
}

export default MiddleBar;
