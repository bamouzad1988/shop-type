// components
import Banner from "../../banner/Banner";
// function
import { getDataBySection } from "@/app/api/product/get-products/route";
// interfaces
import { GetDataBySectionResult, ProductOjectFromDB } from "@/types/props.module";

async function Banners() {
  const response: GetDataBySectionResult = await getDataBySection("بنر");

  if(!response.success){
    return <p> error to get treanding product data</p>
  }

  if(response.success&&!response.data.length){
    return <p> no data found for treanding product in database</p>
  }

  return (
    <div className="mt-8 flex px-3 gap-2 flex-wrap md:flex-nowrap z-0 relative">
      {response.data.map((item: ProductOjectFromDB, index: number) => {
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