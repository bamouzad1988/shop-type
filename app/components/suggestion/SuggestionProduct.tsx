import Image from "next/image";
import myImage from "@/public/images/products/thumbnail/shop-list1.jpg";
import Link from "next/link";
import Toman from "../reusableComponents/Toman";
import { seprateNumbers } from "@/app/functions/functions";

function SuggestionProduct() {
  const output = seprateNumbers(36566551465);
  return (
    <div className="suggestion-product flex p-2 justify-between border-custom-border border mt-2">
      <div className="suggestion-product-image">
        <Image src={myImage} alt="dssad" className="w-full h-full" />
      </div>
      <div className="w-[45%] pt-16">
        <h4 className="leading-5">
          <Link
            href="#"
            className="transition-colors duration-300 hover:text-custom-main text-custom-text text-sm font-iransans-demibold"
          >
            لباس زنانه برای همه ی جاها و مهمانی ها
          </Link>
        </h4>
        <div className="mt-3 bg-custom-main px-2 py-1 rounded-full text-custom-white w-fit">
          <span className="inline-block text-sm">{output}</span>
          <Toman color="text-custom-white" />
        </div>
      </div>
    </div>
  );
}

export default SuggestionProduct;
