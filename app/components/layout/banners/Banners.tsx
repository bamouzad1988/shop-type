// component
import Banner from "../../banner/Banner";

import { getDataBySection } from "@/app/api/product/get-products/route";

import BannerImage1 from "@/public/images/products/mini-banner1.webp";
import BannerImage2 from "@/public/images/products/mini-banner2.webp";
import BannerImage3 from "@/public/images/products/mini-banner3.webp";
import Loader from "../../reusableComponents/Loader";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

async function Banners() {
  const response = await getDataBySection("بنر");
  // console.log(response[0]._id.toString());
  console.log(response)

  if (!response.length) {
    return <Loader size="2rem" />;
  }
  return (
    <div className="mt-8 flex px-3 gap-2 flex-wrap md:flex-nowrap z-0 relative">
      {response &&
        response.map((item, index: any) => {
          const convertedTitle=item.name.replaceAll(" ","_").replaceAll("?","@").replaceAll('&',"@")
          const id=item._id.toString()
          return (
            <Banner
              key={item.name+index}
              image={item.image}
              overTitle="فروش فوری"
              title="تا 40% تخفیف فروش میانه ی فصل"
              link={`/product/${convertedTitle}?id=${id}`}
              linkText="خرید فوری"
              alt={item.name}
            />
          );
        })}
      
    </div>
  );
}

export default Banners;
