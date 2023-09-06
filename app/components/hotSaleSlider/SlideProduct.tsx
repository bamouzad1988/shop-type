import Image from "next/image";
import myImage from "@/public/images/products/thumbnail/shop-list8.jpg";
import myImage1 from "@/public/images/products/p2.jpg";
import Link from "next/link";
import Toman from "../reusableComponents/Toman";
import { seprateNumbers } from "@/app/functions/functions";
import Percent from "../reusableComponents/Percent";
import { SlideProductProps } from "@/app/types/props.module";

function SlideProduct(props: SlideProductProps) {
  const { price, discount, image, title } = props;
  const output = seprateNumbers(price);
  return (
    <div className="p-2 bg-custom-gray w-fit mb-14 mt-3 mx-auto">
      <Link href="#">
        <div className="h-[241px] w-[193px]">
          <Image
            src={image}
            alt={title}
            className="w-full h-full"
            layout="responsive"
            loading="lazy"
          />
        </div>
        <div className="mt-1 flex justify-between">
          <div>
            {discount && (
              <span className="text-custom-white bg-custom-main px-2 py-1 font-iransans-demibold text-xs rounded-lg">
                {discount}
                <Percent />
              </span>
            )}
          </div>
          <div className="text-">
            <span>{output}</span>
            <Toman />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SlideProduct;
