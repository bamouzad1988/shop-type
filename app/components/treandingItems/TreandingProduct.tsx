// next
import Image from "next/image";
import Link from "next/link";
// components
import Toman from "../reusableComponents/Toman";
// mui
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// types
import { BestsellingProps } from "@/types/props.module";
import Percent from "../reusableComponents/Percent";
// functions
import { seprateNumbers } from "../../../lib/functions";

function TreandingProduct(props: BestsellingProps) {
  const { discount, title, price, image,link,alt } = props;
  const sepratedPrice = price?seprateNumbers(price):seprateNumbers(15651651);

  return (
    <div className="treanding-product px-3 my-4 w-full md:w-1/3 xxl:w-1/4 h-auto relative">
      <Link href={link} className="h-full group block overflow-hidden" target="_blank">
        <Image
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
          src={image}
          alt={alt}
          width={0}
          height={0}
          sizes="100%"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <div className=" p-2 bg-custom-border">
        <p className="treanding-product-details">{title}</p>
        <div className="text-left text-custom-textSecondary mt-2">
          <span>{sepratedPrice}</span>
          <Toman />
        </div>
      </div>
      {discount ? (
        <div className="text-custom-white bg-custom-main px-2 py-1 font-iransans-demibold text-xs rounded-lg absolute top-3 right-6">
          <Percent />
          {discount}
        </div>
      ):null}
      <div className="cursor-pointer absolute top-3 left-7 text-custom-white bg-custom-main px-2 rounded-lg transition-colors duration-300 hover:bg-custom-textSecondary">
        <ShoppingCartOutlinedIcon className="text-base" />
      </div>
    </div>
  );
}

export default TreandingProduct;
function typeOf(discount: number): any {
  throw new Error("Function not implemented.");
}

