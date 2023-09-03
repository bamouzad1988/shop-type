import Title from "../../reusableComponents/Title";
import CustomContainer from "../CustomContainer";
import TreandingItemsProducts from "./TreandingItemsProducts";
import TreandingTabs from "./TreandingTabs";

function TreandingItems() {
  return (
    <div className="mt-20">
      <CustomContainer>
        <Title
          title="پرفروشترین محصولات"
          position="center"
          hasUnderline={true}
          textSize="large"
        />
        <TreandingTabs />
        <TreandingItemsProducts />
      </CustomContainer>
    </div>
  );
}

export default TreandingItems;
