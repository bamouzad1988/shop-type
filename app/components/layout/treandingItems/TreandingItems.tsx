// functions
import { getDataBySection } from "@/app/api/product/get-products/route";
// interfaces
import { GetDataBySectionResult } from '@/types/props.module';
// components
import Title from "../../reusableComponents/Title";
import CustomContainer from "../CustomContainer";
import TreandingItemsProducts from "./TreandingItemsProducts";
import TreandingTabs from "./TreandingTabs";

async function TreandingItems() {
  const response:GetDataBySectionResult = await getDataBySection("پرفروشترین");

if(!response.success){
  return <p> error to get treanding product data</p>
}
if(response.success&&!response.data.length){
  return <p> no data found for treanding product in database</p>
}

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
        <TreandingItemsProducts products={response.data} />
      </CustomContainer>
    </div>
  );
}

export default TreandingItems;
