// tytpes
import { ProductOjectFromDB } from "@/types/props.module";
// components
import SuggestionProduct from "../../suggestion/SuggestionProduct";

function SuggestionList({products}:{ products: [] | ProductOjectFromDB[] }) {
  return (
    <div className="w-full">
       {products.map((item: ProductOjectFromDB, index: number) => {
            const name = item.name;
            const model = item.model;
            // if there is model add it to title
            const nameAndModel = model ? `${name} مدل ${model}` : name;
            // convert title to text that use in url as slug
            const convertedTitle = nameAndModel
              .replaceAll(" ", "_")
              .replaceAll("?", "@")
              .replaceAll("&", "@");
            const id = item._id.toString();
            return (
              <SuggestionProduct
              key={nameAndModel+index}
              title={nameAndModel}
              price={item.price}
              image={item.image}
              discount={item.discount}
              link={`/product/${convertedTitle}?id=${id}`}
            />
            );
          })}

    </div>
  );
}

export default SuggestionList;
