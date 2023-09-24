"use client";
// next
import Link from "next/link";
import Image from "next/image";
// mui
import Badge from "@mui/material/Badge";
// files
import image1 from "@/public/images/blog/blog1.jpg";
import image2 from "@/public/images/blog/blog2.jpg";

function Card() {
  const classes = {
    link: "font-iransans-regular text-xs text-custom-white xs:text-custom-text hover:text-custom-textSecondary xs:hover:text-custom-main transition-colors ease-in-out duration-300",
    ListDivClassess:
      " absolute top-[20px] z-20 origin-top scale-y-0 left-0 cursor-default w-[300px] bg-custom-white p-8 shadow-md hover:scale-y-100 transition-all duration-300 ",
  };
  return (
    <div className="relative ">
      <Badge
        badgeContent={2}
        color="primary"
        className="relative cursor-pointer peer "
        onFocus={(e) => {
          e.stopPropagation();
        }}
      >
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-base css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
      </Badge>
      <div className={`${classes.ListDivClassess}  peer-hover:scale-y-100`}>
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
              <h6 className="text-sm">کفش زنانه مدل زیمباوه</h6>
              <div className="text-left my-1  text-custom-textSecondary">
                <span>1x</span>
                <span>-</span>
                <span>50000000</span>
              </div>
              <div className="flex justify-end cursor-pointer ">
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
              <h6 className="text-sm">کفش زنانه مدل زیمباوه</h6>
              <div className="text-left my-1  text-custom-textSecondary">
                <span>1x</span>
                <span>-</span>
                <span>50000000</span>
              </div>
              <div className="flex justify-end cursor-pointer ">
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
