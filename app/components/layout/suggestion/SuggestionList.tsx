import SuggestionProduct from "../../suggestion/SuggestionProduct";
import myImage from "@/public/images/products/thumbnail/shop-list3.jpg";

function SuggestionList(props: { discount?: number }) {
  return (
    <div className="w-full">
      <SuggestionProduct
        title="لباس زنانه مناسب همه جا و همه ی زمان ها"
        price={31551556}
        image={myImage}
        discount={props.discount}
      />
      <SuggestionProduct
        title="لباس زنانه مناسب همه جا و همه ی زمان ها"
        price={31551556}
        image={myImage}
        discount={props.discount}
      />
      <SuggestionProduct
        title="لباس زنانه مناسب همه جا و همه ی زمان ها"
        price={31551556}
        image={myImage}
        discount={props.discount}
      />
    </div>
  );
}

export default SuggestionList;
