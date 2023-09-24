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
        <div className="flex text-custom-white bg-custom-main px-2 py-1 font-iransans-demibold text-xs rounded-lg absolute top-3 right-6">
          {discount}
          <Percent />
        </div>
      ):null}
      <div className="cursor-pointer absolute top-3 left-7 text-custom-white bg-custom-main px-2 rounded-lg transition-colors duration-300 hover:bg-custom-textSecondary">
      <svg className=" text-base css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
      </div>
    </div>
  );
}

export default TreandingProduct;
function typeOf(discount: number): any {
  throw new Error("Function not implemented.");
}

