"use client";
// next
import Link from "next/link";
import Image from "next/image";
// mui
import Badge from "@mui/material/Badge";
// redux
import { useAppSelector } from "@/app/store/store";
import CartProduct from "../../reusableComponents/CartProduct";

function Card() {
  const itemsSelector = useAppSelector((state) => state.cartReducer.items);
  const totalAmountSelector = useAppSelector(
    (state) => state.cartReducer.totalAmount
  );
  const productsLength = itemsSelector.length;

  const classes = {
    link: "font-iransans-regular text-xs text-custom-white xs:text-custom-text hover:text-custom-textSecondary xs:hover:text-custom-main transition-colors ease-in-out duration-300",
    ListDivClassess:
      " absolute top-[20px] z-20 origin-top scale-y-0 left-0 cursor-default w-[300px] bg-custom-white p-8 shadow-md hover:scale-y-100 transition-all duration-300 ",
  };

  if (!productsLength) {
    return (
      <div className="relative ">
        {/* badge */}
        <Badge
          badgeContent={productsLength}
          color="primary"
          className="relative cursor-pointer peer "
          onFocus={(e) => {
            e.stopPropagation();
          }}
        >
          <svg
            className=" text-base fill-custom-text"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ShoppingCartOutlinedIcon"
            width="18px"
            height="18px"
          >
            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </Badge>
        {/* main */}
        <div
          className={`${classes.ListDivClassess}  peer-hover:scale-y-100 !p-2 w-max text-custom-main`}
        >
          <div className="text-center border-b border-custom-border ">
            <p className="text-sm">سبد خرید خالی می باشد!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative ">
      {/* badge */}
      <Badge
        badgeContent={productsLength}
        color="primary"
        className="relative cursor-pointer peer "
        onFocus={(e) => {
          e.stopPropagation();
        }}
      >
        <svg
          className=" text-base fill-custom-text"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ShoppingCartOutlinedIcon"
          width="18px"
          height="18px"
        >
          <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </Badge>
      {/* main */}
      <div className={`${classes.ListDivClassess}  peer-hover:scale-y-100`}>
        <div className="flex justify-between items-center border-b border-custom-border pb-4">
          <div className="border-b border-custom-text py-1 block text-center px-5">
            <span className="ml-1 text-custom-main">{productsLength}</span>
            <span>محصول</span>
          </div>
          <div>
            <Link href="/cart" className="w-full py-1 block text-center  px-5 bg-custom-text text-custom-white hover:bg-custom-main transition-colors duration-300" >کارت</Link>
          </div>
        </div>
        {/* product list */}
        <div>
          {itemsSelector.map((item, index) => {
            return (
              <CartProduct
                key={item.name + index}
                price={item.price}
                image={item.image}
                title={item.name}
                count={item.count}
                id={item.id}
              />
            );
          })}
        </div>
        {/* footer */}
        <div className="checkout mt-4">
          <div className="flex justify-between pb-4">
            <span>جمع کل</span>
            <span>{totalAmountSelector}</span>
          </div>
          <div>
            <Link
              href="/checkout"
              className="w-full py-2 block text-center  px-5 bg-custom-text text-custom-white hover:bg-custom-main transition-colors duration-300"
            >
              پرداخت
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
