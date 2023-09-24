import { GetDataBySectionResult } from "@/types/props.module";
import HotSaleSlider from "./HotSaleSlider";
import { getDataBySection } from "@/app/api/product/get-products/route";

async function HotSaleSiderWrapper() {
  const response: GetDataBySectionResult = await getDataBySection("اسلایدر");
  if(!response.success){
    return <p> error to get treanding product data</p>
  }

  if(response.success&&!response.data.length){
    return <p> no data found for treanding product in database</p>
  }

  return <HotSaleSlider products={response.data}/>;
}

export default HotSaleSiderWrapper;
