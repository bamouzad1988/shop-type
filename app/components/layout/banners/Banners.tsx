// components
import Banner from "../../banner/Banner";
import Loader from "../../reusableComponents/Loader";
// function
import { getDataBySection } from "@/app/api/product/get-products/route";
// interfaces
import { ProductOjectFromDB } from "@/types/props.module";

async function Banners() {
  const response = await getDataBySection("بنر");
  if (!response.length) {
    return <Loader size="2rem" />;
  }
  return (
    <div className="mt-8 flex px-3 gap-2 flex-wrap md:flex-nowrap z-0 relative">
      {response &&
        // @ts-ignore
        response.map((item: ProductOjectFromDB, index: number) => {
          const name = item.name;
          const model = item.model;

          const nameAndModel = model ? `${name} مدل ${model}` : name;

          const convertedTitle = nameAndModel
            .replaceAll(" ", "_")
            .replaceAll("?", "@")
            .replaceAll("&", "@");
          const id = item._id.toString();
          return (
            <Banner
              key={name + index}
              image={item.image}
              overTitle="فروش فوری"
              title="تا 40% تخفیف فروش میانه ی فصل"
              link={`/product/${convertedTitle}?id=${id}`}
              linkText="خرید فوری"
              alt={name}
            />
          );
        })}
    </div>
  );
}

export default Banners;
