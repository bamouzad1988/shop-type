import { Events } from "@/app/types/props.module";
import CustomContainer from "../../layout/CustomContainer";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const path = pathname.split("/")[1];

  const linkHandleClick = (e: Events) => {
    e.preventDefault();
  };

  const classes = {
    linkClasses:
      "text-sm h-full sm:py-0 py-3 flex items-center hover:bg-custom-main px-4 duration-300 transition-colors border-0 sm:border-x border-custom-text",
    subMenuClasses:
      "text-sm bg-custom-white scale-y-0 opacity-0 p-2 min-w-[200px] text-custom-text absolute shadow-md duration-300 origin-top transition-all z-10",
    subMenuLinkClasses:
      " block py-2 px-4 block hover:bg-custom-main hover:text-custom-white duration-300 transition-all",
  };

  return (
    <div className="relative w-full mt-4 sm:mt-0 sm:h-[92px] h-[35px]">
      <i className="ti-menu cursor-pointer sm:hidden absolute z-30 peer top-1 left-1 text-custom-main text-3xl"></i>
      <div className="w-full duration-300 transition-all origin-top top-[38px] sm:bg-custom-text block sm:relative absolute sm:scale-y-100 scale-y-0 hover:scale-y-100 peer-hover:scale-y-100">
        <CustomContainer hasBorder={false}>
          <ul className="flex sm:flex-row  text-custom-white bg-custom-text sm:items-center sm:px-3 sm:h-[54px] flex-col ">
            <li className="relative sm:w-[260px] w-full group/category ml-5 cursor-pointer items-center sm:h-full h-[45px] px-4 sm:bg-custom-main flex font-iransans-demibold bg-transparent">
              <i className="ti-menu ml-4 text-xl "></i>
              دسته بندی ها
              <ul
                className={`${classes.subMenuClasses} w-[260px] right-0  group-hover/category:opacity-100 top-[55px] group-hover/category:scale-y-100`}
              >
                <li className="group/digital relative ">
                  <span
                    className={`${classes.subMenuLinkClasses} flex items-center`}
                  >
                    کالای دیجیتال
                    <i className="ti-angle-left text-xxs absolute left-0"></i>
                    <ul
                      className={`${classes.subMenuClasses} top-0  xs:right-[240px] right-16 group-hover/digital:opacity-100 group-hover/digital:scale-y-100`}
                    >
                      <li>
                        <Link href="/" className={classes.subMenuLinkClasses}>
                          موبایل
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className={classes.subMenuLinkClasses}>
                          تبلت
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className={classes.subMenuLinkClasses}>
                          لپ تاپ
                        </Link>
                      </li>
                    </ul>
                  </span>
                </li>
                <li>
                  <Link href="/" className={classes.subMenuLinkClasses}>
                    خانه و آشپزخانه
                  </Link>
                </li>
                <li>
                  <Link href="/" className={classes.subMenuLinkClasses}>
                    مد و پوشاک
                  </Link>
                </li>
                <li>
                  <Link href="/" className={classes.subMenuLinkClasses}>
                    کالاهای سوپرمارکتی
                  </Link>
                </li>
                <li>
                  <Link href="/" className={classes.subMenuLinkClasses}>
                    کتاب و لوازم التحریر
                  </Link>
                </li>
                <li>
                  <Link href="/" className={classes.subMenuLinkClasses}>
                    زیبایی وسلامت
                  </Link>
                </li>
                <li>
                  <Link href="/" className={classes.subMenuLinkClasses}>
                    ورزش و سفر
                  </Link>
                </li>
              </ul>
            </li>
            <li className="h-full">
              <Link
                href="/"
                className={`${classes.linkClasses} ${
                  path === "" && "bg-custom-main"
                } `}
              >
                صفحه اصلی
              </Link>
            </li>
            <li className="h-full">
              <Link
                href="/"
                className={`${classes.linkClasses} ${
                  path === "products" && "bg-custom-main"
                } `}
              >
                محصولات
              </Link>
            </li>
            <li className="h-full relative group/shop ">
              <Link
                onClick={() => linkHandleClick}
                href="/"
                className={`${classes.linkClasses} ${
                  (path === "checkout" || "cart") && "bg-custom-main"
                }relative`}
              >
                فروشگاه
                <i className="ti-angle-down mr-2 text-xxs"></i>
              </Link>
              <ul
                className={`${classes.subMenuClasses} group-hover/shop:opacity-100 group-hover/shop:scale-y-100`}
              >
                <li>
                  <Link href="/" className={classes.subMenuLinkClasses}>
                    کارت
                  </Link>
                </li>
                <li>
                  <Link href="/" className={classes.subMenuLinkClasses}>
                    تسویه حساب
                  </Link>
                </li>
              </ul>
            </li>
            <li className="h-full">
              <Link
                href="/"
                className={`${classes.linkClasses} ${
                  path === "contactus" && "bg-custom-main"
                } `}
              >
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </CustomContainer>
      </div>
    </div>
  );
}

export default Navbar;
