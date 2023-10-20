"use client";
// next
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
// react
import { useState } from "react";
// components
import ResponsiveDialog from "../../reusableComponents/Dialog";
//redux
import { clearCart } from "@/app/store/slices/cartSlice";
import { useDispatch } from "react-redux";

function TopBar() {
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);
  // get user sessin
  const { data: session } = useSession();

  // run after click on exit button in menu
  const exitClickHandler = () => {
    setShowDialog(true);
  };

  // run after user agree the exit dialog box
  const exitHandler = (text: string) => {
    if (text === "ok") {
      // cart will empty
      dispatch(clearCart());
      signOut();
    }
    setShowDialog(false);
  };
  const classes = {
    main: ` group scale-y-8  hover:scale-y-100  group  origin-top  flex
    transition-all duration-300 overflow-hidden xxs:flex-col md:flex-row justify-between py-0 xs:py-2 xs:items-center 
    bg-custom-main xxs:absolute z-20 xxs:w-full xs:py-4 xs:scale-y-100  xs:relative  xs:bg-custom-white`,

    ul: "group-hover:opacity-100 opacity-0 xs:opacity-100 flex flex-col xs:flex-row mt-0 md:mt-0 xs:mt-3 [&>li]:border-custom-border [&>li]:xs:border-b-0 [&>li]:border-b",
    liBorderLeft: "xs:border-l",
    li: "py-3 xs:py-0  text-base px-3 flex items-center text-custom-white xs:text-custom-main",
    link: "font-iransans-regular text-xs text-custom-white xs:text-custom-text hover:text-custom-textSecondary xs:hover:text-custom-main transition-colors ease-in-out duration-300",
    span: "font-iransans-demibold text-xs text-custom-white xs:text-custom-text",
  };
  return (
    <div className=" xs:mt-1 xs:mb-2">
      {showDialog && (
        <ResponsiveDialog
          title="خروج از ناحیه کاربری"
          text="آیا می خواهید خارج شوید؟"
          okText="خروج"
          open={showDialog}
          cancelText="انصراف"
          exitHandler={exitHandler}
        />
      )}
      <i className="ti-menu cursor-pointer xs:hidden absolute z-30 group top-1 left-1 text-custom-white peer"></i>
      <div
        className={`${classes.main} peer-hover:scale-y-100 peer-hover:[&>ul]:opacity-100`}
      >
        <ul className={`${classes.ul} `}>
          <li className={`${classes.li} ${classes.liBorderLeft} `}>
            <i className="ti-location-pin ml-1"></i>
            <Link href="/" className={classes.link}>
              محل فروشگاه
            </Link>
          </li>
          {session && (
            <li className={`${classes.li} ${classes.liBorderLeft}`}>
              <i className="ti-plus ml-1"></i>
              <Link href="/add-product" className={classes.link}>
                درج محصول
              </Link>
            </li>
          )}
          {session && (
            <li className={`${classes.li} ${classes.liBorderLeft}`}>
              <i className="ti-user ml-1"></i>
              <Link href="/profile" className={classes.link}>
                اکانت
              </Link>
            </li>
          )}
          <li className={classes.li}>
            <i className="ti-power-off ml-1"></i>
            {session ? (
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  exitClickHandler();
                }}
                href="#"
                className={classes.link}
              >
                خروج
              </Link>
            ) : (
              <Link href="/login" className={classes.link}>
                ورود
              </Link>
            )}
          </li>
        </ul>
        <ul className={classes.ul}>
          <li className={`${classes.li} ${classes.liBorderLeft}`}>
            <i className="ti-headphone-alt ml-1"></i>
            <span className={classes.span}>021-555-1111</span>
          </li>
          <li className={classes.li}>
            <i className="ti-email ml-1"></i>
            <span className={classes.span}>suport@xxx.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
