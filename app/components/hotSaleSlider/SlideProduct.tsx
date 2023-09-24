// next
import Image from "next/image";
import Link from "next/link";
// functions
import { seprateNumbers } from "@/lib/functions";
// components
import Toman from "../reusableComponents/Toman";
import Percent from "../reusableComponents/Percent";
// types
import { SlideProductProps } from "@/types/props.module";

function SlideProduct(props: SlideProductProps) {
  const { price, discount, image, title,link } = props;
  const output =price? seprateNumbers(price):seprateNumbers(56464665);
  return (
    <div className="p-2 bg-custom-gray w-fit mb-14 mt-3 mx-auto">
      <Link href={link}>
        <div className="h-[241px] w-[193px]">
          {/* //TODO */}
          <img
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="mt-1 flex justify-between items-center">
          <div>
            {discount && (
              <span className="flex text-custom-white bg-custom-main px-2 py-1 font-iransans-demibold text-xs rounded-lg">
                {discount}
                <Percent />
              </span>
            )}
          </div>
          <div className="bg-custom-main px-2 py-1] text-custom-lightGray font-iransans-demibold rounded-lg">
            <span >{output}</span>
            <Toman color="custom-lightGray"/>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SlideProduct;
