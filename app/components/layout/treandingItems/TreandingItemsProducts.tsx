// components
import TreandingProduct from "../../treandingItems/TreandingProduct";
// interfaces
import { ProductOjectFromDB } from "@/types/props.module";

function TreandingItemsProducts(props: {
  products: [] | ProductOjectFromDB[];
}) {
  return (
    <div className="flex flex-wrap justify-start mt-10">
      {props.products.map((item: ProductOjectFromDB, index: number) => {
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
          <TreandingProduct
            discount={item.discount}
            title={nameAndModel}
            price={item.price}
            link={`/product/${convertedTitle}?id=${id}`}
            alt={name}
            image={item.image}
          />
        );
      })}
    
    </div>
  );
}

export default TreandingItemsProducts;
