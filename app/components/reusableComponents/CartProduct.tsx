"use client";
// types
import { CartProductProps } from "@/types/props.module";
// next
import Image from "next/image";
// redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { removeItem } from "@/app/store/slices/cartSlice";

function CartProduct({ title, price, count, image,id }: CartProductProps) {
    const dispatch = useDispatch<AppDispatch>();
    const removeProductHandler=()=>{
        dispatch(removeItem(id))
    }
  return (
    <div className="flex justify-between items-center py-4 w-full border-b border-custom-border">
      <div className="h-fit w-1/3 ml-1">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100%"
          loading="lazy"
          style={{ width: "100%", aspectRatio:9/10 }}
        />
      </div>
      <div>
        <h6 className="text-sm">{title}</h6>
        <div className="text-left my-1  text-custom-textSecondary">
          <span>{count}</span>
          <span>x</span>
          {" "}
          <span>{price}</span>
        </div>
        <div className="flex justify-end cursor-pointer" onClick={()=>removeProductHandler()}>
          <span className="text-left border border-custom-text w-fit h-fit block hover:bg-custom-text hover:text-custom-white transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
