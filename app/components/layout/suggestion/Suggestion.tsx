import Title from "../../reusableComponents/Title";
import SuggestionList from "./SuggestionList";
// const data = [{ image: "", title: "", price: "", discount: 20, id: "" }];
function Suggestion() {
  return (
    <div className="flex justify-start flex-wrap">
      <div className="px-3 mt-5 w-1/3 md:w-1/2 xxs:w-full">
        <Title
          textSize="medium"
          position="right"
          hasUnderline={true}
          title="بیشترین تخفیف"
        />
        <SuggestionList />
      </div>
      <div className="px-3 mt-5 w-1/3 md:w-1/2 xxs:w-full">
        <Title
          textSize="medium"
          position="right"
          hasUnderline={true}
          title="بیشترین بازدید"
        />
        <SuggestionList />
      </div>
      <div className="px-3 mt-5 w-1/3 md:w-1/2 xxs:w-full">
        <Title
          textSize="medium"
          position="right"
          hasUnderline={true}
          title="پیشنهاد ویژه"
        />
        <SuggestionList />
      </div>
    </div>
  );
}

export default Suggestion;