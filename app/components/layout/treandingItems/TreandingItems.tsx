import CenteredTitle from "../../reusableComponents/CenterdTitle";
import CustomContainer from "../CustomContainer";
import TreandingItemsProducts from "./TreandingItemsProducts";
import TreandingTabs from "./TreandingTabs";

function TreandingItems() {
  return (
    <div className="mt-20">
      <CustomContainer>
        <CenteredTitle title="پرفروشترین محصولات" />
        <TreandingTabs />
        <TreandingItemsProducts />
      </CustomContainer>
    </div>
  );
}

export default TreandingItems;
