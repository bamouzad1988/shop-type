"use client";
// next
import Image from "next/image";
import Link from "next/link";
// components
import Toman from "../reusableComponents/Toman";
import Percent from "../reusableComponents/Percent";
// functions
import { seprateNumbers } from "@/lib/functions";
// interfaces
import { SuggestionProps } from "@/types/props.module";

function SuggestionProduct(props: SuggestionProps) {
  const { title, price, image, discount,link } = props;
  const output =price? seprateNumbers(price):seprateNumbers(351155525);

  return (
    <div className="suggestion-product relative flex p-2 justify-between border-custom-border border mt-2">
      <div className="suggestion-product-image">
        {/* TODO */}
        <img
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "100%", height: "100%" }}
          loading="lazy"
        />
      </div>
      <div className="w-[45%] pt-16">
        <h4 className="leading-5">
          <Link
            href={link}
            className="transition-colors duration-300 hover:text-custom-main text-custom-text text-sm font-iransans-demibold"
          >
            {title}
          </Link>
        </h4>
        <div className="mt-3 bg-custom-main px-2 py-1 rounded-full text-custom-white w-fit">
          <span className="inline-block text-sm">{output}</span>
          <Toman color="text-custom-white" />
        </div>
      </div>
      {discount && (
        <span className="flex text-custom-white bg-custom-main px-2 py-1 font-iransans-demibold text-xs rounded-lg absolute top-2 left-3">
          {discount}
          <Percent />
        </span>
      )}
    </div>
  );
}

export default SuggestionProduct;
