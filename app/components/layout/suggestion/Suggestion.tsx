// functions
import { getDataBySection } from "@/app/api/product/get-products/route";
// components
import Title from "../../reusableComponents/Title";
import CustomContainer from "../CustomContainer";
import SuggestionList from "./SuggestionList";
import Loader from "../../reusableComponents/Loader";

async function Suggestion() {
  const mostDiscountResponse = await getDataBySection("بیشترین تخفیف");
  const mostVisitResponse = await getDataBySection("بیشترین بازدید");
  const speciaResponse = await getDataBySection("پیشنهاد ویژه");

  const mostDiscountResponseHasData =
    mostDiscountResponse.success && mostDiscountResponse.data.length;
  const mostVisitResponseHasData =
    mostVisitResponse.success && mostVisitResponse.data.length;
  const speciaResponseHasData =
    speciaResponse.success && speciaResponse.data.length;

  return (
    <CustomContainer>
      <div className="flex justify-start flex-wrap">
        <div className="px-3 mt-5 lg:w-1/3 md:w-1/2 xxs:w-full">
          <Title
            textSize="medium"
            position="right"
            hasUnderline={true}
            title="بیشترین تخفیف"
          />
          {mostDiscountResponseHasData ? (
            <SuggestionList products={mostDiscountResponse.data} />
          ) : (
            <Loader size={"2rem"} />
          )}
        </div>
        <div className="px-3 mt-5 lg:w-1/3 md:w-1/2 xxs:w-full">
          <Title
            textSize="medium"
            position="right"
            hasUnderline={true}
            title="بیشترین بازدید"
          />
          {mostVisitResponseHasData ? (
            <SuggestionList products={mostVisitResponse.data} />
          ) : (
            <Loader size={"2rem"} />
          )}
        </div>
        <div className="px-3 mt-5 lg:w-1/3 md:w-1/2 xxs:w-full">
          <Title
            textSize="medium"
            position="right"
            hasUnderline={true}
            title="پیشنهاد ویژه"
          />
          {speciaResponseHasData ? (
            <SuggestionList products={speciaResponse.data} />
          ) : (
            <Loader size={"2rem"} />
          )}
        </div>
      </div>
    </CustomContainer>
  );
}

export default Suggestion;
