"use client";
// next
import Link from "next/link";
import Image from "next/image";
// mui
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// files
import image1 from "@/public/images/blog/blog1.jpg";
import image2 from "@/public/images/blog/blog2.jpg";

function Card() {
  const classes = {
    link: "font-iransans-regular  text-xs text-custom-white xs:text-custom-text hover:text-custom-textSecondary xs:hover:text-custom-main transition-colors ease-in-out duration-300",
    ListDivClassess:
      "opacity-0 absolute top-[100px] hover:top-[20px] hover:opacity-100 left-0 cursor-default w-[300px] bg-custom-white p-8 shadow-md  transition-all duration-300 group-hover:opacity-100 group-hover:top-[30px] ",
  };
  return (
    <div className="relative">
      <Badge
        badgeContent={2}
        color="primary"
        className="relative cursor-pointer group peer"
        onFocus={(e) => {
          e.stopPropagation();
        }}
      >
        <ShoppingCartOutlinedIcon color="action" />
      </Badge>
      <div
        className={`${classes.ListDivClassess} peer-hover:top-[20px] peer-hover:opacity-100`}
      >
        <div className="flex justify-between border-b border-custom-border pb-4">
          <div>
            <span>2</span>
            <span>محصول</span>
          </div>
          <div>
            <Link href="/">کارت</Link>
          </div>
        </div>
        <ul className="">
          <li className="flex justify-between items-center py-4 w-full border-b border-custom-border">
            <div className="h-fit">
              <Image
                alt="Image"
                style={{ objectFit: "cover", width: "70px", height: "80px" }}
                src={image1}
                loading="lazy"
              />
            </div>
            <div>
              <Link href="/" className={classes.link}>
                <h6 className="text-sm">کفش زنانه مدل زیمباوه</h6>
              </Link>
              <div className="text-left my-1  text-custom-textSecondary">
                <span>1x</span>
                <span>-</span>
                <span>50000000</span>
              </div>
              <div className="flex justify-end cursor-pointer ">
                <span className="text-left border border-custom-border w-fit h-fit block hover:bg-custom-text hover:text-custom-white transition-colors duration-300">
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
          </li>
          <li className="flex justify-between items-center py-4 w-full border-b border-custom-border">
            <div className="h-fit">
              <Image
                alt="Image"
                style={{ objectFit: "cover", width: "70px", height: "80px" }}
                src={image2}
                loading="lazy"
              />
            </div>
            <div>
              <Link href="/" className={classes.link}>
                <h6 className="text-sm">کفش زنانه مدل زیمباوه</h6>
              </Link>
              <div className="text-left my-1  text-custom-textSecondary">
                <span>1x</span>
                <span>-</span>
                <span>50000000</span>
              </div>
              <div className="flex justify-end cursor-pointer ">
                <span className="text-left border border-custom-border w-fit h-fit block hover:bg-custom-text hover:text-custom-white transition-colors duration-300">
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
          </li>
        </ul>
        <div className="checkout mt-4">
          <div className="flex justify-between pb-4">
            <span>جمع کل</span>
            <span>25000000</span>
          </div>
          <div>
            <Link
              href="/"
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
