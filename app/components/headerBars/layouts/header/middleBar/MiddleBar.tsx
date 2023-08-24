import Logo from "@/app/components/headerBars/middleBar/Logo";
import SearchAndCategory from "./SearchAndCategory";
import CustomContainer from "../../CustomContainer";
import CardAndProfile from "./CartAndProfile";

function MiddleBar() {
  return (
    <CustomContainer hasBorder={false}>
      <div className="flex justify-between items-center px-3">
        <Logo />
        <SearchAndCategory />
        <CardAndProfile />
      </div>
    </CustomContainer>
  );
}

export default MiddleBar;
